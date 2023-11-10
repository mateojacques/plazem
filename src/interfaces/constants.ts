export interface ICard {
  id: number;
  keyId?: number;
  name: string;
  image: string;
}
export interface IThemeCards {
  classic: ICard[];
  futbol: ICard[];
  neon: ICard[];
}

export type TColor = { var_name: string; code: string };
export interface IThemeColors {
  classic: TColor[];
  futbol: TColor[];
  neon: TColor[];
}
export interface IThemeFonts {
  classic: string;
  futbol: string;
  neon: string;
}
export interface IKeysRows {
  q: number;
  w: number;
  e: number;
  r: number;
  t: number;
}
export interface ITranslation {
  [key: string]: string;
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
  defeat_timer_message: string;
  victory_timer_message: string;
  config_theme: string;
  settings_language_label: string;
  settings_card_quantity_label: string;
  settings_theme_label: string;
  settings_future_vision_label: string;
}
export interface ITranslations {
  [key: string]: ITranslation;
  en: ITranslation;
  es: ITranslation;
}
