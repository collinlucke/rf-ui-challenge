import { Button } from "../Button/Button";
import { formatDate } from "../../utils/formatDate";
import "./Heading.scss";

type HeadingProps = {
  title: string;
  icon?: string;
  date?: string;
  location?: string;
};

export const Heading = ({ title, icon, date, location }: HeadingProps) => {
  const formattedDate = date ? formatDate(date) : "";

  return (
    <header className="heading-container">
      {icon && <img className="heading-icon" src={icon} alt="Heading Icon" />}
      <div className="event-details">
        <h1>{title}</h1>
        <div className="event-meta">
          {date && <div className="event-date">{formattedDate}</div>}
          <span className="meta-separator"> | </span>
          {location && <div className="event-location">{location}</div>}
        </div>
      </div>
      <div className="edit-button-wrapper">
        <Button variant="primary" size="md">
          Edit event
        </Button>
      </div>
    </header>
  );
};
