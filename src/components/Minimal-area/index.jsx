/* eslint-disable @next/next/no-img-element */
import React from "react";
import featuresEffect from "../../common/featuresEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import Split from "../Split";

const MinimalArea = () => {
  React.useEffect(() => {
    featuresEffect();
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/assets/aboutUs.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars slideTitle splitting"
                  data-splitting
                >
                  About us.
                </h4>
              </Split>

              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  From Europe to East, our edge comes from seeing how brands move people in different worlds — and applying that here, where it counts.
                </p>
              </Split>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6 className="main-title">
                    <span>1</span> Our Mission
                  </h6>
                  <p>
                   Helping brands grow with clarity, strategy, and creative that works across markets.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6 className="main-title">
                    <span>2</span> Our Goals
                  </h6>
                  <p>
                    Empowering brands with strategic creativity and seamless execution that drives real growth.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6 className="main-title">
                    <span>3</span> Why Us?
                  </h6>
                  <p>
                   Because experience meets insight — understanding diverse markets, mastering the craft, and delivering on your timeline with precision.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
