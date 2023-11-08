import "./App.css";
import Background from "./components/Background";
import LanguageSelection from "./components/language/LanguageSelection";
import { BODY_CLASSNAME } from "./utils/constants";
import Header from "./components/header/Header";
import { useContext, useEffect } from "react";
import { TableContext } from "./contexts/tableContext";
import GameView from "./views/GameView";
import SettingsView from "./views/SettingsView";

function App() {
  const { currentView, cardAmount, restartGame } = useContext(TableContext);

  const renderView = (view: string) => {
    switch (view) {
      case "game":
        return <GameView />;
      case "profile":
        return <>Profile</>;
      case "rankings":
        return <>Rankings</>;
      case "settings":
        return <SettingsView />;
      default:
        return <></>;
    }
  };

  useEffect(() => {
    const gameStarted = Object.values(cardAmount).reduce(
      (result, value) => result || value > 0,
      false
    );
    if (
      (window.matchMedia("(min-height: 1000px)").matches &&
        currentView === "game") ||
      gameStarted
    ) {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      window.onscroll = function () {
        window.scrollTo(scrollX, scrollY);
      };
    } else {
      window.onscroll = function () {};
    }
  }, [cardAmount]);

  useEffect(() => {
    restartGame(true);
  }, [currentView]);

  return (
    <main className={BODY_CLASSNAME}>
      <Background />
      <Header />
      {renderView(currentView)}
      <LanguageSelection />
    </main>
  );
}

export default App;
