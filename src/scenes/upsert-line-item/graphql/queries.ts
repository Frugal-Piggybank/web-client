import { gql } from "@apollo/client";
import { BASE_CATEGORY } from "@shared/graphql/fragments";
import { BASE_LINE_ITEM } from "@shared/graphql/fragments";

export const GET_LINE_ITEM = gql`
  ${BASE_LINE_ITEM}
  ${BASE_CATEGORY}
  query GetLineItem($id: ID!) {
    lineItem(id: $id) {
      ...BaseLineItem
      category {
        ...BaseCategory
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  ${BASE_CATEGORY}
  query GetCategories {
    categories {
      ...BaseCategory
    }
  }
`;
