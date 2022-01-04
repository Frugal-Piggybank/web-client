import { gql } from "@apollo/client";

export const GET_LINE_ITEMS = gql`
  query GetLineItems {
    lineItems {
      _id
      title
      notes
      date
      amount
    }
  }
`;

export const GET_LINE_ITEMS_BY_DATE = gql`
  query GetLineItemsByDate($start: Date!, $end: Date) {
    lineItemsByDate(start: $start, end: $end) {
      _id
      title
      notes
      date
      amount
    }
  }
`;
