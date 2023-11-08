import React from "react";

const NewsCard = ({ item }) => {
  return (
    <div className="articles__item">
      <img src={item.image} alt="" />
      <h4>{item.title}</h4>
      <p>{item.descr}</p>
      <div className="articles__add-inf">
        <p className="data">{item.date}</p>
        <p>&#8226;</p>
        <p className="genre">{item.genre}</p>
      </div>
    </div>
  );
};

export default NewsCard;
