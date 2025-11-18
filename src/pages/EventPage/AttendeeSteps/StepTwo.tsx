import { useContext } from "react";
import { CurrentEventContext } from "../../../contexts/CurrentEventContext";
import { Button } from "../../../components/Button/Button";
import { WorkflowStep } from "./WorkflowStep";

const AddRegistrationWorkflow = () => {
  return (
    <Button className="workflow-step add-registration-workflow">
      <img
        src="plus-circle.svg"
        alt="Add Registration Workflow"
        className="add-registration-workflow-icon"
      />
      <div className="step-item-content">Add Registration Workflow</div>
    </Button>
  );
};

export const StepTwo = () => {
  const { currentEvent } = useContext(CurrentEventContext);
  return (
    <div className="step-two-wrapper">
      {currentEvent?.registrationWorkflows &&
      currentEvent.registrationWorkflows.length > 0 ? (
        currentEvent?.registrationWorkflows?.map((workflow) => (
          <WorkflowStep
            key={workflow.id}
            workflowName={workflow.workflowName}
            description={workflow.description}
            icon="workflow-arrow.svg"
            id={workflow.id}
          />
        ))
      ) : (
        <div>No registration workflows available</div>
      )}
      <AddRegistrationWorkflow />
    </div>
  );
};
