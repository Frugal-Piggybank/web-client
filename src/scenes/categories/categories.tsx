import React, { FC, useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { SimpleGrid, useToast, useDisclosure } from "@chakra-ui/react";

import Error from "@shared/components/error";
import Loading from "@shared/components/loading";
import { Category } from "@scenes/budget/types/Category";
import IconSelectorModal from "./components/icon-selector-modal";
import UpdateCategoryContainer from "./components/update-category-container";
import { UPSERT_CATEGORY } from "./graphql/mutations";
import { GET_CATEGORIES } from "@shared/graphql/queries";

const Categories: FC = () => {
  const { data, loading, error } = useQuery(GET_CATEGORIES);
  const [upsertCategory] = useMutation(UPSERT_CATEGORY);
  const [categoryToUpdate, setCategoryToUpdate] = useState<any>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  useEffect(() => {
    console.log(`Category to update changed`, categoryToUpdate);

    if (categoryToUpdate) saveCategoryUpdate();
  }, [categoryToUpdate]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  const handleModalIconSelection = (iconKey: string) => {
    setCategoryToUpdate((prevCategory: Category) => ({
      ...prevCategory,
      icon: iconKey,
    }));

    onClose();
  };

  const saveCategoryUpdate = async () => {
    if (!categoryToUpdate?._id) {
      console.log(`No category to update`, categoryToUpdate);
      return;
    }

    try {
      await upsertCategory({ variables: { category: categoryToUpdate } });

      toast({
        title: "Category updated successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Category could not be updated",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

    // setCategoryToUpdate(undefined);
  };

  return (
    <>
      <SimpleGrid columns={2} spacing={10}>
        {data.categories.map((cat: Category) => (
          <UpdateCategoryContainer
            key={cat._id}
            category={cat}
            onIconClick={() => {
              setCategoryToUpdate(cat);
              onOpen();
            }}
            onNameChange={(name: string) => {
              setCategoryToUpdate({ ...cat, name });
            }}
          />
        ))}
      </SimpleGrid>
      <IconSelectorModal
        isOpen={isOpen}
        onClose={onClose}
        onIconSelection={handleModalIconSelection}
      />
    </>
  );
};

export default Categories;
