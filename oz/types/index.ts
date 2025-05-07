// Représente un projet Sanity
export type Project = {
    _id: string; // Identifiant unique généré par Sanity
    title: string; // Titre du projet
    slug: { current: string };
    description: string; // Description du projet
    images?: Array<{
      _key: string;
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    }>; // Tableau d’images (optionnel)
    date: string; // Date au format ISO (ex. "2024-04-20")
  };