/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['cdn.sanity.io'], // Domaine d'images de Sanity
    },
    reactStrictMode: true, // Active le mode strict React pour les meilleures pratiques de développement
    experimental: {
      appDir: true, // Utilisation du nouveau système de répertoire d'applications Next.js
    },
  };
  
  export default nextConfig;
  