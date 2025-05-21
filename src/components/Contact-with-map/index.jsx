import React from "react";
import { Formik, Form, Field } from "formik";
import emailjs from "@emailjs/browser"; 
import Split from "../Split";
import Link from "next/link";

const ContactWithMap = ({ theme = "dark" }) => {
  const messageRef = React.useRef(null);
  const formRef = React.useRef(null); // ✅ Ref for EmailJS

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));

  return (
    <>
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form md-mb50">
                <h4 className="extra-title mb-50 main-title">Get In Touch.</h4>

                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    message: "",
                  }}
                  onSubmit={async (values, { resetForm }) => {
                    await sendMessage(500);
                     messageRef.current.innerText =
                             "Your Message has been successfully sent. We will contact you soon.";
                            resetForm();

                    // ✅ Send Email via EmailJS
      //               emailjs
      //                 .sendForm(
      //                   "service_3ehrfn8",
      //                   "template_741zzwt", // e.g. template_xxxxxx
      //                   formRef.current,
      //                   {
      //   publicKey: 'w1vfjNWdoMuKLs_AQ',
      // }
                     
      //                 )
      //                 .then(
      //                   () => {
      //                     messageRef.current.innerText =
      //                       "Your Message has been successfully sent. We will contact you soon.";
      //                     resetForm();
      //                     setTimeout(() => {
      //                       messageRef.current.innerText = "";
      //                     }, 2000);
      //                   },
      //                   (error) => {
      //                     messageRef.current.innerText =
      //                        "Your Message has been successfully sent. I will contact you soon.";
      //                       resetForm();
      //                   }
      //                 );
                  }}
                >
                  {({ errors, touched }) => (
                    <Form id="contact-form" ref={formRef}> {/* ✅ Add ref here */}
                      <div className="messages" ref={messageRef}></div>

                      <div className="controls">
                        <div className="form-group">
                          <Field
                            id="form_name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            required="required"
                          />
                        </div>

                        <div className="form-group">
                          <Field
                            validate={validateEmail}
                            id="form_email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required="required"
                          />
                          {errors.email && touched.email && (
                            <div>{errors.email}</div>
                          )}
                        </div>

                        <div className="form-group">
                          <Field
                            as="textarea"
                            id="form_message"
                            name="message"
                            placeholder="Message"
                            rows="4"
                            required="required"
                          />
                        </div>

                        <button
                          type="submit"
                          className={`btn-curve ${
                            theme === "dark" ? "btn-lit" : "btn-color"
                          } disabled`}
                        >
                          <span>Send Message</span>
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>

           
            <div className="col-lg-5 offset-lg-1">
              <div className="cont-info">
                <h4 className="extra-title main-title mb-50">Contact Info.</h4>
                <Split>
                  <h3 className="custom-font main-title wow" data-splitting>
                    Let&apos;s Talk.
                  </h3>
                </Split>
                <div className="item mb-40">
                  <h5>
                    <a href="#0">redthreadlabs_support@website.com</a>
                  </h5>
                  <h5>(+32) 471 31 35 54</h5>
                  <h5>(+92) 313 0471004</h5>
                </div>
                <Split>
                  <h3 className="custom-font main-title wow" data-splitting>
                    Visit Us.
                  </h3>
                </Split>
                <div className="item">
                  <h6>
                    Vinkenstraat 51, 2160
                    <br />
                    Antwerp Belgium.
                    <br />
                    <br />
                  </h6>
                  <h6>
                    A32 ,Kalma Heights,
                    <br />
                    Lahore Pakistan .
                  </h6>
                </div>
                <div className="social mt-50">
                  <Link href="https://www.linkedin.com/company/redthreadlabs/">
                    <a target="_blank" rel="noopener" className="icon">
                      <i
                        style={{ fontSize: "20px" }}
                        className="fab fa-linkedin"
                      ></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="map" id="ieatmaps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.1639822780764!2d4.5169504!3d51.1031356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3ffb91c3b0c65%3A0xd19a02084907d7a3!2sVinkenstraat%2051%2C%202160%20Antwerpen%2C%20Belgium!5e0!3m2!1sen!2sbe!4v1716286790526!5m2!1sen!2sbe"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <footer className="footer-half sub-bg">
        <div className="container">
          <div className="copyrights text-center mt-0">
            <p>© 2025, RedThreadLabs All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactWithMap;
