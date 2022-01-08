import { gql } from "@apollo/client";

export const BASE_LINE_ITEM = gql`
  fragment BaseLineItem on LineItem {
    _id
    title
    notes
    date
    amount
  }
`;

export const BASE_CATEGORY = gql`
  fragment BaseCategory on Category {
    _id
    name
    icon
  }
`;
