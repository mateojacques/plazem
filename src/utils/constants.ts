// THEMES
import {
  CLASSIC_FONT,
  CLASSIC_THEME,
  FUTBOL_FONT,
  FUTBOL_THEME,
  NEON_FONT,
  NEON_THEME,
} from "./themes";

// CLASSIC CARDS
import turtleCard from "../images/cards/classic/turtle_card.png";
import butterflyCard from "../images/cards/classic/butterfly_card.png";
import lionCard from "../images/cards/classic/lion_card.png";
import foxCard from "../images/cards/classic/fox_card.png";
import spiderCard from "../images/cards/classic/spider_card.png";
import giraffeCard from "../images/cards/classic/giraffe_card.png";
import parrotCard from "../images/cards/classic/parrot_card.png";
import crocodileCard from "../images/cards/classic/crocodile_card.png";
import flamingoCard from "../images/cards/classic/flamingo_card.png";
import monkeyCard from "../images/cards/classic/monkey_card.png";
import deathCardBoard from "../images/cards/classic/death_card_board.png";
import deathCardZone from "../images/cards/classic/death_card_zone.png";

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

// NEON CARDS
import neonTurtleCard from "../images/cards/neon/turtle_card.png";
import neonButterflyCard from "../images/cards/neon/butterfly_card.png";
import neonLionCard from "../images/cards/neon/lion_card.png";
import neonFoxCard from "../images/cards/neon/fox_card.png";
import neonSpiderCard from "../images/cards/neon/spider_card.png";
import neonGiraffeCard from "../images/cards/neon/giraffe_card.png";
import neonParrotCard from "../images/cards/neon/parrot_card.png";
import neonCrocodileCard from "../images/cards/neon/crocodile_card.png";
import neonFlamingoCard from "../images/cards/neon/flamingo_card.png";
import neonMonkeyCard from "../images/cards/neon/monkey_card.png";

// LOGOS
import plazem_logo_classic from "../images/brand/plazem_logo_classic.png";
import plazem_logo_neon from "../images/brand/plazem_logo_neon.png";
import plazem_logo_futbol from "../images/brand/plazem_logo_futbol.png";

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

export const BODY_CLASSNAME = "app-container";
export const BODY_SELECTOR = `.${BODY_CLASSNAME}`;

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

export const NEON_CARDS: ICard[] = [
  {
    id: 1,
    name: "Neon Turtle",
    image: neonTurtleCard,
  },
  {
    id: 2,
    name: "Neon Butterfly",
    image: neonButterflyCard,
  },
  {
    id: 3,
    name: "Neon Lion",
    image: neonLionCard,
  },
  {
    id: 4,
    name: "Neon Fox",
    image: neonFoxCard,
  },
  {
    id: 5,
    name: "Neon Spider",
    image: neonSpiderCard,
  },
  {
    id: 6,
    name: "Neon Giraffe",
    image: neonGiraffeCard,
  },
  {
    id: 7,
    name: "Neon Parrot",
    image: neonParrotCard,
  },
  {
    id: 8,
    name: "Neon Crocodile",
    image: neonCrocodileCard,
  },
  {
    id: 9,
    name: "Neon Flamingo",
    image: neonFlamingoCard,
  },
  {
    id: 10,
    name: "Neon Monkey",
    image: neonMonkeyCard,
  },
];

export const THEMES_CARDS: IThemeCards = {
  classic: CLASSIC_CARDS,
  futbol: FUTBOL_CARDS,
  neon: NEON_CARDS,
};

export const THEMES_COLORS: IThemeColors = {
  classic: CLASSIC_THEME,
  futbol: FUTBOL_THEME,
  neon: NEON_THEME,
};

export const THEMES_FONTS: IThemeFonts = {
  classic: CLASSIC_FONT,
  futbol: FUTBOL_FONT,
  neon: NEON_FONT,
};

export const LOGOS: { [key: string]: string } = {
  classic: plazem_logo_classic,
  neon: plazem_logo_neon,
  futbol: plazem_logo_futbol,
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

/* MUST be a multiple of 10 | CARD_AMOUNT % 2 must be 0 */
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
  defeat_timer_message: "Your run lasted...",
  victory_timer_message: "You achieved it in...",
  config_theme: "Change theme",
  settings_language_label: "language",
  settings_card_quantity_label: "card quantity",
  settings_theme_label: "theme",
  settings_future_vision_label: "future vision",
  best_time_label: "best time",
};

export const SPANISH_TRANSLATION: ITranslation = {
  tutorial_step1:
    "Bienvenido a Plazem! Este es un juego enfocado en la velocidad y los reflejos.",
  tutorial_step2:
    "Este es el tablero. Tendrás que colocar las cartas de tu mazo coincidiendo con las de las columnas, presionando la tecla asignada a cada una.",
  tutorial_step3: `Este es tu mazo. Deberás colocar en el tablero las cartas que sean iguales, y descartar las que no se encuentren.`,
  tutorial_step4:
    "La meta es colocar todas las cartas sin errores en el menor tiempo posible.",
  tutorial_skip: "Saltar tutorial",
  tutorial_end: "Finalizar",
  tutorial_back: "Atrás",
  tutorial_next: "Siguiente",
  invalid_movement: "Movimiento inválido. ¡Intenta de nuevo!",
  discarded_card_in_board:
    "La carta descartada se encontraba en el tablero. ¡Intenta de nuevo!",
  victory: "¡Felicidades! Colocaste todas las cartas correctamente.",
  defeat_timer_message: "Tu intento duró...",
  victory_timer_message: "Lo conseguiste en...",
  config_theme: "Cambiar tema",
  settings_language_label: "lenguaje",
  settings_card_quantity_label: "cantidad de cartas",
  settings_theme_label: "tema",
  settings_future_vision_label: "visión futura",
  best_time_label: "mejor tiempo",
};

export const TRANSLATIONS: ITranslations = {
  en: ENGLISH_TRANSLATION,
  es: SPANISH_TRANSLATION,
};

export const STOP_INPUT_DELAY_AFTER_END_GAME = 100;

export const MENU_ITEMS = [
  {
    id: 1,
    icon: "playing_cards",
  },
  /*   {
    id: 2,
    icon: "person",
  },
  {
    id: 3,
    icon: "trophy",
  }, */
  {
    id: 4,
    icon: "settings",
  },
];

export const ICONS_VIEWS: { [key: number]: string } = {
  1: "game",
  2: "profile",
  3: "rankings",
  4: "settings",
};
