/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../../Split";
import Link from "next/link";
import appData from "../../../data/app.json";
import handleFullScreenNavbar from "../../../common/handleFullScreenNavbar";

const NavbarFullMenu = ({ theme, lr }) => {
  React.useEffect(() => {
    handleFullScreenNavbar();
  }, []);
  return (
    <>
      <div
        id="navi"
        className={`topnav ${theme ? (theme === "light" ? "light" : "") : ""}`}
      >
        <div className="container-fluid">
          <div className="logo">
            <Link href='/'>
           
            <a>
              {theme ? (
                theme === "light" ? (
                  <h4>RedThreadLabs</h4>
                ) : (
                  <h4>RedThreadLabs</h4>
                )
              ) : (
                <h4>RedThreadLabs</h4>
              )}
            </a>
             </Link>
          </div>
          <div className="menu-icon">
            <span className="icon">
              <i></i>
              <i></i>
            </span>
            <Split>
              <span className="text" data-splitting>
                <span className="menu-text">Menu</span>
              </span>
            </Split>
          </div>
        </div>
      </div>

      <div className="hamenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div className="menu-links">
                <ul className="main-menu">
                  <li>
                  <div className="o-hidden">
                      <Link href="/">
                        <a className="link">
                          <span className="nm">01.</span>Home
                        </a>
                      </Link>
                    </div>
                   
                  </li>
                  {/* <li>
                    <div className="o-hidden">
                      <Link href="/aboutus">
                        <a className="link">
                          <span className="nm">02.</span>About Us
                        </a>
                      </Link>
                    </div>
                  </li> */}
                  <li>
                  <div className="o-hidden">
                      <Link href="/portfolio">
                        <a className="link" >
                          <span className="nm">02.</span>Case Studies
                        </a>
                      </Link>
                    </div>
                
                  </li>


                  <li>
                    <div className="o-hidden">
                      <Link href="/contact">
                        <a className="link">
                          <span className="nm">03.</span>Contact
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="cont-info">
                <div className="item">
                  <h6>Phone :</h6>
                  <p>(+32) 471 31 35 54 </p>
                  <p>(+92) 313 0471004</p>
                </div>
                <div className="item">
                  <h6>Address :</h6>
                  <p>
                  A32 ,Kalma Heights,Lahore Pakistan.
                  </p>
                </div>
                <div className="item">
                  <h6>Email :</h6>
                  <p>
                    <a href="#0">RedThreadLabs@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarFullMenu;
