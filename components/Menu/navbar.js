import React, {useState} from 'react';

export default function  Navbar() {
  const [hamburger, setHamburger]=useState(false)
  // const [ham, setHam]=useState("hamburger")                //Попробовать реализовать через хуки
  // const [navLinks, setNavLinks]=useState("nav-links")
  // const [links, setLinks]=useState("nav-links li")
  let navLinks = "nav-links"
  let ham = "hamburger"
  let nav = "li"
  if(hamburger===true){
    ham = ham + " toggle"
    navLinks = navLinks + " open"
    nav= nav + " fade"
  }
    return (
      <div>
        <nav>
          <div className={ham} onClick={() => setHamburger(!hamburger)}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <ul className={navLinks}>
            <li className={nav}><a href="#">Обо мне</a></li>
            <li className={nav}><a href="#">Solutions</a></li>
            <li className={nav}><a href="#">Products</a></li>
            <li className={nav}><a href="#">Services</a></li>
            <li className={nav}><a href="#">Contact Us</a></li>
          </ul>
          </nav>
      </div>
    );
}


