import { useContext } from "react";
import { CurrentEventContext } from "../../../contexts/CurrentEventContext";
import { WorkflowStep } from "./WorkflowStep";

export const StepThree = () => {
  const { currentEvent } = useContext(CurrentEventContext);

  return (
    <div className="step-three-wrapper">
      {currentEvent?.postRegExperiences &&
      currentEvent.postRegExperiences.length > 0 ? (
        currentEvent?.postRegExperiences?.map((experience) => (
          <WorkflowStep
            key={experience.id}
            workflowName={experience.experienceName}
            description={experience.description}
            icon="computer.svg"
            id={experience.id}
          />
        ))
      ) : (
        <div>No post-registration experiences available</div>
      )}
    </div>
  );
};
