/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const WebsiteCard = ({ image, title, id }) => {
  return (
    <>
      <div className="project-card__body text-white rounded-lg mt-10 overflow-hidden mx-auto">
        <Link to={`/websites/${id}`}>
          <img src={image} className="w-full" alt={title} />
        </Link>
      </div>
    </>
  );
};
export default WebsiteCard;
