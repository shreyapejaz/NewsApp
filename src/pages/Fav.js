import "./Fav.css";
import { Link } from "react-router-dom";

const Fav = () => {
  return (
    <div>
      <Link to="/favourites">
        <button className="favourites">
          <i className="fa fa-heart"></i>
        </button>
      </Link>
    </div>
  );
};

export default Fav;
