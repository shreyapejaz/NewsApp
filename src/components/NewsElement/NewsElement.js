import React from "react";
import { useState } from "react";
import "./NewsElement.css";

const favarr=[];
const NewsElement = (props) => {
  let [decider,setDecider] = useState({color:"gray"})
  var data = props.eachData;
  const onfavourites =() =>{
    setDecider((prevState) => {
      let obj = Object.assign({},prevState);
      if(obj.color == "gray"){
        obj.color="red"
      }else obj.color="gray"
      return obj})
      favarr.push(data);
    localStorage.setItem('fav',JSON.stringify(favarr))
  }
  return (
       <div className="data">
      <li>
        <h4 style={{ padding: "2px", margin: "0" }}>{data.title}</h4>
      </li>
      <li>
        <img
          src={data.urlToImage}
          alt="news_image"
          width="100%"
          max-height="25%"
        />
      </li>
      <li>
        <p>{data.content}</p>
      </li>
      <li>
        <p>From: &nbsp; {data.source.name}</p>
      </li>
      <li>
        <p>Published on: &nbsp; {data.publishedAt} </p>
      </li>
      <table className="bottom">
        <tbody>
        <tr>
          <td>
            <button
              style={{ backgroundColor: "darkgray", borderRadius: "10px" }}
            >
              <a
                href={data.url}
                target="_blank"
                rel="noreferrer"
                style={{ color: "ivory",textDecoration:"none" }}
              >
                Read more{" "}
              </a>
            </button>
          </td>
          <td>
            <button className="favourite" onClick={onfavourites}>
              <i className="fa fa-heart" style={decider}></i>
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NewsElement;