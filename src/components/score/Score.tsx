import { useContext, useEffect, useState } from "react";
import styles from "./Score.module.css";
import { TableContext } from "../../contexts/tableContext";

const Score = () => {
  const [bestTimes, setBestTimes] = useState<any>({});
  const { time, currentSettings, translation } = useContext(TableContext);
  const rawBestTimes = localStorage.getItem("bestTimes");
  const cardQuantity = currentSettings?.card_quantity;

  useEffect(() => {
    if (rawBestTimes) setBestTimes(JSON.parse(rawBestTimes));
  }, [time]);

  return (
    <div
      key={bestTimes[cardQuantity] || ""}
      className={`score ${styles.score}`}
    >
      {bestTimes[cardQuantity] && (
        <h2 className="best_time">
          {translation.best_time_label}: {bestTimes[cardQuantity]}
        </h2>
      )}
      <h1 className="time">{time}</h1>
    </div>
  );
};

export default Score;
