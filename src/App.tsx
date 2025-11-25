import { useState, useEffect } from "react";
import {
  CurrentEventContext,
  type CurrentEventContextType,
} from "./contexts/CurrentEventContext";
import { UserContext, type UserContextType } from "./contexts/UserContext";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/Sidebar";
import "./App.scss";

type EventsType = CurrentEventContextType["currentEvent"][];

function App() {
  const [events, setEvents] = useState<EventsType>([]);
  const [currentEvent, setCurrentEvent] = useState<
    CurrentEventContextType["currentEvent"]
  >({ id: 0, settingsAndWorkflowSteps: [] });
  const [user, setUser] = useState<UserContextType["user"]>({ id: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        const { events, users } = data;
        setEvents(events);
        setCurrentEvent(events[0]);
        setUser(users[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="loading-container">Loading...</div>;
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <CurrentEventContext.Provider value={{ currentEvent, setCurrentEvent }}>
        <div className="app-container">
          <Sidebar events={events} />
          <main className="main-content">
            <Outlet />
          </main>
        </div>
      </CurrentEventContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
