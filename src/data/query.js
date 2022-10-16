import { gql } from '@apollo/client';

export const GET_CATEGORY = gql`
  query ($arg: CategoryInput) {
    category(input: $arg) {
      name
      products {
        id
        name
        inStock
        gallery
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query ($id: String!) {
    product(id: $id) {
      id
      name
      gallery
      description
      inStock
      brand
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }

      prices {
        currency {
          label
          symbol
        }
        amount
      }
    }
  }
`;
