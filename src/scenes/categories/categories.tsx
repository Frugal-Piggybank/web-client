import React, { FC } from "react";
import { useQuery } from "@apollo/client";

import { GET_CATEGORIES } from "@shared/graphql/queries";
import Error from "@shared/components/error";
import Loading from "@shared/components/loading";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { Category } from "@scenes/budget/types/Category";
import EditableCategory from "./components/editable-category";

const Categories: FC = () => {
  const { data, loading, error } = useQuery(GET_CATEGORIES);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  return (
    <SimpleGrid columns={2} spacing={10}>
      {data.categories.map((cat: Category) => (
        <Box key={cat._id} height="80px" bg="tomato">
          <EditableCategory category={cat} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Categories;
