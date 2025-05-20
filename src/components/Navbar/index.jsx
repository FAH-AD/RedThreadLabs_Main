/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import appData from "../../data/app.json";
import {
  handleDropdown,
  handleMobileDropdown,
  handleSearch,
} from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  React.useEffect(() => {
    handleSearch();
  }, []);
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <h4>RedThreadLabs</h4>
              ) : (
                <h4>RedThreadLabs</h4>
              )
            ) : (
             <h4>RedThreadLabs</h4>
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item " >
            <Link href="/">
                  <a className="nav-link">Home</a>
            </Link>
             
            </li>

            <li className="nav-item " >
            <Link href="/portfolio">
                  <a className="nav-link">Case Studies</a>
                </Link>
              
            </li>
            {/* <li className="nav-item">
              <Link href="/aboutus">
                <a className="nav-link">About</a>
              </Link>
            </li> */}
           
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
          
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
