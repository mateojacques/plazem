import React, { useContext } from "react";
import styles from "./LanguageSelection.module.css";
import spainFlag from "../../images/flags/es.webp";
import ukFlag from "../../images/flags/gb.webp";
import { TableContext } from "../../contexts/tableContext";

const LanguageSelection = () => {
  const { changeLanguage } = useContext(TableContext);

  return (
    <div className={styles.language_selection}>
      <button onClick={() => changeLanguage("es")}>
        <img src={spainFlag} alt="Spain" />
      </button>
      <button onClick={() => changeLanguage("en")}>
        <img src={ukFlag} alt="UK" />
      </button>
    </div>
  );
};

export default LanguageSelection;
