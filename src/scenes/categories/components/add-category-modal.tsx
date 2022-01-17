import React, { FC, useEffect, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import {
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import { Category } from "@scenes/budget/types/Category";
import { UPSERT_CATEGORY } from "../graphql/mutations";
import IconSelectorModal from "./icon-selector-modal";

interface AddCategoryModalProps {
  onNewCategory: any;
}

const AddCategoryModal: FC<AddCategoryModalProps> = ({ onNewCategory }) => {
  const [upsertCategory] = useMutation(UPSERT_CATEGORY);
  const modal = useDisclosure();
  const iconModal = useDisclosure();
  const initialRef = useRef<any>();
  const [categoryToAdd, setCategoryToAdd] = useState<Category>();
  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  const handleNext = () => {
    const value = initialRef.current.value;

    if (!value) {
      setIsInvalid(true);
      return;
    }

    setIsInvalid(false);

    setCategoryToAdd((prevCategory) => ({
      ...prevCategory,
      name: value,
    }));

    iconModal.onOpen();
    modal.onClose();
  };

  const saveCategory = async () => {
    await upsertCategory({
      variables: { category: categoryToAdd },
    });

    onNewCategory();
  };

  useEffect(() => {
    if (categoryToAdd?.icon) {
      saveCategory();
      setCategoryToAdd(undefined);
      iconModal.onClose();
    }
  }, [categoryToAdd]);

  return (
    <>
      <IconButton
        aria-label="Add Category"
        icon={<FiPlus />}
        colorScheme="teal"
        onClick={modal.onOpen}
      />
      <Modal
        initialFocusRef={initialRef}
        isOpen={modal.isOpen}
        onClose={modal.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Choose a name for your category</FormLabel>
              <Input
                ref={initialRef}
                isInvalid={isInvalid}
                placeholder="Category name"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleNext}>
              Next
            </Button>
            <Button onClick={modal.onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <IconSelectorModal
        isOpen={iconModal.isOpen}
        onClose={iconModal.onClose}
        onIconSelection={(iconKey) =>
          setCategoryToAdd((prevCategory) => ({
            ...prevCategory,
            icon: iconKey,
          }))
        }
      />
    </>
  );
};

export default AddCategoryModal;
