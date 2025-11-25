import { useRef, useState, useLayoutEffect, useContext } from "react";
import {
  CurrentEventContext,
  type SectionData,
} from "../../contexts/CurrentEventContext";
import { AccordionSection } from "./AccordionSection";
import { SectionAccordionHeader } from "./SectionAccordionHeader";
import "./SectionAccordion.scss";

type SectionAccordionProps = {
  isOpen: boolean;
  sections: SectionData[];
  icon?: string;
  title?: string;
  setIsOpen: () => void;
};

export const SectionAccordion = ({
  sections,
  isOpen,
  ...rest
}: SectionAccordionProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { currentEvent } = useContext(CurrentEventContext);
  const { settingsAndWorkflowSteps: sectionSteps } = currentEvent;
  const [height, setHeight] = useState<string>("0px");

  useLayoutEffect(() => {
    if (contentRef.current) {
      const measured = contentRef.current.scrollHeight;
      requestAnimationFrame(() => {
        setHeight(isOpen ? `${measured}px` : "0px");
      });
    }
  }, [isOpen, sections]);

  return (
    <div className="section-accordion">
      <hr />
      <SectionAccordionHeader {...rest} />

      <div className={`accordion-sections`} style={{ height }}>
        <div ref={contentRef} className="sections-content">
          {sectionSteps.map((section, index) => (
            <AccordionSection
              sectionData={section}
              key={section.order || index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
