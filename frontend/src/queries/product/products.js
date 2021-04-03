import gql from "graphql-tag";

const PRODUCT_QUERY = gql`
  {
    products {
      title
    }
  }
`;

export default PRODUCT_QUERY;
