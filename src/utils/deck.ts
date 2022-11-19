import { PLAYABLE_CARDS } from "./constants";
import shuffle from "array-shuffle";

export const generateBoard = () => shuffle(PLAYABLE_CARDS).slice(1,6);

export const generateMainDeck = () =>
  shuffle(
    PLAYABLE_CARDS
      .concat(PLAYABLE_CARDS)
      .concat(PLAYABLE_CARDS)
      .concat(PLAYABLE_CARDS)
      .concat(PLAYABLE_CARDS)
  );
