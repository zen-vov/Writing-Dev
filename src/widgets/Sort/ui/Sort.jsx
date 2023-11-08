import React from "react";
import { genres } from "../const";

const Sort = () => {
  return (
    <div className="sort">
      <div className="sort__nav">
        <ul className="sort__menu">
          {genres.map((item, index) => (
            <li className="sort__menu-item" item={item} key={index}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sort;
