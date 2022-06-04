import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_container">
        <span className="navbar_logo">Online Booking</span>

        <div className="navbar_items">
          <button className="navbar_button">Sign Up</button>
          <button className="navbar_button">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
