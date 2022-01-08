import React, { FC } from "react";
import { Category } from "@scenes/budget/types/Category";
import {
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
} from "@chakra-ui/react";
import EditableControls from "@shared/components/editable-controls";

interface EditableCategoryNameProps {
  categoryName: string;
  onNameChange: ((nextValue: string) => void) | undefined;
}

const EditableCategoryName: FC<EditableCategoryNameProps> = ({
  categoryName,
  onNameChange,
}) => {
  return (
    <>
      <Editable
        defaultValue={categoryName}
        fontSize="2xl"
        isPreviewFocusable={false}
        width="100%"
        onSubmit={onNameChange}
      >
        <Flex justifyContent="space-between">
          <EditablePreview />
          <EditableInput paddingLeft="2" />
          <EditableControls />
        </Flex>
      </Editable>
    </>
  );
};

export default EditableCategoryName;
