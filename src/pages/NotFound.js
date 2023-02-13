import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="flex"
      style={{
        flexDirection: "column",
        gap: "20px",
        width: "100%",
        height: "100%",
        margin: "auto",
      }}
    >
      <img
        src="/not_found.jpg"
        alt=""
        width={320}
        height={280}
        aria-errormessage="page not found"
      />
      <Link to="/">
        <button
          style={{
            border: "none",
            padding: "20px 50px",
            borderRadius: "10px",
            boxShadow: "0 3px 5px 0 rgba(0, 0, 0, .2)",
            cursor: "pointer",
          }}
        >
          Back to the <span>Home </span>page
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
