import { ICard, ITranslation } from "./constants";

export type TEndMessages = {
  message: string;
  timer_message: string;
};

export interface ITableContext {
  playableCards: ICard[];
  deck: ICard[];
  score: number;
  round: number;
  board: ICard[];
  refs: any;
  isFinished: boolean;
  endMessages: TEndMessages;
  cardAmount: ICardAmount;
  time: string;
  stopInput: boolean;
  deathDeck: ICard[];
  translation: ITranslation;
  currentView: string;
  // TODO currentSettings interface
  currentSettings: any;
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
  setCurrentView: Function;
  setIsFinished(isFinished: boolean): void;
  // TODO current settings interface
  setCurrentSettings(currentSettings: any): void;
}

export interface ICardAmount {
  q: number;
  w: number;
  e: number;
  r: number;
  t: number;
  f: number;
}