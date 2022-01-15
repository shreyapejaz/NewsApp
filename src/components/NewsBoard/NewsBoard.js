import React, { useState, useEffect } from "react";
import "./NewsBoard.css";
import axios from "axios";
import NewsSection from "../NewsSections/NewsSections";
import apiKey from '../../apikey';

const NewsBoard = (props) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getNews = async () => {
      const response =
        props.query.length > 0
          ? await axios.get(
              `https://newsapi.org/v2/everything?q=${props.query}&qInTitle=${props.query}&sortBy=popularity&language=en&apiKey=${apiKey}`
            )
          : await axios.get(
              `https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&language=en&apiKey=${apiKey}`
            );
      setNews(response.data.articles);
    };
    getNews();
  }, [props.query.length]);

  return (
    <div className="board">
      <NewsSection news={news} />
    </div>
  );
};

export default NewsBoard;