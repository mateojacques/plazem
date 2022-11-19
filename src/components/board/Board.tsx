import styles from "./Board.module.css";
import { KEYS } from "../../utils/constants";
import { generateBoard } from "../../utils/deck";
import { useEffect, useContext, useRef } from "react";
import { TableContext } from "../../contexts/tableContext";
import EndgameScreen from "../../screens/EndgameScreen";

const Board = () => {
  const { saveBoard, board, isFinished }: any = useContext(TableContext);
  const currentBoard = generateBoard();

  const cardRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useEffect(() => {
    if (!board.length) saveBoard(currentBoard, cardRefs);
  }, [currentBoard]);

  return (
    <section className={styles.board}>
      {!isFinished ? (
        board.map(({ id, name, image }: any, i: number) => (
          <div key={id} className={styles.board__column}>
            <h1 className={styles.board__key}>{KEYS[i]}</h1>
            <img
              src={image}
              alt={name}
              className={styles.board__card}
              ref={cardRefs[i]}
            />
          </div>
        ))
      ) : (
        <EndgameScreen />
      )}
    </section>
  );
};

export default Board;
