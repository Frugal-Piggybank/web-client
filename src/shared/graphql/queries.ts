import { gql } from "@apollo/client";
import { BASE_CATEGORY } from "./fragments";

export const GET_CATEGORIES = gql`
  ${BASE_CATEGORY}
  query GetCategories {
    categories {
      ...BaseCategory
    }
  }
`;
