import { createContext, useEffect, useState } from "react";
import {
  BODY_SELECTOR,
  CARD_AMOUNT,
  KEYS_ROWS,
  STOP_INPUT_DELAY_AFTER_END_GAME,
  THEMES_CARDS,
  THEMES_COLORS,
  THEMES_FONTS,
  TRANSLATIONS,
} from "../utils/constants";
import {
  ICard,
  IKeysRows,
  IThemeCards,
  IThemeColors,
  IThemeFonts,
  ITranslation,
  ITranslations,
} from "../interfaces/constants";
import { Timer } from "timer-node";
import shuffle from "array-shuffle";
import { changeThemeColors, changeThemeFont } from "../utils/helpers";
import {
  ITableContext,
  ICardAmount,
  TEndMessages,
  ICurrentSettings,
} from "../interfaces/tableContext";
import styles from "../components/table/Table.module.css";
import scoreStyles from "../components/score/Score.module.css";
import { desparsearTiempo, menorTiempo } from "../utils/time";

export const TableContext = createContext({} as ITableContext);

const defaultCardAmounts = {
  q: 0,
  w: 0,
  e: 0,
  r: 0,
  t: 0,
  f: 0,
};

const TIME_INITIAL_STATE = "0.0s";

const DEFAULT_SETTINGS = {
  language: "en",
  card_quantity: 50,
  theme: "classic",
  // future_vision: false,
};

const TableProvider = ({ children }: any) => {
  const settingsFromStorage = localStorage.getItem("settings") as string;
  const [currentSettings, setCurrentSettings] = useState<any>(
    JSON.parse(settingsFromStorage) || DEFAULT_SETTINGS
  );
  const [playableCards, setPlayableCards] = useState<ICard[]>([]);
  const [score, setScore] = useState<number>(0);
  const [round, setRound] = useState<number>(0);
  const [board, setBoard] = useState<ICard[]>([]);
  const [deathDeck, setDeathDeck] = useState<ICard[]>([]);
  const [refs, setRefs] = useState<any[]>([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [endMessages, setEndMessages] = useState<TEndMessages>({
    reason: "",
    victory: false,
    message: "",
    timer_message: "",
  });
  const [cardAmount, setCardAmount] = useState<ICardAmount>(defaultCardAmounts);
  const [timer] = useState(new Timer());
  const [time, setTime] = useState<string>(TIME_INITIAL_STATE);
  const [stopInput, setStopInput] = useState(false);
  const [translation, setTranslation] = useState<ITranslation>(
    TRANSLATIONS[currentSettings.language as keyof ITranslations] ||
      TRANSLATIONS.en
  );
  const [currentView, setCurrentView] = useState<string>("game");

  const defaultTheme = currentSettings?.theme || "classic";

  const generateBoard = () =>
    shuffle(THEMES_CARDS[defaultTheme as keyof IThemeCards]).slice(1, 6);

  const generateMainDeck = () => {
    const accumulatedDeck = Array.from(
      {
        length: (currentSettings?.card_quantity || CARD_AMOUNT) / 10,
      },
      () => THEMES_CARDS[defaultTheme as keyof IThemeCards]
    ).flat();
    return shuffle(
      accumulatedDeck.map((card) => ({
        ...card,
        keyId: Math.ceil(Math.random() * 1000),
      }))
    );
  };
  const [deck, setDeck] = useState(generateMainDeck());

  const saveBoard = (board: ICard[], cardRefs: any[]) => {
    setBoard(board);
    setRefs(cardRefs);
  };

  const validateCardRow = (keyPressed: string, card: ICard) => {
    const index = KEYS_ROWS[keyPressed as keyof IKeysRows] - 1;
    if (board[index].id === card.id) {
      setScore(score + 1);
      setCardAmount({
        ...cardAmount,
        [keyPressed]: cardAmount[keyPressed as keyof ICardAmount] + 1,
      });
    }
    return board[index].id === card.id;
  };

  const saveBestTime = (body: any) =>
    localStorage.setItem("bestTimes", JSON.stringify(body));

  const finishGame = ({
    reason,
    victory,
    message,
    timer_message,
  }: TEndMessages) => {
    setIsFinished(true);
    setEndMessages({ reason, victory, message, timer_message });
    timer.stop();

    if (victory) {
      const cardQuantity = currentSettings.card_quantity;
      const bestTimes = localStorage.getItem("bestTimes");
      if (bestTimes) {
        const parsedBestTimes = JSON.parse(bestTimes);
        if (parsedBestTimes[cardQuantity]) {
          if (
            desparsearTiempo(
              menorTiempo([parsedBestTimes[cardQuantity], time])
            ) === time
          )
            saveBestTime({ ...parsedBestTimes, [cardQuantity]: time });
          return;
        } else {
          saveBestTime({ ...parsedBestTimes, [cardQuantity]: time });
        }
      } else saveBestTime({ [cardQuantity]: time });
    }
  };

  const restartGame = (forceRestart?: boolean, ignore?: boolean) => {
    if (ignore) return;
    const playedCards = document.querySelectorAll(`.${styles.played_card}`);
    const playedCardsArray = Array.from(playedCards);
    if (playedCardsArray.length > 0 || forceRestart) {
      playedCardsArray.map((card: any) => card.remove());
      timer.stop();
      setScore(0);
      setRound(0);
      setBoard([]);
      setIsFinished(false);
      setCardAmount(defaultCardAmounts);
      setDeck(generateMainDeck());
      setTime(TIME_INITIAL_STATE);
      setDeathDeck([]);
      setEndMessages({
        reason: "",
        victory: false,
        message: "",
        timer_message: "",
      });
      setStopInput(true);
      setTimeout(() => setStopInput(false), STOP_INPUT_DELAY_AFTER_END_GAME);
    }
  };

  const startTimer = () => {
    timer.start();
  };

  const updateTimer = (clear?: boolean) => {
    let timerInterval;
    if (!clear) {
      timerInterval = setInterval(() => {
        const timeString = `${timer.time().h ? `${timer.time().h}h ` : ""}${
          timer.time().m ? `${timer.time().m}m ` : ""
        }${timer.time().s}.${timer.time().ms}s`;
        if (timer.isRunning()) setTime(timeString);
      }, 10) as any;
    } else clearInterval(timerInterval);
  };

  const killCard = (card: ICard) => {
    setDeathDeck([...deathDeck, card]);
    setCardAmount({
      ...cardAmount,
      f: cardAmount["f"] + 1,
    });
  };

  const onClickBoardKey = (key: string, shift = false) =>
    document.dispatchEvent(
      new KeyboardEvent("keydown", {
        key,
        shiftKey: shift,
      })
    );

  const changeLanguage = (code: keyof ITranslations) => {
    setTranslation(TRANSLATIONS[code]);
    localStorage.setItem(
      "settings",
      JSON.stringify({ ...currentSettings, language: code })
    );
  };

  const changeTheme = (theme: string) => {
    localStorage.setItem(
      "settings",
      JSON.stringify({ ...currentSettings, theme })
    );
    setPlayableCards(THEMES_CARDS[theme as keyof IThemeCards]);
    changeThemeFont(THEMES_FONTS[theme as keyof IThemeFonts]);
    changeThemeColors(THEMES_COLORS[theme as keyof IThemeColors]);
  };

  const handleSettings = (currentSettings: ICurrentSettings) => {
    const { language, theme } = currentSettings;
    const { reason: endGameReason, victory: endGameVictory } = endMessages;

    changeLanguage(language);
    setEndMessages({
      ...endMessages,
      message: TRANSLATIONS[language][endGameReason],
      timer_message:
        TRANSLATIONS[language][
          endGameVictory ? "victory_timer_message " : "defeat_timer_message"
        ],
    });

    changeTheme(theme);
  };

  useEffect(() => {
    updateTimer();
    return updateTimer(true);
  }, []);

  useEffect(() => {
    const body = document.querySelector(BODY_SELECTOR);

    if (body) {
      if (isFinished) body.classList.add(scoreStyles.endGame);
      else body.classList.remove(scoreStyles.endGame);
    }
  }, [isFinished]);

  useEffect(() => {
    if (!settingsFromStorage)
      localStorage.setItem("settings", JSON.stringify(currentSettings));
    if (currentSettings) handleSettings(currentSettings);
  }, [currentSettings]);

  return (
    <TableContext.Provider
      value={{
        playableCards,
        deck,
        score,
        round,
        board,
        refs,
        isFinished,
        endMessages,
        cardAmount,
        time,
        stopInput,
        deathDeck,
        translation,
        currentView,
        currentSettings,
        setDeck,
        setRound,
        saveBoard,
        validateCardRow,
        finishGame,
        restartGame,
        startTimer,
        killCard,
        onClickBoardKey,
        changeLanguage,
        generateMainDeck,
        generateBoard,
        changeTheme,
        setCurrentView,
        setIsFinished,
        setCurrentSettings,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export default TableProvider;
