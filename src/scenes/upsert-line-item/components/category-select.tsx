import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { Box, FormLabel, HStack, IconButton, Select } from "@chakra-ui/react";
import { Category } from "@scenes/budget/types/Category";
import { FiPlus } from "react-icons/fi";
import { useRouter } from "next/router";

interface CategorySelectProps {
  categories: Category[];
  currentCategoryId?: string;
  onSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const CategorySelect: FC<CategorySelectProps> = ({
  categories,
  currentCategoryId,
  onSelect,
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    if (currentCategoryId) {
      setSelectedCategoryId(
        categories.find((cat: Category) => cat._id === currentCategoryId)?._id
      );
    }
  }, [currentCategoryId]);

  return (
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
          {categories?.map((cat: Category) => (
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
  );
};

export default CategorySelect;
