import { useRef, useState, useLayoutEffect } from "react";
import { SectionAccordionHeader } from "./SectionAccordionHeader";
import "./SectionAccordion.scss";

type SectionType = {
  title: React.ReactNode;
  content: React.ReactNode;
};

type SectionAccordionProps = {
  icon: string;
  title: string;
  sections: SectionType[];
  isOpen: boolean;
  setIsOpen: () => void;
};

export const SectionAccordion = ({
  icon,
  title,
  sections,
  isOpen,
  setIsOpen,
}: SectionAccordionProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
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
      <SectionAccordionHeader
        icon={icon}
        title={title}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <div className={`section-accordion-sections`} style={{ height }}>
        <div ref={contentRef} className="sections-content">
          {sections.map((section, index) => (
            <section key={index}>
              {section.title}
              {section.content}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};
