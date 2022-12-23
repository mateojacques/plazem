export interface ICard {
  id: number;
  name: string;
  image: string;
}
export interface IThemeCards {
  classic: ICard[];
  coder: ICard[];
  futbol: ICard[];
}
export interface IThemeColors {
  classic: string[];
  coder: string[];
  futbol: string[];
}
export interface IThemeFonts {
  classic: string;
  coder: string;
  futbol: string;
}
export interface IKeysRows {
  q: number;
  w: number;
  e: number;
  r: number;
  t: number;
}
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
  config_theme: string;
}
export interface ITranslations {
  en: ITranslation;
  es: ITranslation;
}
