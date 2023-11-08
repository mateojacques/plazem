import { useContext, useEffect, useState } from "react";
import styles from "./LanguageSelection.module.css";
import { TableContext } from "../../contexts/tableContext";
import Tutorial from "../tutorial/Tutorial";
import { LANGUAGES } from "../../utils/configuration";

const LanguageSelection = () => {
  const [showTutorial, setShowTutorial] = useState(false);
  const {
    setCurrentView,
    setIsFinished,
    restartGame,
    currentSettings,
    setCurrentSettings,
  } = useContext(TableContext);

  const selectedLanguage = currentSettings.language;

  const handleStartTutorial = () => {
    restartGame(true);
    setIsFinished(false);
    setCurrentView("game");
    setShowTutorial(true);
  };

  const changeLanguage = (code: string) =>
    setCurrentSettings((previousValue: any) => ({
      ...previousValue,
      language: code,
    }));

  useEffect(() => {
    setShowTutorial(!localStorage.getItem("hasCompletedTutorial"));
    if (!selectedLanguage) changeLanguage(LANGUAGES[0].code);
  }, []);

  return (
    <>
      {showTutorial && <Tutorial setShowTutorial={setShowTutorial} />}
      <div className={styles.language_selection}>
        {LANGUAGES.map(({ name, code, imageSrc }) => (
          <button key={code} onClick={() => changeLanguage(code)}>
            <img
              src={imageSrc}
              alt={name}
              className={
                selectedLanguage === code ? "" : `${styles.muted_filter}`
              }
            />
          </button>
        ))}
        <button className={styles.tutorial_btn} onClick={handleStartTutorial}>
          <span className="material-symbols-rounded">help</span>
        </button>
      </div>
    </>
  );
};

export default LanguageSelection;
