import React, { FC } from "react";
import { Category } from "@scenes/budget/types/Category";
import {
  Editable,
  EditableInput,
  EditablePreview,
  useEditableControls,
} from "@chakra-ui/react";
import EditableCategoryControls from "./editable-category-controls";

interface EditableCategoryProps {
  category: Category;
}

const EditableCategory: FC<EditableCategoryProps> = ({ category }) => {
  return (
    <Editable
      defaultValue={category.name}
      fontSize="2xl"
      isPreviewFocusable={false}
      textAlign="center"
    >
      <EditablePreview />
      <EditableInput />
      <EditableCategoryControls />
    </Editable>
  );
};

export default EditableCategory;
