import React, { Component } from "react";
import Query from "../../components/Query";
import ARTICLES_QUERY from "../../queries/article/articles";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTopControler from "../ReusableComponents/Scroll/scrollTop";
import BlogPagination from "../Pagination/blogPagination";

export default class BlogMain extends Component {
  componentDidMount = () => {
    console.log(this.props);
    window.scrollTo(0, 0);

    AOS.init();
  };
  state = {
    search: "",
    loading: false,
    posts: [],
    currentPosts: [],
    currentPage: 1,
    postsPerPage: 2
  };
  updateSearch = e => {
    this.setState({ search: e.target.value.substr(0, 20) });
  };
  paginatePosts = pageNumber => {
    return this.setState({
      currentPage: pageNumber
    });
  };

  render() {
    //Pagination
    // get current post
    const indexOfLastProduct = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - this.state.postsPerPage;

    return (
      <main>
        <ScrollToTopControler />

        <section className="container">
          <div className="row">
            <Query query={ARTICLES_QUERY}>
              {({ data: { articles } }) => {
                const currentPosts = articles.slice(
                  indexOfFirstProduct,
                  indexOfLastProduct
                );
                let filteredArticles = articles.filter(article => {
                  return (
                    article.title
                      .toLowerCase()
                      .indexOf(this.state.search.toLowerCase()) !== -1
                  );
                });
                if (!this.state.search) {
                  return (
                    <div className="col-md-8 mx-auto col-10">
                      <div className="form_group">
                        <input
                          style={{
                            width: "92%",
                            marginLeft: "1.85rem",
                            marginTop: "1rem"
                          }}
                          className="form_input"
                          type="text"
                          id="search"
                          name="search"
                          placeholder="Search"
                          value={this.state.search}
                          onChange={this.updateSearch}
                        />
                      </div>

                      <div className="site-content">
                        {currentPosts.map(article => {
                          return (
                            <div className="posts">
                              <div
                                className="post-content"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                              >
                                <div className="post-image">
                                  <div>
                                    <Link
                                      to={`/article/${article.id}`}
                                      className="btn-text"
                                    >
                                      <img
                                        style={{
                                          height: "30rem",
                                          width: "100%"
                                        }}
                                        className="img"
                                        src={
                                          process.env.REACT_APP_BACKEND_URL +
                                          article.image[0].url
                                        }
                                        alt={article.image[0].url}
                                      />
                                    </Link>
                                  </div>
                                  <div className="post-info flex-row">
                                    <span className="text-gray ">
                                      <i className="fas fa-user text-gray"></i>
                                      &nbsp;&nbsp;Admin
                                    </span>
                                    <span className="text-gray ">
                                      <i className="fas fa-calendar-alt"></i>
                                      &nbsp;&nbsp;{article.published_at}
                                    </span>
                                  </div>
                                </div>
                                <div className="post-title">
                                  <Link to={`/article/${article.id}`}>
                                    <span className="blog-link header-tertiary-1">
                                      {article.title}
                                    </span>
                                  </Link>
                                  <p className="paragraph-1">
                                    {article.content}
                                  </p>
                                  <Link
                                    to={`/article/${article.id}`}
                                    className="btn-text"
                                  >
                                    Read more &rarr;
                                  </Link>
                                </div>
                              </div>
                            </div>
                          );
                        })}

                        <BlogPagination
                          postsPerPage={this.state.postsPerPage}
                          totalPosts={articles.length}
                          paginatePosts={this.paginatePosts}
                        />
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="col-md-8 mx-auto col-10">
                      <div className="form_group">
                        <input
                          style={{
                            width: "92%",
                            marginLeft: "1.85rem",
                            marginTop: "1rem"
                          }}
                          className="form_input"
                          type="text"
                          id="search"
                          name="search"
                          placeholder="Search"
                          value={this.state.search}
                          onChange={this.updateSearch}
                        />
                      </div>

                      <div className="site-content">
                        {filteredArticles.map(article => {
                          return (
                            <div className="posts">
                              <div
                                className="post-content"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                              >
                                <div className="post-image">
                                  <div>
                                    <Link
                                      to={`/article/${article.id}`}
                                      className="btn-text"
                                    >
                                      <img
                                        style={{
                                          height: "30rem",
                                          width: "100%"
                                        }}
                                        className="img"
                                        src={
                                          process.env.REACT_APP_BACKEND_URL +
                                          article.image[0].url
                                        }
                                        alt={article.image[0].url}
                                      />
                                    </Link>
                                  </div>
                                  <div className="post-info flex-row">
                                    <span className="text-gray">
                                      <i className="fas fa-user text-gray"></i>
                                      &nbsp;&nbsp;Admin
                                    </span>
                                    <span className="text-gray">
                                      <i className="fas fa-calendar-alt"></i>
                                      &nbsp;&nbsp;January 14, 2019
                                    </span>
                                  </div>
                                </div>
                                <div className="post-title">
                                  <Link to={`/article/${article.id}`}>
                                    <span className="blog-link header-tertiary-1">
                                      {article.title}
                                    </span>
                                  </Link>
                                  <p className="paragraph-1">
                                    {article.content}
                                  </p>
                                  <Link
                                    to={`/article/${article.id}`}
                                    className="btn-text"
                                  >
                                    Read more &rarr;
                                  </Link>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
              }}
            </Query>
            <div className="col-md-4 mx-auto col-10 site-contents">
              <aside className="sidebar "></aside>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
