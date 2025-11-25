import { AccordionStepItem } from "./AccordionStepItem";
import {
  type SectionData,
  type StepItem,
} from "../../contexts/CurrentEventContext";
import "./AccordionSection.scss";

type AccordionSectionProps = {
  sectionData: SectionData;
};

export const AccordionSection = ({ sectionData }: AccordionSectionProps) => {
  const {
    title,
    stepItems,
    stepSectionDisplaySettings,
    setItemStyleSettings,
    order,
  } = sectionData;
  const { outlineSection } = stepSectionDisplaySettings;
  const { outlined } = setItemStyleSettings;

  return (
    <section className={`accordion-section`}>
      <div className="section-title" data-test-id={`section-title-${order}`}>
        <span className="step-number">Step {order}:</span>{" "}
        {title || "Section Title"}
      </div>
      <div
        className={`accordion-steps ${outlineSection ? "step-outlined" : ""}`}
      >
        {stepItems.map((item: StepItem) => (
          <AccordionStepItem key={item.id} item={item} outlined={outlined} />
        ))}
        {title === "Build registration workflows." && (
          <AccordionStepItem
            item={{
              id: -1,
              itemName: "",
              description: "Add Registration Workflow",
              icon: "plus-circle.svg",
            }}
            className="add-workflow-item"
            outlined={outlined}
          />
        )}
      </div>
    </section>
  );
};
