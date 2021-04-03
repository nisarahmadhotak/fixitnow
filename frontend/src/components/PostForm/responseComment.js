import React from "react";

class ResponseComment extends React.Component {
  render() {
    return (
      <div>
        <section className="section-stories">
          <div className="roww">
            <div className="story">
              <figure className="story_shape">
                <img
                  className="story_image"
                  src="https://images.unsplash.com/photo-1592767213971-1f8e24ffbf77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=763&q=80"
                  alt="gem"
                />
                <figcaption className="story_caption">
                  {this.props.responseName}
                </figcaption>
              </figure>
              <div className="story_text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  {this.props.responseEmail}
                </h3>
                <p>{this.props.responseMessage}</p>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h6>
                <strong>Name:</strong> {this.props.responseName}
              </h6>
              <h6>
                <strong>Email:</strong> {this.props.responseEmail}
              </h6>
              <p>
                <strong>Message:</strong> {this.props.responseMessage}
              </p>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default ResponseComment;
