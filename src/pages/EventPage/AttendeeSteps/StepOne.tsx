import { useContext } from "react";
import { CurrentEventContext } from "../../../contexts/CurrentEventContext";
import { StepOneSettingItem } from "./StepOneItem";
import "../EventPage.scss";

export const StepOne = () => {
  const { currentEvent } = useContext(CurrentEventContext);

  return (
    <div className="step-one-wrapper">
      {currentEvent?.baseSettings && currentEvent.baseSettings.length > 0 ? (
        currentEvent.baseSettings.map((setting) => (
          <StepOneSettingItem
            key={setting.id}
            settingName={setting.settingName}
            description={setting.description}
            id={setting.id}
          />
        ))
      ) : (
        <div>No settings available</div>
      )}
    </div>
  );
};
