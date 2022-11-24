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
