import React, { FC } from "react";
import { Category } from "@scenes/budget/types/Category";
import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
} from "@chakra-ui/react";
import EditableCategoryControls from "./editable-category-controls";

interface EditableCategoryProps {
  category: Category;
}

const EditableCategory: FC<EditableCategoryProps> = ({ category }) => {
  return (
    <>
      <Editable
        defaultValue={category.name}
        fontSize="2xl"
        isPreviewFocusable={false}
        width="100%"
        // onEdit={() => handleEdit()}
      >
        <Flex justifyContent="space-between">
          <EditablePreview />
          <EditableInput paddingLeft="2" />
          <EditableCategoryControls />
        </Flex>
      </Editable>
    </>
  );
};

export default EditableCategory;
