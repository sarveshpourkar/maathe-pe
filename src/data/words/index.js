import movies80s from "./bollywood/80s";
import movies90s from "./bollywood/90s";
import movies2000s from "./bollywood/2000s";
import moviesAfter2010 from "./bollywood/after2010";
import comedyMovies from "./bollywood/comedy";
import mixedMovies from "./bollywood/mixed";

import cricketMixed from "./cricket/mixed";
import cricketIPL from "./cricket/ipl";
import cricketLegends from "./cricket/legends";
import cricketWorldCup from "./cricket/worldcup";
import cricketCurrent from "./cricket/current";

import foodMixed from "./food/mixed";
import indianFood from "./food/indian";
import streetFood from "./food/street";
import desserts from "./food/desserts";
import fastFood from "./food/fastfood";

import animalsMixed from "./animals/mixed";
import wildAnimals from "./animals/wild";
import birds from "./animals/birds";
import marine from "./animals/marine";

import sportsMixed from "./sports/mixed";
import football from "./sports/football";
import basketball from "./sports/basketball";
import tennis from "./sports/tennis";
import olympics from "./sports/olympics";

import bollywoodSongs from "./music/bollywood";
import englishSongs from "./music/english";
import musicArtists from "./music/artists";
import instruments from "./music/instruments";
import musicMixed from "./music/mixed";

import cartoons from "./television/cartoons";
import anime from "./television/anime";
import sitcoms from "./television/sitcoms";
import indianTv from "./television/indian";
import televisionMixed from "./television/mixed";

import brands from "./corporate/brands";
import companies from "./corporate/companies";
import ceos from "./corporate/ceos";
import products from "./corporate/products";
import corporateMixed from "./corporate/mixed";

export function getWords(categoryId, deckId) {
  if (categoryId === "bollywood") {
    switch (deckId) {
      case "80s":
        return movies80s;

      case "90s":
        return movies90s;

      case "2000s":
        return movies2000s;

      case "after2010":
        return moviesAfter2010;

      case "comedy":
        return comedyMovies;

      case "mixed":
      default:
        return mixedMovies;
    }
  }

  if (categoryId === "cricket") {
    switch (deckId) {
      case "ipl":
        return cricketIPL;

      case "legends":
        return cricketLegends;

      case "worldcup":
        return cricketWorldCup;

      case "current":
        return cricketCurrent;

      case "mixed":
      default:
        return cricketMixed;
    }
  }

  if (categoryId === "food") {
  switch (deckId) {
    case "indian":
      return indianFood;

    case "street":
      return streetFood;

    case "desserts":
      return desserts;

    case "fastfood":
      return fastFood;

    case "mixed":
    default:
      return foodMixed;
  }
}

if (categoryId === "animals") {
  switch (deckId) {
    case "wild":
      return wildAnimals;

    case "birds":
      return birds;

    case "marine":
      return marine;

    case "mixed":
    default:
      return animalsMixed;
  }
}

if (categoryId === "sports") {
  switch (deckId) {
    case "football":
      return football;

    case "basketball":
      return basketball;

    case "tennis":
      return tennis;

    case "olympics":
      return olympics;

    case "mixed":
    default:
      return sportsMixed;
  }
}

if (categoryId === "music") {
  switch (deckId) {
    case "bollywood":
      return bollywoodSongs;

    case "english":
      return englishSongs;

    case "artists":
      return musicArtists;

    case "instruments":
      return instruments;

    case "mixed":
    default:
      return musicMixed;
  }
}

if (categoryId === "television") {
  switch (deckId) {
    case "cartoons":
      return cartoons;

    case "anime":
      return anime;

    case "sitcoms":
      return sitcoms;

    case "indian":
      return indianTv;

    case "mixed":
      return televisionMixed;

    default:
      return televisionMixed;
  }
}

if (categoryId === "corporate") {
  switch (deckId) {
    case "brands":
      return brands;

    case "companies":
      return companies;

    case "ceos":
      return ceos;

    case "products":
      return products;

    case "mixed":
    default:
      return corporateMixed;
  }
}


  return [];
}