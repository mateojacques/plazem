import React, { useEffect, useContext, useState, useRef } from "react";
import styles from "./Table.module.css";
import { TableContext } from "../../contexts/tableContext";
import { DEATH_CARD_ZONE, KEYS, KEYS_ROWS } from "../../utils/constants";
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
    stopInput,
    currentSettings,
  } = useContext(TableContext);
  const [currentCard, setCurrentCard] = useState<ICurrentCard>(deck[0]);
  const cardElement = useRef(null as any);
  const playedCardsElement = useRef(null as any);
  const deadCard = deathDeck[cardAmount.f - 1] || {};
  const {
    keyId: deadCardKeyId,
    name: deadCardName,
    image: deadCardImage,
  } = deadCard;

  const cardTransition = (key: string) => {
    const isDiscarded = key === "f";
    const isInBoard =
      board.filter(({ id }: any) => id === currentCard.id).length > 0;
    if (isDiscarded) {
      if (isInBoard) {
        finishGame({
          reason: "discarded_card_in_board",
          victory: false,
          message: translation.discarded_card_in_board,
          timer_message: translation.defeat_timer_message,
        });
        return false;
      } else {
        cardElement.current.classList.add(styles.card_move_right);
        killCard(currentCard);
      }
    }

    if (!isDiscarded && validateCardRow(key, currentCard)) {
      cardElement.current.classList.add(styles.card_move_down);

      // Clone main deck card
      const cardClone = cardElement.current.cloneNode();
      cardClone.classList.add("card");
      cardClone.classList.add(styles.played_card);
      cardClone.classList.remove(styles.card_move_down);
      cardClone.classList.remove("deck");

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
      cardClone.onclick = () => onClickBoardKey(KEYS[index]);

      // Append cloned card to DOM
      playedCardsElement.current.appendChild(cardClone);
    }
    if (!isDiscarded && !validateCardRow(key, currentCard)) {
      finishGame({
        reason: "invalid_movement",
        victory: false,
        message: translation.invalid_movement,
        timer_message: translation.defeat_timer_message,
      });
      return false;
    }

    setTimeout(() => {
      if (cardElement.current) {
        cardElement.current.classList.remove(styles.card_move_down);
        cardElement.current.classList.remove(styles.card_move_right);
      }
    }, 100);

    return true;
  };

  const onKeyPress = ({
    key,
    shiftKey,
  }: {
    key: string;
    shiftKey: boolean;
  }) => {
    if (stopInput) return;
    if (KEYS.includes(key.toLowerCase())) {
      if (round === 0) startTimer();

      if (shiftKey && key.toLowerCase() === "r") {
        restartGame(true);
        return;
      }

      if (!isFinished) {
        setRound(round + 1);
        const victory = cardTransition(key.toLowerCase());

        if (round < currentSettings.card_quantity - 1) {
          setCurrentCard(deck[round + 1]);
        } else if (victory)
          finishGame({
            reason: "victory",
            victory: true,
            message: translation.victory,
            timer_message: translation.victory_timer_message,
          });
      }
    }
  };

  const onResize = () => restartGame(false, true);

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
    <div className={styles.table}>
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
            className={`card ${styles.mainDeck__card} deck`}
            ref={cardElement}
          />
          <div className={styles.table__column}>
            <button onClick={() => onClickBoardKey("f")} className="key">
              <h1>F</h1>
            </button>
            <img
              key={deadCardKeyId || DEATH_CARD_ZONE.name}
              src={deadCardImage || DEATH_CARD_ZONE.image}
              alt={deadCardName || DEATH_CARD_ZONE.name}
              className={`card ${styles.mainDeck__dead_card}`}
              onClick={() => onClickBoardKey("f")}
            />
          </div>

          <div className={styles.played_cards} ref={playedCardsElement} />
        </>
      )}
    </div>
  );
};

export default Table;
