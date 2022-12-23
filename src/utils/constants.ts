// THEMES
import {
  CLASSIC_FONT,
  CLASSIC_THEME,
  CODER_FONT,
  CODER_THEME,
  FUTBOL_FONT,
  FUTBOL_THEME,
} from "./themes";

// CLASSIC CARDS
import turtleCard from "../images/cards/turtle_card.png";
import butterflyCard from "../images/cards/butterfly_card.png";
import lionCard from "../images/cards/lion_card.png";
import foxCard from "../images/cards/fox_card.png";
import spiderCard from "../images/cards/spider_card.png";
import giraffeCard from "../images/cards/giraffe_card.png";
import parrotCard from "../images/cards/parrot_card.png";
import crocodileCard from "../images/cards/crocodile_card.png";
import flamingoCard from "../images/cards/flamingo_card.png";
import monkeyCard from "../images/cards/monkey_card.png";
import deathCardBoard from "../images/cards/death_card_board.png";
import deathCardZone from "../images/cards/death_card_zone.png";

// CODER CARDS
import perlCard from "../images/cards/coder/perl_card.png";
import cppCard from "../images/cards/coder/c++_card.png";
import javaCard from "../images/cards/coder/java_card.png";
import rubyCard from "../images/cards/coder/ruby_card.png";
import csharpCard from "../images/cards/coder/csharp_card.png";
import javascriptCard from "../images/cards/coder/javascript_card.png";
import goCard from "../images/cards/coder/go_card.png";
import pythonCard from "../images/cards/coder/python_card.png";
import kotlinCard from "../images/cards/coder/kotlin_card.png";
import rustCard from "../images/cards/coder/rust_card.png";

// FUTBOL CARDS
import banfieldCard from "../images/cards/futbol/banfield_card.png";
import bocaCard from "../images/cards/futbol/boca_card.png";
import colonCard from "../images/cards/futbol/colon_card.png";
import dyjCard from "../images/cards/futbol/dyj_card.png";
import independienteCard from "../images/cards/futbol/independiente_card.png";
import lanusCard from "../images/cards/futbol/lanus_card.png";
import racingCard from "../images/cards/futbol/racing_card.png";
import riverCard from "../images/cards/futbol/river_card.png";
import sanlorenzoCard from "../images/cards/futbol/sanlorenzo_card.png";
import velezCard from "../images/cards/futbol/velez_card.png";

// INTERFACES
import {
  ICard,
  IThemeCards,
  IThemeColors,
  IThemeFonts,
  IKeysRows,
  ITranslation,
  ITranslations,
} from "../interfaces/constants";

export const CLASSIC_CARDS: ICard[] = [
  {
    id: 1,
    name: "Turtle",
    image: turtleCard,
  },
  {
    id: 2,
    name: "Butterfly",
    image: butterflyCard,
  },
  {
    id: 3,
    name: "Lion",
    image: lionCard,
  },
  {
    id: 4,
    name: "Fox",
    image: foxCard,
  },
  {
    id: 5,
    name: "Spider",
    image: spiderCard,
  },
  {
    id: 6,
    name: "Giraffe",
    image: giraffeCard,
  },
  {
    id: 7,
    name: "Parrot",
    image: parrotCard,
  },
  {
    id: 8,
    name: "Crocodile",
    image: crocodileCard,
  },
  {
    id: 9,
    name: "Flamingo",
    image: flamingoCard,
  },
  {
    id: 10,
    name: "Monkey",
    image: monkeyCard,
  },
];

export const CODER_CARDS: ICard[] = [
  {
    id: 1,
    name: "Perl",
    image: perlCard,
  },
  {
    id: 2,
    name: "C++",
    image: cppCard,
  },
  {
    id: 3,
    name: "Java",
    image: javaCard,
  },
  {
    id: 4,
    name: "Ruby",
    image: rubyCard,
  },
  {
    id: 5,
    name: "C#",
    image: csharpCard,
  },
  {
    id: 6,
    name: "Javascript",
    image: javascriptCard,
  },
  {
    id: 7,
    name: "Go",
    image: goCard,
  },
  {
    id: 8,
    name: "Python",
    image: pythonCard,
  },
  {
    id: 9,
    name: "Kotlin",
    image: kotlinCard,
  },
  {
    id: 10,
    name: "Rust",
    image: rustCard,
  },
];

export const FUTBOL_CARDS: ICard[] = [
  {
    id: 1,
    name: "Banfield",
    image: banfieldCard,
  },
  {
    id: 2,
    name: "Boca",
    image: bocaCard,
  },
  {
    id: 3,
    name: "Colon",
    image: colonCard,
  },
  {
    id: 4,
    name: "Dyj",
    image: dyjCard,
  },
  {
    id: 5,
    name: "Independiente",
    image: independienteCard,
  },
  {
    id: 6,
    name: "Lanus",
    image: lanusCard,
  },
  {
    id: 7,
    name: "Racing",
    image: racingCard,
  },
  {
    id: 8,
    name: "River",
    image: riverCard,
  },
  {
    id: 9,
    name: "San Lorenzo",
    image: sanlorenzoCard,
  },
  {
    id: 10,
    name: "Velez",
    image: velezCard,
  },
];

export const THEMES_CARDS: IThemeCards = {
  classic: CLASSIC_CARDS,
  coder: CODER_CARDS,
  futbol: FUTBOL_CARDS,
};

export const THEMES_COLORS: IThemeColors = {
  classic: CLASSIC_THEME,
  coder: CODER_THEME,
  futbol: FUTBOL_THEME,
};

export const THEMES_FONTS: IThemeFonts = {
  classic: CLASSIC_FONT,
  coder: CODER_FONT,
  futbol: FUTBOL_FONT,
};

export const DEATH_CARD_BOARD = {
  id: 0,
  name: "DeathBoard",
  image: deathCardBoard,
};

export const DEATH_CARD_ZONE = {
  id: 0,
  name: "DeathZone",
  image: deathCardZone,
};

export const KEYS = ["q", "w", "e", "r", "t", "f"];

export const KEYS_ROWS: IKeysRows = {
  q: 1,
  w: 2,
  e: 3,
  r: 4,
  t: 5,
};

export const CARD_AMOUNT: number = 50;

export const ENGLISH_TRANSLATION: ITranslation = {
  tutorial_step1:
    "Welcome to Plazem! This is a game focused on speed and reflexes.",
  tutorial_step2:
    "This is the board. You will have to place the cards in your deck matching the ones in the columns, pressing the key that corresponds to each one.",
  tutorial_step3:
    "This is your deck. There are 50 cards in it, 5 for each type. You will have to place the cards that are in the board accordingly and discard (F key) the ones that aren't.",
  tutorial_step4:
    "The goal is to place all 50 cards without mistakes in the least amount of time possible.",
  tutorial_skip: "Skip tutorial",
  tutorial_end: "End tutorial",
  tutorial_back: "Back",
  tutorial_next: "Next",
  invalid_movement: "Invalid movement. Try again!",
  discarded_card_in_board:
    "The card you discarded was in the board. Try again!",
  victory: "Congratulations! There are no more cards in your deck.",
  config_theme: "Change theme",
};

export const SPANISH_TRANSLATION: ITranslation = {
  tutorial_step1:
    "Bienvenido a Plazem! Este es un juego enfocado en la velocidad y los reflejos.",
  tutorial_step2:
    "Este es el tablero. Tendrás que colocar las cartas de tu mazo coincidiendo con las de las columnas, presionando la tecla asignada a cada una.",
  tutorial_step3:
    "Este es tu mazo. En él hay 50 cartas, 5 por cada tipo. Deberás colocar las cartas que se encuentren en el tablero y descartar (tecla F) las que no.",
  tutorial_step4:
    "La meta es colocar todas las cartas sin errores en el menor tiempo posible.",
  tutorial_skip: "Saltar tutorial",
  tutorial_end: "Finalizar",
  tutorial_back: "Atrás",
  tutorial_next: "Siguiente",
  invalid_movement: "Movimiento inválido. ¡Intenta de nuevo!",
  discarded_card_in_board:
    "La carta descartada se encontraba en el tablero. ¡Intenta de nuevo!",
  victory: "¡Felicidades! Ya no quedan más cartas en tu mazo.",
  config_theme: "Cambiar tema",
};

export const TRANSLATIONS: ITranslations = {
  en: ENGLISH_TRANSLATION,
  es: SPANISH_TRANSLATION,
};
