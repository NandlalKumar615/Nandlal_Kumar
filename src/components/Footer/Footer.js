import React, { useRef } from "react";

import "./Footer.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const formName = useRef();
  const formEmail = useRef();
  const formPhone = useRef();
  const formMessage = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const dateTime = new Date();

    const currentDate =
      dateTime.getDate() +
      "/" +
      (dateTime.getMonth() + 1) +
      "/" +
      dateTime.getFullYear();
    const currentTime =
      dateTime.getHours() +
      ":" +
      dateTime.getMinutes() +
      ":" +
      dateTime.getSeconds();

    const userMessage = {
      ID: currentTime + "-" + currentDate,
      Name: formName.current.value,
      Email: formEmail.current.value,
      Phone: formPhone.current.value,
      Message: formMessage.current.value,
      Date: currentDate,
      Time: currentTime,
    };

    addMessageHandler(userMessage);

    formName.current.value = "";
    formEmail.current.value = "";
    formPhone.current.value = "";
    formMessage.current.value = "";
  };

  async function addMessageHandler(userMessage) {
    await fetch(
      "https://portfolio-website-8a07b-default-rtdb.firebaseio.com/userMessages.json",
      {
        method: "POST",
        body: JSON.stringify(userMessage),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return (
    <div className="footer">
      <h2 className="footer-Title">Get In Touch</h2>
      <div className="footer-Container">
        <form className="footer-Form" onSubmit={submitHandler}>
          <div className="footer-Form-Group">
            <input
              className="footer-Form-Input"
              type="text"
              placeholder="Name"
              ref={formName}
              required
            />
            <label className="footer-Form-Label" htmlFor="Name">
              Name
            </label>
          </div>
          <div className="footer-Form-Group">
            <input
              className="footer-Form-Input"
              type="email"
              placeholder="Email ID"
              ref={formEmail}
              required
            />
            <label className="footer-Form-Label" htmlFor="Email">
              Email ID
            </label>
          </div>
          <div className="footer-Form-Group">
            <input
              className="footer-Form-Input"
              type="text"
              placeholder="Phone No."
              ref={formPhone}
            />
            <label className="footer-Form-Label" htmlFor="Phone">
              Phone No.
            </label>
          </div>
          <div className="footer-Form-Group">
            <textarea
              className="footer-Form-Input"
              type="text"
              placeholder="Message"
              rows={3}
              ref={formMessage}
            />
            <label className="footer-Form-Label" htmlFor="Message">
              Message
            </label>
          </div>
          <button className="footer-Form-Submit">Send</button>
        </form>
        <div className="footer-Connect">
          <div className="footer-Links">
            <span className="footer-Links-Link">
              <a href="https://www.linkedin.com/in/nandlalkumar/">
                <box-icon
                  size="5rem"
                  name="linkedin-square"
                  type="logo"
                  animation="tada"
                  rotate="90"
                  color="#f7f7f7"
                ></box-icon>
              </a>
            </span>
            <span className="footer-Links-Link">
              <a href="https://github.com/NandlalKumar615/">
                <box-icon
                  size="5rem"
                  name="github"
                  type="logo"
                  rotate="90"
                  animation="tada"
                  color="#f7f7f7"
                ></box-icon>
              </a>
            </span>
            <span className="footer-Links-Link">
              <a href="http://www.instagram.com/nand_kr_/">
                <box-icon
                  size="5rem"
                  name="instagram-alt"
                  type="logo"
                  animation="tada"
                  rotate="90"
                  color="#f7f7f7"
                ></box-icon>
              </a>
            </span>
          </div>
          <div className="footer-GetInTouch">
            <div>
              <a className="footer-GetInTouch-Method" href="tel:+918051127302">
                <span>
                  <box-icon
                    size="3rem"
                    name="phone-call"
                    type="solid"
                    color="#f7f7f7"
                  ></box-icon>
                </span>
                <span>+91-8051127302</span>
              </a>
            </div>
            <div>
              <a
                className="footer-GetInTouch-Method"
                href="mailto:nandlalkumar615@gmail.com"
              >
                <span>
                  <box-icon
                    size="3rem"
                    name="envelope"
                    color="#f7f7f7"
                  ></box-icon>
                </span>
                <span>nandlalkumar615@gmail.com</span>
              </a>
            </div>
            <div>
              <a
                className="footer-GetInTouch-Method"
                href="https://goo.gl/maps/u7ACrGrUeHgyedky8"
              >
                <span>
                  <box-icon
                    size="3rem"
                    name="map"
                    type="solid"
                    color="#f7f7f7"
                  ></box-icon>
                </span>
                <span>MNIT Campus, Jaipur-302017</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
