import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import type { User } from "../../contexts/UserContext";
import "./Avatar.scss";

export const Avatar = ({ user }: { user: User }) => {
  const { firstName, lastName } = user;

  return (
    <div className="avatar-wrapper">
      {/* Dummy link */}
      <Link to="#">
        <Button
          className="avatar-button"
          variant="avatar"
          title={`Take you to profile for ${firstName} ${lastName}`}
          ariaLabel={`User Avatar for ${firstName} ${lastName}`}
        >
          {firstName?.charAt(0)}
          {lastName?.charAt(0)}
        </Button>
      </Link>
    </div>
  );
};
