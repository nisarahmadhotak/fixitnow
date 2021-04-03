import React, { Component } from "react";
import { AuthenticationConsumer } from "./autheticationapi";
import FileUpload from "../fileUpload/fileUpload";

export default class ProfilePage extends Component {
  render() {
    return (
      <AuthenticationConsumer>
        {value => {
          const { imgUrl, name, email } = value;
          const {
            handleProfileUpdateChange,
            handleProfilePostSubmit,
            handleProfileFileChange,
            handleProfileUpdateSubmit
          } = value;
          //   //sending the data that the user updated in his profile page

          if (value.isLogged) {
            return (
              <div className="ProfilePage container">
                <div className="row">
                  <div className="col-10 mx-auto">
                    <section className="section-book">
                      <div className="roww">
                        <div className="book">
                          <div className="book_form">
                            <div className="u-margin-bottom-medium">
                              <h2 className="heading-secondary">Profile</h2>
                            </div>

                            <form
                              action="#"
                              className="form"
                              onSubmit={handleProfileUpdateSubmit}
                            >
                              <div className="form_group">
                                <FileUpload
                                  handleProfilePostSubmit={
                                    handleProfilePostSubmit
                                  }
                                  handleProfileFileChange={
                                    handleProfileFileChange
                                  }
                                  imgUrl={imgUrl}
                                />
                              </div>
                              <div className="form_group">
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  className="form_input"
                                  placeholder="name"
                                  onChange={handleProfileUpdateChange}
                                  value={name}
                                  required
                                />
                                <label
                                  for="name"
                                  className="form_label paragraph"
                                >
                                  Name
                                </label>
                              </div>

                              <div className="form_group">
                                <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  value={email}
                                  onChange={handleProfileUpdateChange}
                                  className="form_input"
                                  placeholder="Email address"
                                  required
                                />
                                <label
                                  for="email"
                                  className="form_label paragraph"
                                >
                                  Email address
                                </label>
                              </div>

                              <div className="form_group">
                                <input
                                  type="submit"
                                  value="Update"
                                  className="btn btn-green"
                                />
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            );
          }
          if (!value.isLogged) {
            this.props.history.push("/login");
          }
        }}
      </AuthenticationConsumer>
    );
  }
}
