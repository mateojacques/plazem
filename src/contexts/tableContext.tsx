import { createContext, useEffect, useState } from "react";
import {
  IKeysRows,
  ITranslations,
  KEYS_ROWS,
  TRANSLATIONS,
} from "../utils/constants";
import { generateBoard, generateMainDeck } from "../utils/deck";
import { Timer } from "timer-node";

interface ITableContext {
  score: number;
  round: number;
  board: any;
  refs: any;
  isFinished: boolean;
  endMessage: string;
  cardAmount: any;
  time: string;
  deathDeck: any[];
  translation: any;
  setRound: Function;
  saveBoard: Function;
  validateCardRow: Function;
  finishGame: Function;
  restartGame: Function;
  startTimer: Function;
  killCard: Function;
  onClickBoardKey: Function;
  changeLanguage: Function;
}

interface ICardAmount {
  q: number;
  w: number;
  e: number;
  r: number;
  t: number;
  f: number;
}

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
  const [score, setScore] = useState<number>(0);
  const [round, setRound] = useState<number>(0);
  const [board, setBoard] = useState<any>([]);
  const [deathDeck, setDeathDeck] = useState<any>([]);
  const [refs, setRefs] = useState<any[]>([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [endMessage, setEndMessage] = useState<string>("");
  const [cardAmount, setCardAmount] = useState<ICardAmount>(defaultCardAmounts);
  const [timer, setTimer] = useState(new Timer());
  const [time, setTime] = useState<string>("0.0");
  const [translation, setTranslation] = useState(TRANSLATIONS.en);

  const saveBoard = (board: Array<object>, cardRefs: any[]) => {
    setBoard(board);
    setRefs(cardRefs);
  };

  const validateCardRow = (keyPressed: any, card: any) => {
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

  const restartGame = (setDeck: Function) => {
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

  const killCard = (card: any) => {
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

  const changeLanguage = (code: keyof ITranslations) =>
    setTranslation(TRANSLATIONS[code]);

  useEffect(() => {
    updateTimer();
    return updateTimer(true);
  }, []);

  return (
    <TableContext.Provider
      value={{
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
        setRound,
        saveBoard,
        validateCardRow,
        finishGame,
        restartGame,
        startTimer,
        killCard,
        onClickBoardKey,
        changeLanguage
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export default TableProvider;
