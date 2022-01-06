import { gql } from "@apollo/client";
import { BASE_CATEGORY, BASE_LINE_ITEM } from "@shared/graphql/fragments";

export const GET_LINE_ITEMS = gql`
  ${BASE_LINE_ITEM}
  ${BASE_CATEGORY}
  query GetLineItems {
    lineItems {
      ...BaseLineItem
      category {
        ...BaseCategory
      }
    }
  }
`;

export const GET_LINE_ITEMS_BY_DATE = gql`
  ${BASE_LINE_ITEM}
  ${BASE_CATEGORY}
  query GetLineItemsByDate($start: Date!, $end: Date) {
    lineItemsByDate(start: $start, end: $end) {
      ...BaseLineItem
      category {
        ...BaseCategory
      }
    }
  }
`;
