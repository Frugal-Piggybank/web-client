import { gql } from "@apollo/client";

export const DELETE_LINE_ITEM = gql`
  mutation DeleteLineItem($id: ID!) {
    deleteLineItem(id: $id)
  }
`;
