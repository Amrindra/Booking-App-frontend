import "./Header.scss";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <div className="header_lists">
          <div className="header_list_item active">
            <FontAwesomeIcon icon={faBed} />
          </div>

          <div className="header_list_item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>

          <div className="header_list_item">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>

          <div className="header_list_item">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>

          <div className="header_list_item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>

        <h1 className="header_title">A lifetime of discouts? It's great</h1>
        <p className="header_desc">
          Get rewarded for your travels & unlock instan savings of 10%
        </p>
        <button className="header_button">Sign in or Register</button>

        <div className="header_search">
          <div className="header_search_item">
            <FontAwesomeIcon icon={faBed} className="header_icon" />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="header_search_input"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
