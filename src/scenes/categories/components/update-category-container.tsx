import React, { FC, MouseEventHandler } from "react";
import { HStack, IconButton } from "@chakra-ui/react";

import { Category } from "@scenes/budget/types/Category";
import DynamicIcon from "@shared/components/dynamic-icon";
import EditableCategoryName from "./editable-category-name";

interface UpdateCategoryContainerProps {
  category: Category;
  onIconClick: MouseEventHandler<HTMLButtonElement> | undefined;
  onNameChange: ((nextValue: string) => void) | undefined;
  //   onCategoryUpdate: (id: string) => void;
}

const UpdateCategoryContainer: FC<UpdateCategoryContainerProps> = ({
  category,
  onIconClick,
  onNameChange,
}) => {
  return (
    <HStack
      key={category._id}
      height="80px"
      borderWidth="2px"
      borderRadius="md"
      px="2"
    >
      <IconButton
        aria-label="Icon"
        icon={<DynamicIcon iconName={category.icon} />}
        onClick={onIconClick}
      />
      <EditableCategoryName
        categoryName={category.name}
        onNameChange={onNameChange}
      />
    </HStack>
  );
};

export default UpdateCategoryContainer;
