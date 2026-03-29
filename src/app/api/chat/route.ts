import { NextRequest, NextResponse } from 'next/server';

const MAX_MESSAGE_LENGTH = 150;
const MAX_SESSION_ID_LENGTH = 64;
const SESSION_ID_PATTERN = /^[A-Za-z0-9_-]+$/;

function errorResponse(detail: string, status: number) {
  return NextResponse.json({ detail }, { status });
}

export async function POST(req: NextRequest) {
  const agentUrl = process.env.AGENT_URL?.trim();
  const portfolioKey = process.env.PORTFOLIO_SECRET_KEY?.trim();

  if (!agentUrl || !portfolioKey) {
    console.error('Chat API misconfigured: AGENT_URL or PORTFOLIO_SECRET_KEY is missing.');
    return errorResponse('Service unavailable', 500);
  }

  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return errorResponse('Invalid request payload', 400);
  }

  if (!payload || typeof payload !== 'object') {
    return errorResponse('Invalid request payload', 400);
  }

  const { message, session_id } = payload as {
    message?: unknown;
    session_id?: unknown;
  };

  if (typeof message !== 'string') {
    return errorResponse('Invalid message', 400);
  }

  const normalizedMessage = message.trim();
  if (normalizedMessage.length < 1 || normalizedMessage.length > MAX_MESSAGE_LENGTH) {
    return errorResponse(`Message must be 1-${MAX_MESSAGE_LENGTH} characters`, 400);
  }

  let normalizedSessionId: string | null = null;
  if (session_id !== undefined && session_id !== null) {
    if (typeof session_id !== 'string') {
      return errorResponse('Invalid session_id', 400);
    }

    const trimmedSessionId = session_id.trim();
    if (
      trimmedSessionId.length < 1 ||
      trimmedSessionId.length > MAX_SESSION_ID_LENGTH ||
      !SESSION_ID_PATTERN.test(trimmedSessionId)
    ) {
      return errorResponse('Invalid session_id', 400);
    }

    normalizedSessionId = trimmedSessionId;
  }

  try {
    const response = await fetch(`${agentUrl}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Portfolio-Key': portfolioKey,
      },
      body: JSON.stringify({ message: normalizedMessage, session_id: normalizedSessionId }),
    });

    if (!response.ok) {
      console.warn(`Agent proxy non-OK response: ${response.status}`);
      return errorResponse('Request failed', 502);
    }

    let data: unknown;
    try {
      data = await response.json();
    } catch {
      console.error('Agent proxy error: invalid JSON response from upstream.');
      return errorResponse('Invalid agent response', 502);
    }

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.error('Agent proxy error:', err);
    return errorResponse('Agent unavailable', 502);
  }
}
