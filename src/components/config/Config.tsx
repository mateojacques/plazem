import React, { useContext, useEffect, useState } from "react";
import { TableContext } from "../../contexts/tableContext";
import styles from "./Config.module.css";
import classicThemeIcon from "../../images/themes/classic_theme_icon.png";
import coderThemeIcon from "../../images/themes/coder_theme_icon.png";
import futbolThemeIcon from "../../images/themes/futbol_theme_icon.png";

const Config = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedTheme, setSelectedTheme] = useState<string>("");
  const { translation, changeTheme } = useContext(TableContext);
  const defaultTheme = localStorage.getItem("cardTheme");

  const THEME_ICONS = [
    {
      id: "classic",
      themeName: "Classic",
      image: classicThemeIcon,
      onClick: () => setSelectedTheme("classic"),
    },
    {
      id: "coder",
      themeName: "Coder",
      image: coderThemeIcon,
      onClick: () => setSelectedTheme("coder"),
    },
    {
      id: "futbol",
      themeName: "Fútbol",
      image: futbolThemeIcon,
      onClick: () => setSelectedTheme("futbol"),
    },
  ];

  useEffect(() => {
    if (selectedTheme) changeTheme(selectedTheme);
  }, [selectedTheme]);

  return (
    <>
      <button className={styles.config__open_btn} onClick={() => setOpen(true)}>
        <span className="material-symbols-rounded">settings</span>
      </button>
      {open && (
        <>
          <div className={styles.config__modal} onClick={() => setOpen(false)}>
            {" "}
          </div>
          <div className={styles.config}>
            <h1>{translation.config_theme}</h1>
            <div className={styles.config__theme_icons}>
              {THEME_ICONS.map(({ id, themeName, image, onClick }) => (
                <div key={themeName}>
                  <button
                    className={`${styles.config__theme_icon} ${
                      selectedTheme === id || defaultTheme === id
                        ? styles.icon_selected
                        : ""
                    }`}
                    onClick={onClick}
                    style={{ background: `url(${image})` }}
                  />
                  <h3>{themeName}</h3>
                </div>
              ))}
            </div>
            <div
              className={styles.config__close_btn}
              onClick={() => setOpen(false)}
            >
              <span className="material-symbols-rounded">close</span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Config;
