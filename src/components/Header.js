import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDatabase } from "../contexts/DataBaseContext";
import "./components-style.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data, loadingData } = useDatabase();

  if (loadingData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div
        style={{
          backgroundColor:
            data["header_color"] == null || data["header_color"] === ""
              ? "white"
              : data["header_color"],
        }}
        className="header-box"
      >
        <div
          style={{
            color:
              data["header_text_color"] == null ||
              data["header_text_color"] === ""
                ? "#8b0020"
                : data["header_text_color"],
          }}
          className="header-text"
        >
          {(data["name"] == null || data['name'] === '') ? "Welcome" : data["name"]}
        </div>
        <div className="nav-bar">
          {location.pathname === "/" ? (
            <button
              onClick={() => navigate("/")}
              style={{
                color:
                  data["sub_header_text_color"] == null ||
                  data["sub_header_text_color"] === ""
                    ? "black"
                    : data["sub_header_text_color"],
              }}
              className="btn-nav-bar underline"
            >
              {data["first_tab_name"] == null || data["first_tab_name"] === ""
                ? "Contents"
                : data["first_tab_name"]}
            </button>
          ) : (
            <button
              onClick={() => navigate("/")}
              style={{
                color:
                  data["sub_header_text_color"] == null ||
                  data["sub_header_text_color"] === ""
                    ? "black"
                    : data["sub_header_text_color"],
              }}
              className="btn-nav-bar"
            >
              {data["first_tab_name"] == null || data["first_tab_name"] === ""
                ? "Contents"
                : data["first_tab_name"]}
            </button>
          )}
          {location.pathname === "/about" ? (
            <button
              onClick={() => navigate("/about")}
              style={{
                color:
                  data["sub_header_text_color"] == null ||
                  data["sub_header_text_color"] === ""
                    ? "black"
                    : data["sub_header_text_color"],
              }}
              className="btn-nav-bar underline"
            >
              About
            </button>
          ) : (
            <button
              onClick={() => navigate("/about")}
              style={{
                color:
                  data["sub_header_text_color"] == null ||
                  data["sub_header_text_color"] === ""
                    ? "black"
                    : data["sub_header_text_color"],
              }}
              className="btn-nav-bar"
            >
              About
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
