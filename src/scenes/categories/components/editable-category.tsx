import React, { FC } from "react";
import { Category } from "@scenes/budget/types/Category";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react";
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
        textAlign="center"
        // onEdit={() => handleEdit()}
      >
        <EditablePreview />
        <EditableInput />
        <EditableCategoryControls />
      </Editable>
    </>
  );
};

export default EditableCategory;
