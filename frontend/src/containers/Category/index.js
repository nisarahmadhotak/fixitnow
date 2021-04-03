import React from "react";
import { useParams } from "react-router-dom";
import Query from "../../components/Query";
import { Link } from "react-router-dom";

import CATEGORY_QUERY from "../../queries/category/articles";

const Category = () => {
  let { id } = useParams();

  return (
    <Query query={CATEGORY_QUERY} id={id}>
      {({ data: { category } }) => {
        return (
          <div>
            <div className="container">
              <div className="row ">
                {category.articles.map(category => {
                  return (
                    <div className="col-md-6 mb-4">
                      <h1>{category.title}</h1>

                      <div>
                        <img
                          className=" img-thumbnail img-fluid"
                          data-src={
                            process.env.REACT_APP_BACKEND_URL +
                            category.image[0].url
                          }
                          alt={category.image[0].url}
                        />
                      </div>

                      <p className="lead">{category.content}</p>
                      <Link
                        className="uk-button-link"
                        to={`/article/${category.id}`}
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
      }}
    </Query>
  );
};

export default Category;
