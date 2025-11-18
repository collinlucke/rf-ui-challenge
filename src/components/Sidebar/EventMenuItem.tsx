import React from "react";
import { Link } from "react-router-dom";
import type { Event } from "../../contexts/CurrentEventContext";

const EventMenuItem = ({ event }: { event: Event }) => {
  return (
    // Just a dummy link...
    <Link className="event-menu-item" to={`#`}>
      {event.icon ? (
        <img
          className="event-icon"
          src={event.icon}
          alt={event.title}
          title={`Takes you to setup page for ${event.title}`}
        />
      ) : (
        <div className="event-icon-placeholder" title={event.title}>
          {event?.title?.charAt(0)}
        </div>
      )}
    </Link>
  );
};

export default React.memo(EventMenuItem);
