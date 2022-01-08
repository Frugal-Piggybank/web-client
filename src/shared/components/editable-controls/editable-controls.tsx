import React, { FC } from "react";
import {
  ButtonGroup,
  Flex,
  IconButton,
  useEditableControls,
} from "@chakra-ui/react";
import { FiCheck, FiX } from "react-icons/fi";
import { EditIcon } from "@chakra-ui/icons";

interface EditableControlsProps {}

const EditableControls: FC<EditableControlsProps> = ({}) => {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls();

  return isEditing ? (
    <ButtonGroup>
      <IconButton
        aria-label="Submit"
        icon={<FiCheck />}
        {...getSubmitButtonProps()}
      />
      <IconButton
        aria-label="Cancel"
        icon={<FiX />}
        {...getCancelButtonProps()}
      />
    </ButtonGroup>
  ) : (
    <IconButton
      aria-label="Edit"
      icon={<EditIcon />}
      {...getEditButtonProps()}
    />
  );
};

export default EditableControls;
