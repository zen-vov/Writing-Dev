import React from "react";
import { news } from "../const";
import { NewsCard } from "../../../entities/NewsCard";

const NewsList = () => {
  return (
    <div className="articles">
      <div className="articles__wrapper">
        {news.map((item, index) => (
          <NewsCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
