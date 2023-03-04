import React, { useState } from "react";
import "./card.css";

export default function Card(props) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
    {console.log("props ",props)}
    <div
      className="section section---card"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      data-content={props.title}
      data-description={props.description}
    >
       <img
          src={`../assets/Images/Services/${props.image}`}
          className="cover"
          alt={props.title}
        />
      <div className="card" >
        <div className="card-content">
          <p className={`card-description ${isHovering ? "show" : "hide"}`}>
            {props.description}
          </p>
          <p className={`card-title ${isHovering ? "hide" : "show"}`}>
            {props.title}
          </p>
        </div>
      </div>
    </div> 

    </>
  );
}
