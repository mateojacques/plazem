import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Background from "./components/Background";
import Board from "./components/board/Board";
import LanguageSelection from "./components/language/LanguageSelection";
import Score from "./components/score/Score";
import Table from "./components/table/Table";

function App() {
  return (
    <main className="app-container">
      <Background />
      <Score />
      <Board />
      <Table />
      <LanguageSelection />
    </main>
  );
}

export default App;
