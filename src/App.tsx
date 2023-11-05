import "./App.css";
import Background from "./components/Background";
import Board from "./components/board/Board";
import LanguageSelection from "./components/language/LanguageSelection";
import Score from "./components/score/Score";
import Config from "./components/config/Config";
import Table from "./components/table/Table";
import { BODY_CLASSNAME } from "./utils/constants";

function App() {
  window.onscroll = function () {
    window.scrollTo(0, 0);
  };

  return (
    <main className={BODY_CLASSNAME}>
      <Background />
      <Score />
      <Board />
      <Table />
      <LanguageSelection />
      <Config />
    </main>
  );
}

export default App;
