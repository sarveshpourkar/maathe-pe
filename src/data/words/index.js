import bollywoodMovies from "./bollywood/movies";

export function getWords(categoryId, deckId) {
  switch (categoryId) {
    case "bollywood":
      return bollywoodMovies;

    default:
      return [];
  }
}