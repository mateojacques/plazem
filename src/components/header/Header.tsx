import styles from "./Header.module.css";
import Score from "../../components/score/Score";
import logo from "../../images/brand/plazem_logo_classic.png";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Plazem logo"/>
      <Score />
      <HeaderMenu/>
    </header>
  );
};

export default Header;
