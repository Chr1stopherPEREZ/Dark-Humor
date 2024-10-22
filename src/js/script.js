// Sélection des éléments HTML pour afficher la blague et le bouton
const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

// Ajout d'un événement au clic sur le bouton pour générer une nouvelle blague
jokeBtn.addEventListener("click", generateJoke);

// Génère une blague au chargement de la page
generateJoke();

// Fonction asynchrone pour récupérer une blague depuis l'API
async function generateJoke() {
  try {
    // Requête à l'API Blagues API avec le token d'authentification
    const res = await fetch("https://www.blagues-api.fr/api/random", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzM3NTYxMjMxMzM2NjY5MTg2IiwibGltaXQiOjEwMCwia2V5IjoiYkV4NlBTU0ZHVjNRTGZHQ3BYTTZmRnRXTFpyTlhDVDFOZEtPVWxtYVJyQ0pDa2I4dHkiLCJjcmVhdGVkX2F0IjoiMjAyNC0xMC0yMlQxNzo1OToyNyswMDowMCIsImlhdCI6MTcyOTYxOTk2N30.z3qKyAIcGMYKdKbzmGJFNumlbfus2IVb9TB8fE8Ixv0`,
      },
    });

    // Vérification de la réponse de l'API
    if (!res.ok) {
      jokeEl.innerHTML = "Erreur lors de la récupération de la blague.";
      return;
    }

    // Extraction des données et affichage de la blague et de la réponse
    const data = await res.json();
    jokeEl.innerHTML = `<strong>Blague :</strong> ${data.joke} <br> <strong>Réponse :</strong> ${data.answer}`;
  } catch (error) {
    // Gestion des erreurs
    jokeEl.innerHTML =
      "Une erreur s'est produite lors de la récupération de la blague.";
  }
}

/* Script.js */
