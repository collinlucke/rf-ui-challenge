import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

export type Setting = {
  id: number;
  settingName: string;
  description: string;
};

export type RegistrationWorkflow = {
  id: number;
  workflowName: string;
  description?: string;
  icon?: string;
};

export type PostRegistrationExperience = {
  id: number;
  experienceName: string;
  description: string;
};

export type Event = {
  id: number;
  title?: string;
  date?: string;
  location?: string;
  icon?: string;
  baseSettings?: Setting[];
  registrationWorkflows?: RegistrationWorkflow[];
  postRegExperiences?: PostRegistrationExperience[];
};

export type CurrentEventContextType = {
  currentEvent: Event;
  setCurrentEvent: Dispatch<SetStateAction<Event>>;
};

export const CurrentEventContext = createContext<CurrentEventContextType>({
  currentEvent: { id: 0 },
  setCurrentEvent: () => {},
});
