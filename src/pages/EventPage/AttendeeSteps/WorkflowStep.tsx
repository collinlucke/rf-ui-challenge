import type { RegistrationWorkflow } from "../../../contexts/CurrentEventContext";

export const WorkflowStep = ({
  workflowName,
  description,
  icon,
  id,
}: RegistrationWorkflow) => {
  return (
    <div className={`workflow-step workflow-id-${id}`}>
      <div className="step-heading workflow-step-heading">
        {icon && <img src={icon} alt="Workflow Display Icon" />} {workflowName}
      </div>
      <div className="step-item-content">{description}</div>
    </div>
  );
};
