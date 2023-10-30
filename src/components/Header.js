import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="flex justify-between border border-black">
      <img className="h-24 w-24" alt="logo" src={LOGO_URL} />

      <ul className="flex text-xl">
        <li className="p-2 m-2">Home</li>
        <li className="p-2 m-2">About</li>
        <li className="p-2 m-2">Contact</li>
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
      </ul>
    </div>
  );
};

export default Header;
