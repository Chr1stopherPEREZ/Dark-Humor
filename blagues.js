// Importation de la bibliothèque BlaguesAPI
const BlaguesAPI = require("blagues-api");

// Initialisation de l'API avec le token d'authentification
const blagues = new BlaguesAPI(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzM3NTYxMjMxMzM2NjY5MTg2IiwibGltaXQiOjEwMCwia2V5IjoiYkV4NlBTU0ZHVjNRTGZHQ3BYTTZmRnRXTFpyTlhDVDFOZEtPVWxtYVJyQ0pDa2I4dHkiLCJjcmVhdGVkX2F0IjoiMjAyNC0xMC0yMlQxNzo1OToyNyswMDowMCIsImlhdCI6MTcyOTYxOTk2N30.z3qKyAIcGMYKdKbzmGJFNumlbfus2IVb9TB8fE8Ixv0"
);

(async () => {
  try {
    // Récupération d'une blague aléatoire
    const blague = await blagues.random();
    console.log(blague);

    // Récupération d'une blague en filtrant certaines catégories
    const blagueFiltrée = await blagues.random({
      disallow: [blagues.categories.DARK, blagues.categories.LIMIT],
    });
    console.log(blagueFiltrée);
  } catch (err) {
    // Gestion des erreurs
    console.error("Erreur lors de la récupération de la blague :", err);
  }
})();

/* Blagues.js */
