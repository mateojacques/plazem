import styles from "./Board.module.css";
import { KEYS } from "../../utils/constants";
import { useEffect, useContext, useRef } from "react";
import { TableContext } from "../../contexts/tableContext";
import EndgameScreen from "../../screens/EndgameScreen";
import { createRug } from "../../utils/helpers";

const Board = () => {
  const { saveBoard, board, isFinished, onClickBoardKey, generateBoard } =
    useContext(TableContext);
  const currentBoard = generateBoard();

  const cardRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const RUG_BACKGROUND = createRug();

  useEffect(() => {
    if (!board.length) saveBoard(currentBoard, cardRefs);
  }, [currentBoard]);

  return (
    <div
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
              className={`card ${styles.board__card}`}
              ref={cardRefs[i]}
              onClick={() => onClickBoardKey(KEYS[i])}
            />
          </div>
        ))
      ) : (
        <EndgameScreen />
      )}
    </div>
  );
};

export default Board;
