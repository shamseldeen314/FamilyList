import React from "react";

const Kids = (child) => {
  return (
    <>
      {child.map((children_list) => {
        const { id, name, address, gender, age, phone } = children_list;
        return (
          <article key={id} className="children_list">
            {/* <img src={person.image} alt={name} /> */}
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
              <p>{address}</p>
              <p>{gender}</p>
              <p>{phone}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Kids;
