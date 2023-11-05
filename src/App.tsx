import "./App.css";
import Background from "./components/Background";
import Board from "./components/board/Board";
import LanguageSelection from "./components/language/LanguageSelection";
import Table from "./components/table/Table";
import { BODY_CLASSNAME } from "./utils/constants";
import Header from "./components/header/Header";

function App() {
  window.onscroll = function () {
    window.scrollTo(0, 0);
  };

  return (
    <main className={BODY_CLASSNAME}>
      <Background />
      <Header/>
      <Board />
      <Table />
      <LanguageSelection />
    </main>
  );
}

export default App;
