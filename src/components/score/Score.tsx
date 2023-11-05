import { useContext } from "react";
import styles from "./Score.module.css";
import { TableContext } from "../../contexts/tableContext";

const Score = () => {
  const { time } = useContext(TableContext);
  return (
    <div className={`score ${styles.score}`}>
      <h1 className="time">{time}</h1>
    </div>
  );
};

export default Score;
