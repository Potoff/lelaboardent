// Sélection affiliée de sauces pimentées.
// tag Amazon Partenaires à remplacer dans AFFILIE_TAG (placeholder pour l'instant).
export const AFFILIE_TAG = 'laboardent-21'; // TODO: vrai tag Amazon Partenaires de Paul

// Construit un lien affilié propre (rel géré dans le composant).
export function lienAffilie(asin) {
  return `https://www.amazon.fr/dp/${asin}?tag=${AFFILIE_TAG}`;
}

// asin = placeholder ("XXXXXXX") tant que Paul n'a pas validé les produits exacts.
export const sauces = [
  {
    nom: 'Cholula Original',
    marque: 'Cholula',
    origine: 'Mexique',
    scoville: '1 000',
    note: 'La classique folk, chapeau en bois. Douce et fumée, parfaite pour débuter.',
    profil: 'Douce · Fumée',
    asin: 'B0XXXXXX1',
  },
  {
    nom: 'Sauce piquante artisanale',
    marque: 'Maison Martin',
    origine: 'France',
    scoville: '~15 000',
    note: 'Le fer de lance du piment français. Vieillie en fût, équilibrée, pointue.',
    profil: 'Moyenne · Vieillie',
    asin: 'B0XXXXXX2',
  },
  {
    nom: 'Ktchup Original',
    marque: 'Dame Besson',
    origine: 'Antilles',
    scoville: '~30 000',
    note: 'Créole, fruitée, chaleureuse. Le Scotch Bonnet dans toute sa splendeur.',
    profil: 'Forte · Fruitée',
    asin: 'B0XXXXXX3',
  },
  {
    nom: 'Chipotle en adobo',
    marque: 'La Morena',
    origine: 'Mexique',
    scoville: '~5 000',
    note: 'Le jalapeño fumé, en conserve. Base de mille recettes, umami de braise.',
    profil: 'Moyenne · Fumée',
    asin: 'B0XXXXXX4',
  },
];
