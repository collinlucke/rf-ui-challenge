import { type StepItem } from "../../contexts/CurrentEventContext";
import "./AccordionStepItem.scss";

export const AccordionStepItem = ({
  item,
  outlined,
  className,
}: {
  item: StepItem;
  outlined: boolean;
  className?: string;
}) => {
  console.log(className);
  return (
    <div
      className={`step-item  ${outlined ? "item-outlined" : ""} ${
        className || ""
      }`}
    >
      <div className="step-item-header">
        {item.icon ? <img src={item.icon} alt="" /> : ""}
        <span className="step-item-name">{item?.itemName}</span>
      </div>
      <span className="step-item-description">{item?.description}</span>
    </div>
  );
};
