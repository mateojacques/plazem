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

export const PLAYABLE_CARDS = [
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

export interface IKeysRows {
  q: number;
  w: number;
  e: number;
  r: number;
  t: number;
}

export const KEYS_ROWS: IKeysRows = {
  q: 1,
  w: 2,
  e: 3,
  r: 4,
  t: 5,
};

export const CARD_AMOUNT: number = 50;

export interface ITranslation {
  tutorial_step1: string;
  tutorial_step2: string;
  tutorial_step3: string;
  tutorial_step4: string;
  tutorial_skip: string;
  tutorial_end: string;
  tutorial_back: string;
  tutorial_next: string;
  invalid_movement: string;
  discarded_card_in_board: string;
  victory: string;
}

export const ENGLISH_TRANSLATION: ITranslation = {
  tutorial_step1:
    "Welcome to Plazem! This is a game focused on speed and reflexes.",
  tutorial_step2:
    "This is the board. You will have to place the cards in your deck matching the ones in the columns.",
  tutorial_step3:
    "This is your deck. There are 50 cards in it, 5 for each type. You will have to place the cards that are in the board accordingly and discard (F key) the ones that don't.",
  tutorial_step4:
    "The goal is to place all 50 cards without mistakes in the least amount of time possible.",
  tutorial_skip:
    "Skip tutorial",
  tutorial_end:
    "End tutorial",
  tutorial_back:
    "Back",
  tutorial_next:
    "Next",
  invalid_movement: "Invalid movement.",
  discarded_card_in_board: "The card you discarded was in the board.",
  victory: "Congratulations! There are no more cards in your deck.",
};

export const SPANISH_TRANSLATION: ITranslation = {
  tutorial_step1:
    "Bienvenido a Plazem! Este es un juego enfocado en la velocidad y los reflejos.",
  tutorial_step2:
    "Este es el tablero. Tendrás que colocar las cartas de tu mazo coincidiendo con las de las columnas.",
  tutorial_step3:
    "Este es tu mazo. En él hay 50 cartas, 5 por cada tipo. Deberás colocar las cartas que se encuentren en el tablero y descartar (tecla F) las que no.",
  tutorial_step4:
    "La meta es colocar todas las cartas sin errores en el menor tiempo posible.",
  tutorial_skip: "Saltar tutorial",
  tutorial_end: "Finalizar",
  tutorial_back: "Atrás",
  tutorial_next: "Siguiente",
  invalid_movement: "Movimiento inválido.",
  discarded_card_in_board: "La carta descartada se encontraba en el tablero.",
  victory: "Felicidades! Ya no quedan más cartas en tu mazo.",
};

export interface ITranslations {
  en: ITranslation;
  es: ITranslation;
}

export const TRANSLATIONS: ITranslations = {
  en: ENGLISH_TRANSLATION,
  es: SPANISH_TRANSLATION,
};
