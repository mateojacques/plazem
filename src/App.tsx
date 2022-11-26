import React, { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/board/Board";
import LanguageSelection from "./components/language/LanguageSelection";
import Score from "./components/score/Score";
import Table from "./components/table/Table";
import Tutorial from "./components/tutorial/Tutorial";

function App() {
  const [showTutorial, setShowTutorial] = useState(false);

  useEffect(() => {
    setShowTutorial(!localStorage.getItem("hasCompletedTutorial"));
  }, []);

  return (
    <main className="app-container">
      {showTutorial && <Tutorial setShowTutorial={setShowTutorial}/>}
      <Score />
      <Board />
      <Table />
      <LanguageSelection />
      <button className="open-tutorial" onClick={() => setShowTutorial(true)}><span className="material-symbols-rounded">help</span></button>
    </main>
  );
}

export default App;
