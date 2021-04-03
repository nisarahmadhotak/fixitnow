import React from "react";
import { useParams } from "react-router-dom";
import Query from "../../components/Query";
import ARTICLE_QUERY from "../../queries/article/article";
import PostForm from "../../components/PostForm";
import AllComments from "../../components/PostForm/allComments";
import "../../../src/index.css";

const Article = () => {
  let { id } = useParams();

  return (
    <Query query={ARTICLE_QUERY} id={id}>
      {({ data: { article } }) => {
        const articleId = article.id;
        const allcomments = article;
        return (
          <div className="container">
            <div className="row">
              <h1>{article.title}</h1>

              {/* <p className="paragraph">{article.published_at}</p> */}

              <img
                src={process.env.REACT_APP_BACKEND_URL + article.image[0].url}
                data-srcset={
                  process.env.REACT_APP_BACKEND_URL + article.image[0].url
                }
                style={{
                  width: "97.5%",
                  height: "40rem"
                }}
                alt="Photo"
              />

              <div>
                <p className="paragraph">{article.content}</p>
              </div>
              <div>
                <h2 className="header-tertiary u-margin-top-medium">
                  Comments:
                </h2>
              </div>
              <AllComments allcomments={allcomments} />
              <PostForm articleId={articleId} />
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Article;
