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
  categoryName: string | undefined;
  onNameChange: ((nextValue: string) => void) | undefined;
  onEdit: () => void;
}

const EditableCategoryName: FC<EditableCategoryNameProps> = ({
  categoryName,
  onNameChange,
  onEdit,
}) => {
  return (
    <>
      <Editable
        defaultValue={categoryName}
        fontSize="2xl"
        isPreviewFocusable={false}
        width="100%"
        onChange={onEdit}
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
