import { useContext, useState } from "react";
import { CurrentEventContext } from "../../contexts/CurrentEventContext";
import { Heading } from "../../components/Heading/Heading";
import { SectionAccordion } from "../../components/Accordion/SectionAccordion";
import { StepOne } from "./AttendeeSteps/StepOne";
import { StepTwo } from "./AttendeeSteps/StepTwo";
import { StepThree } from "./AttendeeSteps/StepThree";
import "../page-styles.scss";
import "./EventPage.scss";

const EventPage = () => {
  const { currentEvent } = useContext(CurrentEventContext);
  const [isAttendeeOpen, setIsAttendeeOpen] = useState(true);

  const stepTitle = (stepNumber: number, stepName: string) => {
    return (
      <div className="step-title">
        <span className="step-number">Step {stepNumber}:</span> {stepName}
      </div>
    );
  };

  const attendeeSetupSteps = [
    {
      title: stepTitle(1, "Base settings."),
      content: <StepOne />,
    },
    {
      title: stepTitle(2, "Build registration workflows."),
      content: <StepTwo />,
    },
    {
      title: stepTitle(3, "Design post-registration experiences."),
      content: <StepThree />,
    },
  ];

  return (
    <div className="page-wrapper">
      <Heading
        title={currentEvent.title || "Event Title"}
        icon={currentEvent.icon}
        date={currentEvent.date || ""}
        location={currentEvent.location || ""}
      />
      <div className="instructions">
        <h2>Event setup guide</h2>
        See the available list of modules below. We suggest that you start with
        the attendee module.
      </div>

      <SectionAccordion
        icon="person-portal.svg"
        title="Attendee"
        sections={attendeeSetupSteps}
        isOpen={isAttendeeOpen}
        setIsOpen={setIsAttendeeOpen}
      />
    </div>
  );
};

export default EventPage;
