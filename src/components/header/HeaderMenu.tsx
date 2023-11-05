import styles from "./Header.module.css";
import { ICONS_VIEWS, MENU_ITEMS } from "../../utils/constants";
import { useContext } from "react";
import { TableContext } from "../../contexts/tableContext";

const HeaderMenu = () => {
  const { currentView, setCurrentView } = useContext(TableContext);

  return (
    <div className={styles.header_menu}>
      {MENU_ITEMS.map(({ id, icon }) => (
        <button key={id} onClick={() => setCurrentView(ICONS_VIEWS[id])}>
          <span
            className={`material-symbols-rounded ${
              currentView === ICONS_VIEWS[id] ? styles.active : ""
            }`}
          >
            {icon}
          </span>
        </button>
      ))}
    </div>
  );
};

export default HeaderMenu;
