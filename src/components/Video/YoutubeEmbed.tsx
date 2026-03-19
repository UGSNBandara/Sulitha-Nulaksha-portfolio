'use client';

import React from 'react';

interface YoutubeEmbedProps {
  youtubeId: string;
  title: string;
  className?: string;
}

export const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({
  youtubeId,
  title,
  className = '',
}) => {
  return (
    <div className={`relative w-full bg-black rounded-xl overflow-hidden shadow-glass ${className}`} style={{ paddingBottom: '56.25%' }}>
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
