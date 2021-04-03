import React, { Component } from "react";
import axios from "axios";
export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  render() {
    const handleChange = e => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
      console.log(e.value);
    };

    const handleSubmit = async e => {
      e.preventDefault();
      console.log("contact submit  called");

      try {
        const { email, name, message } = this.state;
        const data = {
          name,
          email,
          message
        };
        let res = await axios({
          method: "post",
          url: `${process.env.REACT_APP_BACKEND_URL}/contacts`,
          data: data
        });

        if (res.data) {
          this.setState({
            name: "",
            email: "",
            message: ""
          });
          console.log("data submitted successfully");
        }
      } catch (error) {
        console.log(error.response); // this is the main part. Use the response property from the error object

        return error.response;
      }
    };
    const { name, email, message } = this.state;

    return (
      <div>
        <section className="contact">
          <div className="containers">
            <div className="contactInfo">
              <div className="box">
                <div className="icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div className="text">
                  <h3 className="header-tertiary-2">Get in Touch</h3>
                  <p className="paragraph-2">
                    Become a register professional with us. Input the details
                    and we will get in touch with you
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div className="text">
                  <h3 className="header-tertiary-2">Email</h3>
                  <p className="paragraph-2">fixitnow.com</p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <i class="fab fa-facebook"></i>
                </div>
                <div className="text">
                  <h3 className="header-tertiary-2">Facebook</h3>
                  <p className="paragraph-2">facebook.com/fixitnow</p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <i class="fab fa-whatsapp"></i>
                </div>
                <div className="text">
                  <h3 className="header-tertiary-2">Whatsapp</h3>
                  <p className="paragraph-2">+9352656255</p>
                </div>
              </div>
            </div>

            <section className="section-book">
              <div className="roww">
                <div className="book">
                  <div className="book_form_contact">
                    <form action="#" className="form" onSubmit={handleSubmit}>
                      <div className="u-margin-bottom-medium">
                        <h2 className="heading-secondary">Register Here</h2>
                      </div>

                      <div className="form_group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form_input"
                          placeholder="Full name"
                          value={name}
                          onChange={handleChange}
                          required
                        />
                        <label for="name" className="form_label paragraph">
                          Full Name
                        </label>
                      </div>

                      <div className="form_group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form_input"
                          placeholder="Email address"
                          value={email}
                          onChange={handleChange}
                          required
                        />
                        <label for="email" className="form_label paragraph">
                          Email address
                        </label>
                      </div>

                      <div className="form_group">
                        <textarea
                          type="text"
                          name="message"
                          id="message"
                          className="form_input"
                          placeholder="Write your query..."
                          rows="5"
                          value={message}
                          onChange={handleChange}
                          required
                        ></textarea>
                        <label for="message" className="form_label paragraph">
                          Message
                        </label>
                      </div>

                      <div className="form_group">
                        <input
                          type="submit"
                          value="Submit"
                          className="btn btn-green"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    );
  }
}
