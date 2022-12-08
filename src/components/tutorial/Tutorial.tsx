import React, { useContext, useEffect } from "react";
import JoyRide from "react-joyride";
import { TableContext } from "../../contexts/tableContext";

const Tutorial = ({ setShowTutorial }: any) => {
  const { translation } = useContext(TableContext);

  const TOUR_STEPS = [
    {
      target: ".tutorial_modal",
      content: translation.tutorial_step1,
      disableBeacon: true,
    },
    {
      target: ".board",
      content: translation.tutorial_step2,
      disableBeacon: true,
    },
    {
      target: ".deck",
      content: translation.tutorial_step3,
      disableBeacon: true,
    },
    {
      target: ".time",
      content: translation.tutorial_step4,
      disableBeacon: true,
    },
  ];

  useEffect(() => {
    localStorage.setItem("hasCompletedTutorial", "true");
  }, []);

  return (
    <>
      <JoyRide
        callback={({ action }) => {
          if (action === "reset") setShowTutorial(false);
        }}
        steps={TOUR_STEPS}
        continuous={true}
        showSkipButton={true}
        locale={{
          last: translation.tutorial_end,
          skip: translation.tutorial_skip,
          back: translation.tutorial_back,
          next: translation.tutorial_next,
        }}
        disableScrolling
        styles={{
          buttonNext: {
            backgroundColor: "var(--primary-color)",
          },
          buttonBack: {
            color: "var(--primary-color)",
          },
        }}
      />
      <div className="tutorial_modal" />
    </>
  );
};

export default Tutorial;
