import gql from "graphql-tag";

export const UPSERT_LINE_ITEM = gql`
  mutation UpsertLineItem($lineItem: UpsertLineItemInput!) {
    upsertLineItem(lineItem: $lineItem) {
      title
    }
  }
`;
