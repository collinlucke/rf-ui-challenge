import { Button } from "../Button/Button";
import "./SectionAccordion.scss";

type AccordionHeaderProps = {
  icon?: string;
  title?: string;
  isOpen?: boolean;

  setIsOpen: () => void;
};

export const SectionAccordionHeader = ({
  icon,
  title,
  isOpen,
  setIsOpen,
}: AccordionHeaderProps) => {
  const setIsOpenHandler = () => {
    setIsOpen();
  };

  return (
    <Button
      className="accordion-header"
      onClick={setIsOpenHandler}
      ariaExpanded={isOpen}
      ariaControls="accordion-content"
    >
      {icon && (
        <img className="accordion-icon" src={icon} alt={`${title}-icon`} />
      )}
      <h3>{title}</h3>
    </Button>
  );
};
