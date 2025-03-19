import React, { useState } from "react";
import { logo } from "../assets/images";
import { navigationBarLinks } from "../constants";
import { hamburger } from "../assets/icons";

//nav bar link function
const NavBarLinks = () => {
  return navigationBarLinks.map((item, index) => (
    <li key={index}>
      <a href={item.href} className="leading-normal text-lg text-slate-600">
        {item.label}
      </a>
    </li>
  ));
};

function Nav() {
  // state to store nav link on image
  const [items, setItems] = useState([]);

  // onclick handler for the image
  /* function handleClick() {
    const itemsArray = NavBarLinks();
    setItems(itemsArray);
  }*/
  const handleClick = () => {
    const itemsArray = NavBarLinks();
    setItems(itemsArray);
  };

  return (
    <header className="">
      <nav className="flex justify-between items-center max-w-7xl ">
        <a href="/">
          <img src={logo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          <NavBarLinks />
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="Hamburger"
            width={30}
            height={30}
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          />
          <div className="mt-10 grid grid-rows-4 gap-4">
            {items.map((item, index) => (
              <ul key={index}>
                <h6>{item}</h6>
              </ul>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
