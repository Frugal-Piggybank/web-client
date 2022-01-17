import { gql } from "@apollo/client";
import { BASE_CATEGORY } from "@shared/graphql/fragments";
import { BASE_LINE_ITEM } from "@shared/graphql/fragments";

export const GET_EDIT_LINE_ITEM = gql`
  ${BASE_LINE_ITEM}
  ${BASE_CATEGORY}
  query GetEditLineItem($id: ID!) {
    lineItem(id: $id) {
      ...BaseLineItem
      category {
        ...BaseCategory
      }
    }
    categories {
      ...BaseCategory
    }
  }
`;
