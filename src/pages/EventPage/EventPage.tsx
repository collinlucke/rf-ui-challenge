import { useContext, useState } from "react";
import { CurrentEventContext } from "../../contexts/CurrentEventContext";
import { Heading } from "../../components/Heading/Heading";
import { SectionAccordion } from "../../components/Accordion/SectionAccordion";
import "../page-styles.scss";
import "./EventPage.scss";

const EventPage = () => {
  const { currentEvent } = useContext(CurrentEventContext);
  const [isAttendeeOpen, setIsAttendeeOpen] = useState(true);

  const setAttendeeOpen = () => {
    setIsAttendeeOpen((prev) => !prev);
  };

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
        sections={currentEvent.settingsAndWorkflowSteps}
        isOpen={isAttendeeOpen}
        setIsOpen={setAttendeeOpen}
      />
    </div>
  );
};

export default EventPage;
