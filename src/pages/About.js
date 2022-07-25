import React from "react";
import "./pages-style.css";
import { useDatabase } from "../contexts/DataBaseContext";

const About = () => {
  const { data, loadingData, profilePictureUrl } = useDatabase();

  if (loadingData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="about-body">
      <img
        className="pic"
        alt="pic"
        style={{ borderRadius: "15px" }}
        width="150px"
        src={
          profilePictureUrl == null
            ? require("../images/girl_avatar.png")
            : profilePictureUrl
        }
      ></img>
      <p>{data["about"]}</p>
      <br />
      <div>
        <a
          target="_blank"
          href={
            data["instagram"] == null
              ? "https://instagram.com"
              : "https://instagram.com/" + data["instagram"]
          }
          rel="noreferrer"
        >
          <img
            alt="insta_logo"
            width={50}
            className="pic"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/240px-Instagram_logo_2016.svg.png"
          />
        </a>
      </div>
    </div>
  );
};

export default About;
