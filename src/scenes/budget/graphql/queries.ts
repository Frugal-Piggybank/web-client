import { gql } from "@apollo/client";
import { BASE_LINE_ITEM } from "@shared/graphql/fragments";

export const GET_LINE_ITEMS = gql`
  ${BASE_LINE_ITEM}
  query GetLineItems {
    lineItems {
      ...BaseLineItem
      category {
        name
      }
    }
  }
`;

export const GET_LINE_ITEMS_BY_DATE = gql`
  ${BASE_LINE_ITEM}
  query GetLineItemsByDate($start: Date!, $end: Date) {
    lineItemsByDate(start: $start, end: $end) {
      ...BaseLineItem
      category {
        name
      }
    }
  }
`;
