
import React from "react";
import Split from "../Split";
import Link from "next/link";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Best Features
          </h6>
          <Split>
            <h3 className="wow words slideTitle chars splitting" data-splitting>
              Services.
            </h3>
          </Split>
          <span className="tbg">Services</span>
        </div>
        <div className="row">
          <div
            className="col-lg-3 col-md-6 item-box bg-img wow fadeInLeft"
            data-wow-delay=".3s"
            style={{ backgroundImage: "url(https://avo-nextjs.themescamp.com/img/1.jpg)" }}
          >
            <h4 className=" main-title custom-font">
              Best Of <br /> Our Features
            </h4>
            {/* <Link href="/about/about-dark">
              <a className="btn-curve btn-bord btn-lit mt-40">
                <span>See All Services</span>
              </a>
            </Link> */}
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".5s"
          >
            <span className="icon pe-7s-paint-bucket"></span>
            <h6>Custom  <br/> Web   Solutions</h6>
            <p>
              Web designing, SEO based Development, Maintaining, Optimizing
            </p>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".7s"
          >
            <span className="icon pe-7s-phone"></span>
            <h6>
            Branded  <br/> Video Solutions
            </h6>
            <p>Social Media ads, Marketing Videos, Brand Promos, Short Form Content.</p>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".9s"
          >
            <span className="icon pe-7s-display1"></span>
            <h6>
              Marketing <br/> Solutions
            </h6>
            <p>Brand Strategy & Positioning, Performance Marketing, Content Marketing & SEO, Email Marketing.</p>
          </div>
        </div>
      </div>
      <div className="half-bg bottom"></div>
    </section>
  );
};

export default Services;
