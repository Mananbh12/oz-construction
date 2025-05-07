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
    <div className="min-h-screen bg-gray-50">
      {/* Section Héroïque */}
      <section
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
        }}
      >
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Bienvenue chez Oz
          </h1>
          <p className="text-xl md:text-2xl text-white mb-6 drop-shadow">
            Votre expert en béton et construction en Australie
          </p>
          <a href="/contact" className="btn bg-[#3B82F6] text-white hover:bg-[#1F2A44] transition-all duration-300">
            Contactez-nous
          </a>
        </div>
      </section>

      {/* Derniers Projets */}
      <section className="container py-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1F2A44] text-center mb-10">
          Derniers Projets par Oz
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
                  Pas d'image disponible
                </div>
              )}
              <p className="text-gray-600 mb-4 line-clamp-3">{project.description || 'Aucune description disponible'}</p>
              {project.slug?.current ? (
                <Link
                  href={`/projects/${project.slug.current}`}
                  className="text-[#3B82F6] hover:text-[#1F2A44] font-medium transition-colors"
                >
                  Voir le Projet
                </Link>
              ) : (
                <span className="text-gray-500 italic">Détails indisponibles</span>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}