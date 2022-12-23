import React, { useEffect, useContext, useState, useRef } from "react";
import styles from "./Table.module.css";
import { TableContext } from "../../contexts/tableContext";
import {
  CARD_AMOUNT,
  DEATH_CARD_ZONE,
  KEYS,
  KEYS_ROWS,
} from "../../utils/constants";
import { ICardAmount } from "../../interfaces/tableContext";
import { ICurrentCard } from "../../interfaces/table";
import { IKeysRows } from "../../interfaces/constants";

const Table = () => {
  const {
    deck,
    validateCardRow,
    isFinished,
    finishGame,
    refs,
    cardAmount,
    board,
    restartGame,
    round,
    setRound,
    startTimer,
    killCard,
    deathDeck,
    onClickBoardKey,
    translation,
  } = useContext(TableContext);
  const [currentCard, setCurrentCard] = useState<ICurrentCard>(deck[0]);
  const cardElement = useRef(null as any);
  const playedCardsElement = useRef(null as any);

  const cardTransition = (key: string) => {
    const isDiscarded = key === "f";
    const isInBoard =
      board.filter(({ id }: any) => id === currentCard.id).length > 0;
    if (isDiscarded) {
      if (isInBoard) {
        finishGame(translation.discarded_card_in_board);
        return;
      } else {
        cardElement.current.classList.add(styles.card_move_right);
        killCard(currentCard);
      }
    }

    if (!isDiscarded && validateCardRow(key, currentCard)) {
      cardElement.current.classList.add(styles.card_move_up);

      // Clone main deck card
      const cardClone = cardElement.current.cloneNode();
      cardClone.classList.add("played_card");
      cardClone.classList.remove(styles.card_move_up);

      const index = KEYS_ROWS[key as keyof IKeysRows] - 1;

      // Place the cloned card in corresponding column
      cardClone.style.position = "fixed";
      const { top, bottom, left, right } =
        refs[index].current.getBoundingClientRect();
      cardClone.style.top = `${
        top + (cardAmount[key as keyof ICardAmount] + 2) * 10
      }px`;
      cardClone.style.bottom = `${bottom}px`;
      cardClone.style.left = `${left}px`;
      cardClone.style.right = `${right}px`;
      cardClone.style.transform = "translateY(-10px)";

      // Append cloned card to DOM
      playedCardsElement.current.appendChild(cardClone);
    }
    if (!isDiscarded && !validateCardRow(key, currentCard)) {
      finishGame(translation.invalid_movement);
      return;
    }

    setTimeout(() => {
      if (cardElement.current) {
        cardElement.current.classList.remove(styles.card_move_up);
        cardElement.current.classList.remove(styles.card_move_right);
      }
    }, 100);
  };

  const onKeyPress = ({
    key,
    shiftKey,
  }: {
    key: string;
    shiftKey: boolean;
  }) => {
    if (KEYS.includes(key.toLowerCase())) {
      if (round === 0) startTimer();

      if (shiftKey && key.toLowerCase() === "r") {
        restartGame();
        return;
      }

      if (!isFinished) {
        setRound(round + 1);
        cardTransition(key.toLowerCase());

        if (round < CARD_AMOUNT - 1) {
          setCurrentCard(deck[round + 1]);
        } else finishGame(translation.victory);
      }
    }
  };

  const onResize = () => restartGame();

  useEffect(() => {
    document.addEventListener("keydown", onKeyPress);
    window.addEventListener("resize", onResize);

    return () => {
      document.removeEventListener("keydown", onKeyPress);
      window.removeEventListener("resize", onResize);
    };
  }, [onKeyPress]);

  useEffect(() => {
    if (Object.keys(deck).length > 0) setCurrentCard(deck[0]);
  }, [deck]);

  return (
    <section className={styles.table}>
      {!isFinished && currentCard && (
        <>
          <div className={styles.table__column}>
            <h3 className={styles.table__remaining_cards}>
              {deck.length - round}
            </h3>
          </div>
          <img
            src={currentCard.image}
            alt={currentCard.name}
            className={`${styles.mainDeck__card} deck`}
            ref={cardElement}
          />
          <div className={styles.table__column}>
            <button onClick={() => onClickBoardKey("f")} className="key">
              <h1>F</h1>
            </button>
            {deathDeck.length > 0 && deathDeck[cardAmount.f - 1] ? (
              <img
                src={deathDeck[cardAmount.f - 1].image}
                alt={deathDeck[cardAmount.f - 1].name}
                className={styles.mainDeck__dead_card}
              />
            ) : (
              <img
                src={DEATH_CARD_ZONE.image}
                alt={DEATH_CARD_ZONE.name}
                className={styles.mainDeck__dead_card}
              />
            )}
          </div>

          <div className={styles.played_cards} ref={playedCardsElement} />
        </>
      )}
    </section>
  );
};

export default Table;
