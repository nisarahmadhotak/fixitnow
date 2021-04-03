import React from "react";

// // getting and organizing all comments

class AllComments extends React.Component {
  render() {
    this.state = {
      counter: 0
    };

    const allcomments = this.props.allcomments.comments.map(comment => {
      return (
        <div key={comment.email}>
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
                    {comment.name}
                  </figcaption>
                </figure>
                <div className="story_text">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    {comment.email}
                  </h3>
                  <p>{comment.message}</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        // <div className="container" key={comment.email}>
        //   <div className="row">
        //     <div className="col-sm-12">
        //       <h6>
        //         <strong>Name:</strong> {comment.name}
        //       </h6>
        //       <h6>
        //         <strong>Email:</strong> {comment.email}
        //       </h6>
        //       <p>
        //         <strong>Message:</strong> {comment.message}
        //       </p>
        //     </div>
        //   </div>
        // </div>
      );
    });
    return <div>{allcomments}</div>;
  }
}

export default AllComments;
