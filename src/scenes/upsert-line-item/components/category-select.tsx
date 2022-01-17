import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Box, FormLabel, HStack, IconButton, Select } from "@chakra-ui/react";
import { GET_CATEGORIES } from "@shared/graphql/queries";
import { Category } from "@scenes/budget/types/Category";
import { FiPlus } from "react-icons/fi";
import { useRouter } from "next/router";

interface CategorySelectProps {
  currentCategoryId?: string;
  onSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const CategorySelect: FC<CategorySelectProps> = ({
  currentCategoryId,
  onSelect,
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>();
  const { data, loading } = useQuery(GET_CATEGORIES);
  const router = useRouter();

  useEffect(() => {
    if (!loading && currentCategoryId) {
      setSelectedCategoryId(
        data.categories.find((cat: Category) => cat._id === currentCategoryId)
          ?._id
      );
    }
  }, [loading, currentCategoryId]);

  return !loading ? (
    <Box>
      <FormLabel htmlFor="category">Category</FormLabel>
      <HStack>
        <Select
          name="category"
          placeholder="Select a category"
          value={selectedCategoryId}
          onChange={(e) => {
            setSelectedCategoryId(e.currentTarget.value);
            onSelect(e);
          }}
        >
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
          onClick={() => router.push("/categories")}
        />
      </HStack>
    </Box>
  ) : (
    <></>
  );
};

export default CategorySelect;
