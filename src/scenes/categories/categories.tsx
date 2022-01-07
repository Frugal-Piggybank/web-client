import React, { FC } from "react";
import { useQuery } from "@apollo/client";

import { GET_CATEGORIES } from "@shared/graphql/queries";
import Error from "@shared/components/error";
import Loading from "@shared/components/loading";
import { HStack, IconButton, SimpleGrid } from "@chakra-ui/react";
import { Category } from "@scenes/budget/types/Category";
import EditableCategory from "./components/editable-category";
import DynamicIcon from "@shared/components/dynamic-icon/dynamic-icon";

const Categories: FC = () => {
  const { data, loading, error } = useQuery(GET_CATEGORIES);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  return (
    <SimpleGrid columns={2} spacing={10}>
      {data.categories.map((cat: Category) => (
        <HStack key={cat._id} height="80px" bg="tomato" px="2">
          <IconButton
            aria-label="Icon"
            icon={<DynamicIcon iconName={cat.icon} />}
          />
          <EditableCategory category={cat} />
        </HStack>
      ))}
    </SimpleGrid>
  );
};

export default Categories;
