/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['cdn.sanity.io'], // Domaine d'images de Sanity
    },
    reactStrictMode: true, // Active le mode strict React pour les meilleures pratiques de développement
    experimental: {
    },
  };
  
  export default nextConfig;
  