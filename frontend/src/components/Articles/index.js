import React from "react";
import { Link } from "react-router-dom";

class Articles extends React.Component {
  state = {
    search: ""
  };
  updateSearch = e => {
    this.setState({ search: e.target.value.substr(0, 20) });
  };
  render() {
    let filteredArticles = this.props.articles.filter(article => {
      return (
        article.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });
    return (
      <div>
        <div className="container">
          <label htmlFor="search">
            <strong className="font-weight-bold"> Search: </strong>
          </label>
          <input
            className="form-control"
            type="text"
            id="search"
            value={this.state.search}
            onChange={this.updateSearch}
          />
          <div className="row ">
            {filteredArticles.map(article => {
              return (
                <div key={article.id} className="col-md-6 mb-4">
                  <Link to={`/article/${article.id}`}>
                    <h2 className="text-bright">{article.title}</h2>

                    <div>
                      <img
                        style={{ height: "30rem", width: "40rem" }}
                        className="img-thumbnail img-fluid"
                        src={
                          process.env.REACT_APP_BACKEND_URL +
                          article.image[0].url
                        }
                        alt={article.image[0].url}
                      />
                    </div>
                  </Link>
                  <p className="uk-text-light">{article.content}</p>
                  <Link
                    className="uk-button-link"
                    to={`/article/${article.id}`}
                  >
                    Read More...
                  </Link>
                </div>
              );
            })}
            ;
          </div>
        </div>
      </div>
    );
  }
}

export default Articles;
