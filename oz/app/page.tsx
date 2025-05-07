import { client, urlFor } from '../lib/sanity';
import { Project } from '../types';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Oz - Expert in Concrete and Construction in Australia',
  description: 'Welcome to Oz, your trusted partner for concrete and construction services in Australia. Explore our latest projects!',
};

export default async function Home() {
  const projects: Project[] = await client.fetch('*[_type == "project"] | order(date desc) [0...3]');

  return (
    <div className="bg-gray-50">
      {/* Section Héroïque */}
      <section
        className="relative bg-cover bg-center h-[760px] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://plus.unsplash.com/premium_photo-1671617779915-80d66fcfe002?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Welcome to our website
          </h1>
          <p className="text-xl md:text-2xl text-white mb-6 drop-shadow">
            Oz, the solution for affordable and reliable concrete work  
          </p>
          <a href="/contact" className="btn bg-[#f59e0b] text-white hover:bg-[#f59e0b] transition-all duration-300">
            Contact us now !
          </a>
        </div>
      </section>

      {/* Derniers Projets */}
      <section className="container py-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1F2A44] text-center mb-10">
          Our most recent projects
        </h2>
        <div className="project-grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project._id}
              className="project-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title || 'Projet sans titre'}</h3>
              {project.images && project.images.length > 0 && project.images[0] ? (
                <Image
                  src={urlFor(project.images[0]).width(400).url()}
                  alt={`${project.title} - Oz`}
                  width={400}
                  height={250}
                  className="mb-4 rounded-lg object-cover transition-transform hover:scale-105"
                />
              ) : (
                <div className="mb-4 h-60 bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg">
                  No picture available
                </div>
              )}
              <p className="text-gray-600 mb-4 line-clamp-3">{project.description || 'No description available'}</p>
              {project.slug?.current ? (
                <Link
                  href={`/projects/${project.slug.current}`}
                  className="text-yellow-500 hover:text-[#1F2A44] font-medium transition-colors"
                >
                  Learn more
                </Link>
              ) : (
                <span className="text-gray-500 italic">Details unavailable</span>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}