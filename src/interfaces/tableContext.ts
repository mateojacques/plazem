import { ICard, ITranslation } from "./constants";

export type TEndMessages = {
  [key: string]: string|boolean;
  reason: string;
  victory: boolean;
  message: string;
  timer_message: string;
};

export interface ICurrentSettings {
  [key: string]: any;
  language: string;
  card_quantity: number;
  theme: string;
}

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
  currentSettings: ICurrentSettings;
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
  setCurrentSettings(currentSettings: ICurrentSettings): void;
}

export interface ICardAmount {
  q: number;
  w: number;
  e: number;
  r: number;
  t: number;
  f: number;
}