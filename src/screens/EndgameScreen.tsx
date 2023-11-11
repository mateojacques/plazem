import React, { useContext, useEffect, useState } from "react";
import { TableContext } from "../contexts/tableContext";
import styles from "./EndgameScreen.module.css";
import { desparsearTiempo, menorTiempo } from "../utils/time";

const EndgameScreen = () => {
  const [bestTimes, setBestTimes] = useState<any>(null);
  const [isBestTime, setIsBestTime] = useState<boolean>(false);
  const { time, endMessages, onClickBoardKey, currentSettings, translation } =
    useContext(TableContext);
  const rawBestTimes = localStorage.getItem("bestTimes");
  const cardQuantity = currentSettings.card_quantity;

  useEffect(() => {
    if (rawBestTimes) {
      const parsedBestTimes = JSON.parse(rawBestTimes);
      setBestTimes(parsedBestTimes);
    }
  }, []);

  useEffect(() => {
    if (bestTimes) {
      if (
        endMessages.victory &&
        desparsearTiempo(menorTiempo([bestTimes[cardQuantity], time])) === time
      )
        setIsBestTime(true);
      else setIsBestTime(false);
    }
  }, [bestTimes]);

  return (
    <section className={styles.endgame_screen}>
      <p className={styles.message}>{endMessages?.message}</p>
      <div>
        <p className={styles.timer_message}>{endMessages?.timer_message}</p>
        <p className={styles.time}>{time}</p>
        {(!bestTimes || isBestTime) && (
          <p className={styles.new_record_legend}>
            {translation.new_record_legend}
          </p>
        )}
      </div>
      <div className={styles.endgame_screen__key}>
        <button
          onClick={() => onClickBoardKey("r", true)}
          className="key restart-key"
        >
          <span className="material-symbols-rounded">replay</span>
        </button>
        <p className="restart-legend">Shift + R</p>
      </div>
    </section>
  );
};

export default EndgameScreen;
