import { LOGO_URL } from "../utils/constants"
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";



const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);
    // console.log(loggedInUser);

    const cartItems = useSelector((store)=> store.cart.items);
    //console.log(cartItems);
    
    return (
      <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-[#FDEFC4] via-[#F8CB46] to-[#936E00] shadow-lg rounded-lg">
  {/* Logo */}
  <div className="flex items-center">
    <img className="w-44 sm:w-48 lg:w-56 rounded-lg shadow-md" src={LOGO_URL} alt="Logo" />
  </div>

  {/* Navigation */}
  <div className="hidden md:flex items-center">
    <ul className="flex space-x-6 text-white font-semibold">
      <li className="hover:text-black transition duration-300">
        Online Status: {onlineStatus ? "✅" : "🔴"}
      </li>
      <li className="hover:text-black transition duration-300">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-black transition duration-300">
        <Link to="/about">About Us</Link>
      </li>
      <li className="hover:text-black transition duration-300">
        <Link to="/contact">Contact Us</Link>
      </li>
      <li className="hover:text-black transition duration-300">
        <Link to="/grocery">Grocery</Link>
      </li>
      <li className="hover:text-black transition duration-300">
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </li>
    </ul>
  </div>

  {/* Login Button & User */}
  <div className="flex items-center space-x-4">
    <button
      className="px-5 py-2 bg-black text-white rounded-full shadow-md hover:bg-gray-900 transition duration-300"
      onClick={() => setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")}
    >
      {btnNameReact}
    </button>
    <span className="text-white font-bold">{loggedInUser}</span>
  </div>
</div>

    );
};

export default Header;