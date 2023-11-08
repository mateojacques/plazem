import { useContext } from "react";
import Board from "../components/board/Board";
import Table from "../components/table/Table";
import { TableContext } from "../contexts/tableContext";

const GameView = () => {
  const { isFinished } = useContext(TableContext);

  return (
    <section className={`view ${isFinished ? "" : "show_board"}`}>
      <Board />
      <Table />
    </section>
  );
};

export default GameView;
