import "./App.css";
import Background from "./components/Background";
import Board from "./components/board/Board";
import LanguageSelection from "./components/language/LanguageSelection";
import Table from "./components/table/Table";
import { BODY_CLASSNAME } from "./utils/constants";
import Header from "./components/header/Header";
import { useContext, useEffect } from "react";
import { TableContext } from "./contexts/tableContext";

function App() {
  const { cardAmount } = useContext(TableContext);

  useEffect(() => {
    const gameStarted = Object.values(cardAmount).reduce(
      (result, value) => result || value > 0,
      false
    );
    if (window.matchMedia("(min-height: 800px)").matches || gameStarted) {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      window.onscroll = function () {
        window.scrollTo(scrollX, scrollY);
      };
    } else {
      window.onscroll = function () {};
    }
  }, [cardAmount]);

  return (
    <main className={BODY_CLASSNAME}>
      <Background />
      <Header />
      <Board />
      <Table />
      <LanguageSelection />
    </main>
  );
}

export default App;
