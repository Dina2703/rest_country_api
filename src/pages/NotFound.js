import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <p>OoPS!</p>
      <p>We can't seem to find the page you-re looking for.</p>
      <Link to="/">
        <button>
          Back to the <span>Home </span>page
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
