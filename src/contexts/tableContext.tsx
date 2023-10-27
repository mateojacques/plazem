import { createContext, useEffect, useState } from "react";
import {
  CARD_AMOUNT,
  KEYS_ROWS,
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
import { ITableContext, ICardAmount } from "../interfaces/tableContext";

export const TableContext = createContext({} as ITableContext);

const defaultCardAmounts = {
  q: 0,
  w: 0,
  e: 0,
  r: 0,
  t: 0,
  f: 0,
};

const TableProvider = ({ children }: any) => {
  const [playableCards, setPlayableCards] = useState<ICard[]>([]);
  const [score, setScore] = useState<number>(0);
  const [round, setRound] = useState<number>(0);
  const [board, setBoard] = useState<ICard[]>([]);
  const [deathDeck, setDeathDeck] = useState<ICard[]>([]);
  const [refs, setRefs] = useState<any[]>([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [endMessage, setEndMessage] = useState<string>("");
  const [cardAmount, setCardAmount] = useState<ICardAmount>(defaultCardAmounts);
  const [timer] = useState(new Timer());
  const [time, setTime] = useState<string>("0.0");
  const selectedLanguage = localStorage.getItem("selectedLanguage") as string;
  const [translation, setTranslation] = useState<ITranslation>(
    TRANSLATIONS[selectedLanguage as keyof ITranslations] || TRANSLATIONS.en
  );

  const defaultTheme = localStorage.getItem("cardTheme") || "classic";

  const generateBoard = () =>
    shuffle(THEMES_CARDS[defaultTheme as keyof IThemeCards]).slice(1, 6);

  const generateMainDeck = () => {
    const accumulatedDeck = Array.from(
      { length: CARD_AMOUNT / 10 },
      () => THEMES_CARDS[defaultTheme as keyof IThemeCards]
    ).flat();
    return shuffle(accumulatedDeck);
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

  const finishGame = (message: string) => {
    setIsFinished(true);
    setEndMessage(message);
    timer.stop();
  };

  const restartGame = () => {
    timer.stop();

    setScore(0);
    setRound(0);
    setBoard(generateBoard());
    setIsFinished(false);
    setCardAmount(defaultCardAmounts);
    setDeck(generateMainDeck());
    setTime("0.0");
    setDeathDeck([]);
    setEndMessage("");

    const playedCards = document.querySelectorAll(".played_card");
    Array.from(playedCards).map((card: any) => card.remove());
  };

  const startTimer = () => {
    timer.start();
  };

  const updateTimer = (clear?: boolean) => {
    let timerInterval;
    if (!clear) {
      timerInterval = setInterval(() => {
        if (timer.isRunning()) setTime(`${timer.time().s}.${timer.time().ms}`);
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
    localStorage.setItem("selectedLanguage", code);
  };

  const changeTheme = (theme: string) => {
    localStorage.setItem("cardTheme", theme);
    window.location.reload();
  };

  useEffect(() => {
    setPlayableCards(THEMES_CARDS[defaultTheme as keyof IThemeCards]);
    changeThemeColors(THEMES_COLORS[defaultTheme as keyof IThemeColors]);
    changeThemeFont(THEMES_FONTS[defaultTheme as keyof IThemeFonts]);

    updateTimer();
    return updateTimer(true);
  }, []);

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
        endMessage,
        cardAmount,
        time,
        deathDeck,
        translation,
        selectedLanguage,
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
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export default TableProvider;
