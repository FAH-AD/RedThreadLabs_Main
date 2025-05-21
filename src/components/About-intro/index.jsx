import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4 className="main-title">Who We Are ?</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words mb-4 chars splitting" data-splitting>
                 RedThreadLabs exists to help brands grow with intention and communicate with clarity.
                 Led by creatives with over 5 years of experience across global and local markets — including time spent working in Belgium — the team understands that what works in one part of the world might fall flat in another. That international perspective, paired with deep technical expertise, shapes a creative process that’s both strategic and culturally aware.
                 Every project runs through a tight delivery pipeline designed for smooth, timely execution — so ideas move forward without friction.
                 This isn’t just about getting things done. It’s about building something that actually lasts.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
