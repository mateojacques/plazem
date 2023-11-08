import { useContext, useEffect } from "react";
import { TableContext } from "../contexts/tableContext";
import styles from "./Views.module.css";

const SettingsView = () => {
  const { currentSettings, setCurrentSettings, translation } =
    useContext(TableContext);

  const handleSettingsChange = (setting_id: string, value: any) =>
    setCurrentSettings((previousValue: any) => ({
      ...previousValue,
      [setting_id]: value,
    }));

  const SETTINGS = [
    {
      id: "language",
      label: translation.settings_language_label,
      options: [
        {
          label: "english",
          value: "en",
        },
        {
          label: "español",
          value: "es",
        },
      ],
    },
    {
      id: "card_quantity",
      label: translation.settings_card_quantity_label,
      options: [
        {
          label: "10",
          value: 10,
        },
        {
          label: "30",
          value: 30,
        },
        {
          label: "50",
          value: 50,
        },
      ],
    },
    {
      id: "theme",
      label: translation.settings_theme_label,
      options: [
        {
          label: "classic",
          value: "classic",
        },
        {
          label: "neon",
          value: "neon",
        },
        {
          label: "futbol",
          value: "futbol",
        },
        {
          label: "coder",
          value: "coder",
        },
      ],
    },
    /* {
      id: "future_vision",
      label: translation.settings_future_vision_label,
      options: [
        {
          label: "enable",
          value: true,
        },
        {
          label: "disable",
          value: false,
        },
      ],
    }, */
  ];

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(currentSettings));
  }, [currentSettings]);

  return (
    <section className={`${styles.settings_container} view`}>
      {SETTINGS.map(({ id, label, options }) => (
        <div key={id} className={styles.option}>
          <h2>{label}</h2>
          <p className={styles.pipe}>|</p>
          <div className={styles.option_values}>
            {options.map(({ label, value }: any) => (
              <p
                key={label}
                onClick={() => handleSettingsChange(id, value)}
                className={`${
                  currentSettings[id] === value
                    ? styles.active_option_value
                    : ""
                } ${styles.option_value}`}
              >
                {label}
              </p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default SettingsView;
