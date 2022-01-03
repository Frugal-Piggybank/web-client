import { gql } from "@apollo/client";

export const GET_LINE_ITEMS = gql`
  query GetLineItems {
    lineItems {
      _id
      title
      description
      date
      amount
    }
  }
`;
