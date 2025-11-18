import type { Setting } from "../../../contexts/CurrentEventContext";

export const StepOneSettingItem = ({
  settingName,
  description,
  id,
}: Setting) => {
  return (
    <div className={`step-one-item step-item setting-id-${id}`}>
      <div className="step-heading">{settingName}</div>
      <div className="step-item-content">{description}</div>
    </div>
  );
};
