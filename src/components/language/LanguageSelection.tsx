import React, { useContext, useEffect, useState } from "react";
import styles from "./LanguageSelection.module.css";
import spainFlag from "../../images/flags/es.webp";
import ukFlag from "../../images/flags/gb.webp";
import { TableContext } from "../../contexts/tableContext";
import Tutorial from "../tutorial/Tutorial";

const LanguageSelection = () => {
  const [showTutorial, setShowTutorial] = useState(false);
  const { changeLanguage, isFinished } = useContext(TableContext);

  useEffect(() => {
    setShowTutorial(!localStorage.getItem("hasCompletedTutorial"));
  }, []);

  return (
    <>
      {showTutorial && <Tutorial setShowTutorial={setShowTutorial} />}
      <div className={styles.language_selection}>
        <button onClick={() => changeLanguage("es")}>
          <img src={spainFlag} alt="Spain" />
        </button>
        <button onClick={() => changeLanguage("en")}>
          <img src={ukFlag} alt="UK" />
        </button>
        {!isFinished && (
          <button
          className={styles.tutorial_btn}
            onClick={() => setShowTutorial(true)}
          >
            <span className="material-symbols-rounded">help</span>
          </button>
        )}
      </div>
    </>
  );
};

export default LanguageSelection;
