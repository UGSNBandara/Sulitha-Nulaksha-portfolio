import { notFound } from 'next/navigation';
import ProjectDetailPage from '@/components/ProjectDetailPage';
import { getProjectDetail } from '@/data/projects';

interface Props {
  params: { slug: string };
}

export default function Page({ params }: Props) {
  const project = getProjectDetail(params.slug);
  if (!project) notFound();
  return <ProjectDetailPage project={project} />;
}
