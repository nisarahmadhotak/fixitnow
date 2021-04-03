import gql from "graphql-tag";

const CATEGORIES_QUERY = gql`
  {
    categories {
      name
      id
    }
  }
`;

export default CATEGORIES_QUERY;
