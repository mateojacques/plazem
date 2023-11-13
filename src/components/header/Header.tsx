import styles from "./Header.module.css";
import Score from "../../components/score/Score";
import HeaderMenu from "./HeaderMenu";
import { useContext } from "react";
import { TableContext } from "../../contexts/tableContext";
import { LOGOS } from "../../utils/constants";

const Header = () => {
  const { currentSettings, currentView } = useContext(TableContext);

  return (
    <header
      className={`${styles.header} ${
        currentView !== "game" ? styles.hideScore : ""
      }`}
    >
      <img src={LOGOS[currentSettings.theme]} alt="Plazem logo" />
      <Score />
      <HeaderMenu />
    </header>
  );
};

export default Header;
