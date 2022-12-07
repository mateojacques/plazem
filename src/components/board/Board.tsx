import styles from "./Board.module.css";
import { KEYS, RUG_BACKGROUND } from "../../utils/constants";
import { generateBoard } from "../../utils/deck";
import { useEffect, useContext, useRef } from "react";
import { TableContext } from "../../contexts/tableContext";
import EndgameScreen from "../../screens/EndgameScreen";

const Board = () => {
  const { saveBoard, board, isFinished, onClickBoardKey } =
    useContext(TableContext);
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
    <section
      className={`${styles.board} board ${!isFinished && styles.show_bg}`}
      style={{ background: isFinished ? "none" : `url(${RUG_BACKGROUND})` }}
    >
      {!isFinished ? (
        board.map(({ id, name, image }: any, i: number) => (
          <div key={id} className={styles.board__column}>
            <button onClick={() => onClickBoardKey(KEYS[i])} className="key">
              <h1>{KEYS[i]}</h1>
            </button>
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
