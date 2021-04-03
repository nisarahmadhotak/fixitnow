import gql from "graphql-tag";

const PRODUCT_QUERY = gql`
  query Products($id: ID!) {
    product(id: $id) {
      id
      title
      img {
        url
      }
      price
      count
      company
      info
      inCart
      total
    }
  }
`;

export default PRODUCT_QUERY;
