import React, { useContext, useEffect, useState } from "react";
import styles from "./LanguageSelection.module.css";
import { TableContext } from "../../contexts/tableContext";
import Tutorial from "../tutorial/Tutorial";
import { LANGUAGES } from "../../utils/configuration";

const LanguageSelection = () => {
  const [showTutorial, setShowTutorial] = useState(false);
  const { selectedLanguage, changeLanguage, isFinished } =
    useContext(TableContext);

  useEffect(() => {
    setShowTutorial(!localStorage.getItem("hasCompletedTutorial"));
    if (!selectedLanguage) changeLanguage(LANGUAGES[0].code);
  }, []);

  return (
    <>
      {showTutorial && <Tutorial setShowTutorial={setShowTutorial} />}
      <div className={styles.language_selection}>
        {LANGUAGES.map(({ name, code, imageSrc }) => (
          <button onClick={() => changeLanguage(code)}>
            <img
              src={imageSrc}
              alt={name}
              className={
                selectedLanguage === code ? "" : `${styles.muted_filter}`
              }
            />
          </button>
        ))}
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
