import { gql } from "@apollo/client";

export const UPSERT_CATEGORY = gql`
  mutation UpsertCategory($category: UpsertCategoryInput!) {
    upsertCategory(category: $category) {
      name
    }
  }
`;
