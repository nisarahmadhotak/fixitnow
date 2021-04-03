import React, { Component } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

export default class Footer extends Component {
  componentDidMount = () => {
    AOS.init();
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div>
        <footer>
          <div
            className="main-content"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="left box">
              <Link style={{ textDecoration: "none" }} to="/about">
                <h2>About us</h2>
              </Link>
              <div className="content">
                <p>FixItNow.com</p>

                <div className="social">
                  <a href="https://facebook.com/">
                    <span className="fab fa-facebook-f"></span>
                  </a>
                  <a href="https://twitter.com">
                    <span className="fab fa-twitter"></span>
                  </a>
                  <a href="https://instagram.com/">
                    <span className="fab fa-instagram"></span>
                  </a>
                  <a href="https://youtube.com/">
                    <span className="fab fa-youtube"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="center box">
              <h2>Address</h2>
              <div className="content">
                <div className="place">
                  <span className="fas fa-map-marker-alt"></span>
                  <span className="text">Birendranagar, Surkhet</span>
                </div>
                <div className="phone">
                  <span className="fas fa-phone-alt"></span>
                  <span className="text">+089-765432100</span>
                </div>
                <div className="email">
                  <span className="fas fa-envelope"></span>
                  <span className="text">abc@example.com</span>
                </div>
              </div>
            </div>

            <div className="right box">
              <h2 className="contact-us">Subscribe</h2>
              <div className="content">
                <form>
                  <div className="email">
                    <div className="text">Email</div>
                    <input type="email" required />
                    <div className="btnn">
                      <button type="submit">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="bottom">
            <center>
              <span className="credit">
                Created By <Link>Nisar Ahmad</Link>
              </span>
              <span className="far fa-copyright"></span>
              <span> 2020 All rights reserved.</span>
            </center>
          </div>
        </footer>
      </div>
    );
  }
}
