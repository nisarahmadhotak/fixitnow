import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <header className="header">
            <div className="header-text-box">
              <h1 className="header-primary">
                <span className="header-primary-main"> FixItNow.com </span>
                <span className="header-primary-sub">
                  At your doorstep ASAP
                </span>
              </h1>
              <Link to="/shop" className="btn btn-white btn-animated">
                Discover
              </Link>
            </div>
          </header>

          <section className="section-about">
            <div className="u-center-text u-margin-bottom-big u-margin-top-medium">
              <h2 className="heading-secondary">Who are We</h2>
            </div>
            <div className="roww">
              <h3
                className="header-tertiary u-margin-bottom-small"
                style={{ marginLeft: "3rem", marginRight: "3rem" }}
              >
                About Us
              </h3>

              <p
                className="paragraph"
                style={{ marginLeft: "3rem", marginRight: "3rem" }}
              >
                Fix It Now! is the up and coming home services platform in
                Mumbai, with a mission to help during unpredicted emergencies.
                The platform helps customers book reliable home services like
                beauty services, massage therapy, cleaning, plumbing, carpentry,
                appliance repair, painting etc. ASAP! The company's vision is to
                empower millions of service professionals across the world to
                deliver services at home like never seen before. The company
                partners with reliable service professionals, helping them with
                training, credit, product procurement, insurance, technology
                etc.
              </p>
              <h3
                className="header-tertiary u-margin-bottom-small"
                style={{ marginLeft: "3rem", marginRight: "3rem" }}
              >
                About our Services
              </h3>
              <p
                className="paragraph"
                style={{ marginLeft: "3rem", marginRight: "3rem" }}
              >
                Fix It Now! provides a platform that allows skilled and
                experienced professionals to connect with users looking for
                specific services. All the professionals, though experienced and
                skilled, undergo intensive training modules before being allowed
                to list their services on the platform. Once on the platform,
                our match-making algorithm identifies professionals who are
                closest to the users’ requirements and available at your
                doorstep As Soon as Possible! We’re Determined to take care of
                all the unpredicted Emergencies, and the Predicted ones ;)
                Here’s some pointers you need to know (Terms and Conditions)
                Every Pricing is for basic charges involving cleaning, repair
                and other services! Once service is booked, we will Reach your
                location ASAP, (Max 30 mins). Services are Hourly Billable, and
                will be revised once the problem is inspected and will be
                discussed prior to start of service!
              </p>
            </div>
          </section>
        </main>
      </React.Fragment>
    );
  }
}
