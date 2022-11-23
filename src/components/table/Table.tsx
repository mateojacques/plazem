/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState, useRef } from "react";
import styles from "./Table.module.css";
import { TableContext } from "../../contexts/tableContext";
import { generateMainDeck } from "../../utils/deck";
import {
  CARD_AMOUNT,
  DEATH_CARD_ZONE,
  IKeysRows,
  KEYS,
  KEYS_ROWS,
  SIDE_CARD,
} from "../../utils/constants";

interface ICurrentCard {
  id: number;
  name: string;
  image: string;
}

const Table = () => {
  const [deck, setDeck] = useState(generateMainDeck());
  const [currentCard, setCurrentCard] = useState<ICurrentCard>(deck[0]);
  const [sideDeckLength, setSideDeckLength] = useState<number>(0);
  const {
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
    sideDeck,
    sideCard,
    updateSideDeck,
    onClickBoardKey,
  } = useContext(TableContext);
  const cardElement = useRef(null as any);
  const playedCardsElement = useRef(null as any);

  const cardTransition = (key: string) => {
    const isDiscarded = key === "f";
    const isSided = key === "s";
    const isInBoard =
      board.filter(({ id }: any) => id === currentCard.id).length > 0;
    if (isDiscarded) {
      if (isInBoard) {
        finishGame(
          "La carta descartada se encontraba en el tablero. Presiona Shift + R para reiniciar."
        );
        return;
      } else {
        cardElement.current.classList.add(styles.card_move_right);
        killCard(currentCard);
      }
    }

    if (isSided) {
      if (round < CARD_AMOUNT - 1) {
        cardElement.current.classList.add(styles.card_move_left);
        sideCard(currentCard);
        setSideDeckLength(sideDeckLength + 1);
        setTimeout(() => {
          if (cardElement.current) {
            cardElement.current.classList.remove(styles.card_move_left);
          }
        }, 100);
      }
      return;
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
      cardClone.style.top = `${top + (cardAmount[key] + 2) * 10}px`;
      cardClone.style.bottom = `${bottom}px`;
      cardClone.style.left = `${left}px`;
      cardClone.style.right = `${right}px`;
      cardClone.style.transform = "translateY(-10px)";

      // Append cloned card to DOM
      playedCardsElement.current.appendChild(cardClone);
    }
    if (!isDiscarded && !validateCardRow(key, currentCard)) {
      finishGame("Movimiento inválido. Presiona Shift + R para reiniciar.");
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
        restartGame(setDeck);
        return;
      }

      if (!isFinished) {
        setRound(round + 1);
        cardTransition(key.toLowerCase());

        if (round < CARD_AMOUNT - 1) {
          setCurrentCard(deck[round + 1]);
        } else if (round < CARD_AMOUNT - 1 + sideDeckLength) {
          setCurrentCard(sideDeck.reverse()[round - (CARD_AMOUNT - 1)]);
          const updatedSideDeck = sideDeck.slice(0, sideDeck.length - 1);
          updateSideDeck(updatedSideDeck);
        } else finishGame("Felicidades! No quedan más cartas.");
      }
    }
  };

  const onResize = () => restartGame(setDeck);

  useEffect(() => {
    document.addEventListener("keydown", onKeyPress);
    window.addEventListener("resize", onResize);

    return () => {
      document.removeEventListener("keydown", onKeyPress);
      window.removeEventListener("resize", onResize);
    };
  }, [onKeyPress]);

  useEffect(() => {
    setCurrentCard(deck[0]);
  }, [deck]);

  return (
    <section className={styles.table}>
      {!isFinished && currentCard && (
        <>
          <div className={styles.table__column}>
            <button
              onClick={() => onClickBoardKey("s")}
              className={styles.table__key}
            >
              <h1>S</h1>
            </button>
            {sideDeck.length > 0 && sideDeck[cardAmount.s - 1] ? (
              <img
                src={sideDeck[cardAmount.s - 1].image}
                alt={sideDeck[cardAmount.s - 1].name}
                className={styles.mainDeck__side_card}
              />
            ) : (
              <img
                src={SIDE_CARD.image}
                alt={SIDE_CARD.name}
                className={styles.mainDeck__side_card}
              />
            )}
          </div>
          <img
            src={currentCard.image}
            alt={currentCard.name}
            className={styles.mainDeck__card}
            ref={cardElement}
          />
          <div className={styles.table__column}>
            <button
              onClick={() => onClickBoardKey("f")}
              className={styles.table__key}
            >
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

          <div className={styles.played_cards} ref={playedCardsElement}></div>
        </>
      )}
    </section>
  );
};

export default Table;
