
import { Routes, Route, Link } from "react-router-dom";
import Cart from "./Cart";
import FData from "./FData";

const NavBar = () => {
  return (
    <div>
      <div className="navBar">
        <div>Shopping Cart</div>
        <div className="navitem">
          <Link to={"/FData"} className="noDecoration">
            Home Page
          </Link>
          <Link to={"/cart"} className="noDecoration">
            Cart Page
          </Link>
        </div>
      </div>
      <Routes>
        <Route exact path="/FData" element={<FData />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default NavBar;
