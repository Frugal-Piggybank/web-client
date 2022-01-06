import { gql } from "@apollo/client";
import { BASE_LINE_ITEM } from "@shared/graphql/fragments";

export const GET_LINE_ITEM = gql`
  ${BASE_LINE_ITEM}
  query GetLineItem($id: ID!) {
    lineItem(id: $id) {
      ...BaseLineItem
      category {
        name
      }
    }
  }
`;
