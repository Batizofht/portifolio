import React from 'react'
import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
    const [activeLink, setActivelink] = useState("");
    const [Scrolled, setScrolled] = useState(false);

    useEffect(() =>{
       const onscroll = () =>{
        if(window.screenY >50){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
       }
       window.addEventListener("scroll", onscroll);
       return () => window.removeEventListener("scroll", onscroll);
    }, [])
   const upDate = (value) =>{
    setActivelink(value);
   }
  return (
    <>
    <nav className="navbar navbar-expand-lg " id={Scrolled ? "scroll": "none"}>
  <div className="container">
    <Link  className="navbar-brand text-light fw-bold" to="/Home">MU BAPTISTE</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          
        <NavLink activeClassName="active" className={activeLink === "Home" ? "nav-link actives" : "nav-link"} onClick={() => upDate("Home")} aria-current="page" to="Home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="active" className={activeLink === "skills" ? "nav-link actives" : "nav-link"} onClick={() => upDate("skills")} aria-current="page" to="">skills</NavLink>
        </li>
        <li className="nav-item">
<NavLink activeClassName="active" className={activeLink === "Projects" ? "nav-link actives" : "nav-link"} onClick={() => upDate("Projects")} aria-current="page" to="">Projects</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           More
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar