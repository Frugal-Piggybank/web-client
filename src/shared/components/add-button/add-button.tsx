import { AddIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React from "react";

const AddButton = () => (
  <IconButton
    colorScheme="teal"
    aria-label="Add"
    size="lg"
    icon={<AddIcon />}
  />
);

export default AddButton;
