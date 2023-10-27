import { ICard, ITranslation } from "./constants";

export interface ITableContext {
  playableCards: ICard[];
  deck: ICard[];
  score: number;
  round: number;
  board: ICard[];
  refs: any;
  isFinished: boolean;
  endMessage: string;
  cardAmount: ICardAmount;
  time: string;
  deathDeck: ICard[];
  translation: ITranslation;
  selectedLanguage: string;
  setDeck: Function;
  setRound: Function;
  saveBoard: Function;
  validateCardRow: Function;
  finishGame: Function;
  restartGame: Function;
  startTimer: Function;
  killCard: Function;
  onClickBoardKey: Function;
  changeLanguage: Function;
  generateMainDeck: Function;
  generateBoard: Function;
  changeTheme: Function;
}

export interface ICardAmount {
  q: number;
  w: number;
  e: number;
  r: number;
  t: number;
  f: number;
}
