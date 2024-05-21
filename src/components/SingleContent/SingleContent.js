import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import ContentModal from "../ContentModal/ContentModal";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img className="poster" src={poster ? `${img_300}${poster}` : unavailable} alt={title} />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </ContentModal>
  );
};

export default SingleContent;

// The standard Lorem Ipsum passage, used since the 1500s
// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
// incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
// exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
// dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
// Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
// anim id est laborum.

// The standard Lorem Ipsum passage, used since the 1500s
// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
// incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
// exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
// dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
// Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
// anim id est laborum.

// The standard Lorem Ipsum passage, used since the 1500s
// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
// incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
// exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
// dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
// Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
// anim id est laborum.
