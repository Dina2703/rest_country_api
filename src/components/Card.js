import React from "react";

function Card() {
  return (
    <div className="card">
      <img
        className="card_img"
        src="https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png"
        alt=""
      />
      <div className="card_body">
        <h3>Germany</h3>
        <p>
          <span>Popularion:</span> 81,770.900
        </p>
        <p>
          <span>Region:</span> Europe
        </p>
        <p>
          <span>Capital:</span> Berlin
        </p>
      </div>
    </div>
  );
}

export default Card;
