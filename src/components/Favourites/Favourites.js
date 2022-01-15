import NewsElement from "../NewsElement/NewsElement";
import "./Favourites.css";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";

const Favourites = () => {
  const [remFavs,setRemfavs] = useState(false);
  var favnews = JSON.parse(localStorage.getItem("fav"));
  useEffect(() => {
    const removeFavs =() => {
      localStorage.removeItem("fav");
    }
    removeFavs();
  },[remFavs])
  return (
    <>
      {favnews && favnews.length > 0 ? (
        <>
          <ul className="navbar">
            <li style={{display:"block",textDecoration:"none"}}>
              <Link to="/">Return to Headlines </Link>
            </li>
            <li style={{ float: "right" }} onClick={() =>setRemfavs((prevState) => !prevState)}>Clear Favourites</li>
          </ul>
          <div className="board">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                boxSizing: "border-box",
              }}
            >
              {favnews.map((ele) => {
                return <NewsElement eachData={ele} />;
              })}
            </div>
          </div>
        </>
      ) : (
        <Link to="/">
          <button className="newspaper">
            <i className="fa fa-newspaper-o" style={{ fontSize: "36px" }}></i>
            <br /> No Favourites <br />
            Return to Headlines{" "}
          </button>
        </Link>
      )}
    </>
  );
};
export default Favourites;
