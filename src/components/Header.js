import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useStatus from "../hooks/useStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const status = useStatus();

  //subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);

  const { loggedInUser } = useContext(UserContext);
  // console.log(userData);

  return (
    <div className="flex justify-between border border-black">
      <img className="h-24 w-24" alt="logo" src={LOGO_URL} />

      {/* <ul className="flex text-xl">
        <a href="/"><li className="p-2 m-2">Home</li></a>
        <a href="/about"><li className="p-2 m-2">About</li></a>
        <a href="/contact"><li className="p-2 m-2">Contact</li></a>
        <li className="p-2 m-2">Cart</li>
        <li
          className="p-2 m-2 hover:cursor-pointer"
          // onClick={() => {
          //   btnName = "Logout";
          //   console.log(btnName);
          // }}
          // onClick={() => {
          //   if (btnName === "Login") setBtnName("Logout");
          //   else setBtnName("Login");
          // }}
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </li>
      </ul> */}

      <ul className="flex text-xl">
        <li className="p-2 m-2">Status: { status ? "🟢" : "🔴"}</li>
        <Link to="/"><li className="p-2 m-2">Home</li></Link>
        <Link to="/about"><li className="p-2 m-2">About</li></Link>
        <Link to="/contact"><li className="p-2 m-2">Contact</li></Link>
        <Link to="/instamart"><li className="p-2 m-2">Instamart</li></Link>
        <Link to="/cart"><li className="p-2 m-2">Cart - {cartItems.length}</li></Link>
        {/* <li
          className="p-2 m-2 hover:cursor-pointer"
          // onClick={() => {
          //   btnName = "Logout";
          //   console.log(btnName);
          // }}
          // onClick={() => {
          //   if (btnName === "Login") setBtnName("Logout");
          //   else setBtnName("Login");
          // }}
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </li> */}
        <li className="p-2 m-2">{loggedInUser}</li>
      </ul>
    </div>
  );
};

export default Header;
