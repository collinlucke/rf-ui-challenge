import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import EventMenuItem from "./EventMenuItem";
import { Avatar } from "../Avatar/Avatar";
import type { Event } from "../../contexts/CurrentEventContext";
import "./Sidebar.scss";

type SidebarProps = {
  events: Event[];
};

export const Sidebar = ({ events }: SidebarProps) => {
  const { user } = useContext(UserContext);

  return (
    <aside className="sidebar-nav">
      <nav className="top" aria-label="Event navigation">
        <img
          className="rf-logo"
          src="rf-logo.svg"
          alt="RainFocus Logo"
          title="RainFocus is just the keenest"
        />

        {events &&
          events.map((event) => <EventMenuItem key={event.id} event={event} />)}
      </nav>
      <div className="bottom">
        <Avatar user={user} />
      </div>
    </aside>
  );
};
