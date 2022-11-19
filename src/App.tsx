import React from "react";
import "./App.css";
import Board from "./components/board/Board";
import Score from "./components/score/Score";
import Table from "./components/table/Table";

function App() {
  return (
    <main className="app-container">
      <Score />
      <Board />
      <Table />
    </main>
  );
}

export default App;
