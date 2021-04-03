import gql from "graphql-tag";

// all articles for that one category
const CATEGORY_QUERY = gql`
  query Category($id: ID!) {
    category(id: $id) {
      name
      articles {
        id
        title
        content
        image {
          url
        }
        category {
          id
          name
        }
      }
    }
  }
`;

export default CATEGORY_QUERY;
