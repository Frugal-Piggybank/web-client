import { gql } from "@apollo/client";

export const GET_LINE_ITEM = gql`
  query GetLineItem($id: ID!) {
    lineItem(id: $id) {
      _id
      title
      notes
      date
      amount
    }
  }
`;
