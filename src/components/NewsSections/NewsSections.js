import React from "react";
import NewsElement from "../NewsElement/NewsElement";
import "./NewsSection.css";


const NewsSection = (props) => {
  var news = props.news;

  return (
    <div className="grid">
        {news.map((ele) => {
            return (
                <NewsElement eachData={ele} />
            )
        })}
    </div>
  );
};

export default NewsSection;