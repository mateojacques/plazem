import React, { useContext } from "react";
import { TableContext } from "../contexts/tableContext";
import styles from "./EndgameScreen.module.css";

const EndgameScreen = () => {
  const { endMessage, onClickBoardKey } = useContext(TableContext);

  return (
    <section className={styles.endgame_screen}>
      <p>{endMessage}</p>
      <div className={styles.endgame_screen__key}>
        <button onClick={() => onClickBoardKey("r", true)} className="key restart-key">
          <span className="material-symbols-rounded">replay</span>
        </button>
        <p className="restart-legend">Shift + R</p>
      </div>
    </section>
  );
};

export default EndgameScreen;
