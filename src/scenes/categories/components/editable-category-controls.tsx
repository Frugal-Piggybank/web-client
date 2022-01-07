import React, { FC } from "react";
import {
  ButtonGroup,
  Flex,
  IconButton,
  useEditableControls,
} from "@chakra-ui/react";
import { FiCheck, FiX } from "react-icons/fi";
import { EditIcon } from "@chakra-ui/icons";

interface EditableCategoryControlsProps {}

const EditableCategoryControls: FC<EditableCategoryControlsProps> = ({}) => {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls();

  return isEditing ? (
    <ButtonGroup justifyContent="center" size="sm">
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
    <Flex justifyContent="center">
      <IconButton
        aria-label="Edit"
        size="sm"
        icon={<EditIcon />}
        {...getEditButtonProps()}
      />
    </Flex>
  );
};

export default EditableCategoryControls;
