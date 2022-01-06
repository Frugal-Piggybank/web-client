import React, { FC, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Box, FormLabel, HStack, IconButton, Select } from "@chakra-ui/react";
import { GET_CATEGORIES } from "../graphql/queries";
import { Category } from "@scenes/budget/types/Category";
import { FiPlus } from "react-icons/fi";

interface CategorySelectProps {
  currentCategory?: Category;
}

const CategorySelect: FC<CategorySelectProps> = ({ currentCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const { data, loading, error } = useQuery(GET_CATEGORIES);

  useEffect(() => {
    if (!loading && currentCategory) {
      console.log(currentCategory);

      setSelectedCategory(
        data.categories.find((cat: Category) => cat._id === currentCategory._id)
      );
    }
  }, [loading, currentCategory]);

  useEffect(() => {
    console.log(`Selected category: `, selectedCategory);
  }, [selectedCategory]);

  return !loading ? (
    <Box>
      <FormLabel htmlFor="category">Category</FormLabel>
      <HStack>
        <Select placeholder="Select a category" value={selectedCategory?._id}>
          {data.categories.map((cat: Category) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </Select>
        <IconButton
          aria-label="Add Category"
          icon={<FiPlus />}
          colorScheme="teal"
        />
      </HStack>
    </Box>
  ) : (
    <></>
  );
};

export default CategorySelect;
