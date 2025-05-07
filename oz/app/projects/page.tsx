import { client, urlFor } from '../../lib/sanity';
import { Project } from '../../types';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Projects by Oz - Our Concrete and Construction Work',
  description: 'Discover the projects completed by Oz, showcasing our expertise in concrete and construction across Australia.',
};

export default async function Projects() {
  const projects: Project[] = await client.fetch('*[_type == "project"] | order(date desc)');

  return (
    <div>
      <div className="container">
        <h1>Projects by Oz</h1>
        <p className="mb-8">Explore our latest concrete and construction projects across Australia.</p>
      </div>
      <div className="section-divider"></div>
      <div className="container">
        <div className="project-grid">
          {projects.map((project) => (
            <div key={project._id} className="project-card">
              {project.images && project.images[0] ? (
                <Image
                  src={urlFor(project.images[0]).width(400).url()}
                  alt={`${project.title} - Oz`}
                  width={400}
                  height={250}
                  className="mb-4"
                />
              ) : (
                <div className="w-full h-[250px] bg-gray-200 mb-4 flex items-center justify-center text-gray-500">
                  No Image Available
                </div>
              )}
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              {project.slug?.current ? (
                <Link
                  href={`/projects/${project.slug.current}`}
                  className="text-yellow-500 hover:text-gray-700"
                >
                  Learn More
                </Link>
              ) : (
                <span className="text-gray-500 italic">Details unavailable</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}