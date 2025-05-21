/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import team1Data from "../../data/sections/team1.json";

class Team1 extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      <div className="navs mt-30 wow fadeInUp" data-wow-delay=".3s">
        <span
          className="prev cursor-pointer"
          onClick={() => this.slider.slickPrev()}
        >
          <i className="fas fa-chevron-left"></i>
        </span>
        <span
          className="next cursor-pointer"
          onClick={() => this.slider.slickNext()}
        >
          <i className="fas fa-chevron-right"></i>
        </span>
      </div>
    );
  };
  render() {
    return (
      <section className="team section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 valign">
              <div className="full-width">
                <div className="sec-head custom-font mb-0">
                  <h6>The Team </h6>
                  <h3>Our Leadership.</h3>
                </div>
                
              </div>
            </div>
            <div className="col-lg-6 team-imgContainer">
              
                {team1Data.map((item) => (
                  <div
                    className="item wow fadeInUp"
                    data-wow-delay=".3s"
                    key={item.id}
                  >
                    <div className="img wow ">
                      <img className="team-img" src={item.image} alt="" />
                    </div>
                    <div className="info">
                      <h5>{item.name}</h5>
                      <span>{item.title}</span>
                      <div className="social">
                        <a href="">
                          <i className="fab fa-linkedin"></i>
                        </a>
                        
                      </div>
                    </div>
                  </div>
                ))}
              
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team1;
