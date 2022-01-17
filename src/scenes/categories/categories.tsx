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
import AddCategoryModal from "./components/add-category-modal";

const Categories: FC = () => {
  const { data, loading, error, refetch } = useQuery(GET_CATEGORIES);
  const [upsertCategory] = useMutation(UPSERT_CATEGORY);
  const [categoryToUpdate, setCategoryToUpdate] = useState<Category>();
  const [selectedId, setSelectedId] = useState<string>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  useEffect(() => {
    if (categoryToUpdate?._id) saveCategoryUpdate();
  }, [categoryToUpdate]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  const saveCategoryUpdate = async () => {
    onClose();

    try {
      //TODO: use category returned from mutation instead of refetching
      const { data } = await upsertCategory({
        variables: { category: categoryToUpdate },
      });

      refetch();
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
  };

  return (
    <>
      <SimpleGrid columns={2} spacing={10}>
        {data.categories.map((cat: Category) => (
          <UpdateCategoryContainer
            key={cat._id}
            category={cat}
            onIconClick={() => {
              setSelectedId(cat._id);
              onOpen();
            }}
            onNameEdit={() => setSelectedId(cat._id)}
            onNameChange={(name) =>
              setCategoryToUpdate({
                _id: selectedId,
                name,
              })
            }
          />
        ))}
      </SimpleGrid>
      <AddCategoryModal onNewCategory={() => refetch()} />
      <IconSelectorModal
        isOpen={isOpen}
        onClose={onClose}
        onIconSelection={(iconKey) =>
          setCategoryToUpdate({
            _id: selectedId,
            icon: iconKey,
          })
        }
      />
    </>
  );
};

export default Categories;
