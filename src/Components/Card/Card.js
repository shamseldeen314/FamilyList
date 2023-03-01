import React, { useState } from "react";

import Parent from "../Js/Parent.js";
import Kids from "../Js/Kids";
import ParentData from "../../Data/ParentData";
import KidstData from "../../Data/KidsData";

import "./Card.css";
function Card() {
  const [parents, setParents] = useState(ParentData);
  const [child, setChild] = useState(KidstData);

  // const blockCard = () => {
  //     setState(() => !state);
  // };

  return (
    <div>
      <section className="container">
        <h3>{parents.length} birthdays today</h3>
        <div className={parents.length > 0 ? " Card" : "Card_height_0"}>
          <dive className="Parent">
            <Parent parents={parents} />
          </dive>
        </div>

        <h3>{child.length} birthdays today</h3>
        <div className={child.length > 0 ? " Card" : "Card_height_0"}>
          <dive className="Kids">
            <Kids child={child} />
          </dive>
        </div>

        <div className="group_btn_card">
          <button
            className="refresh_btn"
            onClick={() => setParents(ParentData)}
          >
            Parent
          </button>
          <button className="refresh_btn" onClick={() => setChild(KidstData)}>
            Kids
          </button>
        </div>
      </section>
    </div>
  );
}

export default Card;
