import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

export type StepItem = {
  id: number;
  itemName: string;
  description?: string;
  className?: string;
  icon?: string;
};

export type SectionData = {
  id: number;
  icon: number;
  order: number;
  title: string | React.ReactNode;
  stepItems: StepItem[];
  stepSectionDisplaySettings: { outlineSection: boolean };
  setItemStyleSettings: { outlined: boolean; baseDivs: boolean };
};

type settingsAndWorkflowStepsProps = SectionData[];

export type Event = {
  date?: string;
  icon?: string;
  id: number;
  location?: string;
  settingsAndWorkflowSteps: settingsAndWorkflowStepsProps;
  title?: string;
};

export type CurrentEventContextType = {
  currentEvent: Event;
  setCurrentEvent: Dispatch<SetStateAction<Event>>;
};

export const CurrentEventContext = createContext<CurrentEventContextType>({
  currentEvent: { id: 0, settingsAndWorkflowSteps: [] },
  setCurrentEvent: () => {},
});
