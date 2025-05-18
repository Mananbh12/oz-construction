import { client, urlFor } from '../../../lib/sanity';
import { Project } from '../../../types';
import Image from 'next/image';

type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const projects = await client.fetch('*[_type == "project"]{slug}');
  return projects
    .filter((project: { slug: { current: string } }) => project.slug?.current)
    .map((project: { slug: { current: string } }) => ({
      slug: project.slug.current,
    }));
}

export async function generateMetadata({ params }: Params) {
  const project: Project = await client.fetch(
    '*[_type == "project" && slug.current == $slug][0]',
    { slug: params.slug }
  );

  return {
    title: `${project?.title || 'Project'} - Oz Concrete and Construction`,
    description:
      project?.description ||
      'Discover the details of this project by Oz, showcasing our expertise in concrete and construction in Australia.',
  };
}

export default async function ProjectDetail({ params }: Params) {
  const project: Project = await client.fetch(
    '*[_type == "project" && slug.current == $slug][0]',
    { slug: params.slug }
  );

  if (!project || !project.slug?.current) {
    return <div className="container">Project not found</div>;
  }

  return (
    <div className="container">
      <h1>{project.title}</h1>
      {project.images && project.images.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2 mb-8">
          {project.images.map((image, idx) => (
            <Image
              key={idx}
              src={urlFor(image).width(600).url()}
              alt={`${project.title} - Image ${idx + 1}`}
              width={600}
              height={400}
              className="shadow-md"
            />
          ))}
        </div>
      )}
      <h2>Project Details</h2>
      <p>{project.description}</p>
      {project.date && (
        <p>
          <strong>Completed on:</strong>{' '}
          {new Date(project.date).toLocaleDateString()}
        </p>
      )}
      <a
        href="/projects"
        className="text-yellow-500 hover:text-gray-700 mt-4 inline-block"
      >
        ← Back to Projects
      </a>
    </div>
  );
}
