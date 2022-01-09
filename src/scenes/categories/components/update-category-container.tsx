import React, { FC, MouseEventHandler } from "react";
import { HStack, IconButton } from "@chakra-ui/react";

import { Category } from "@scenes/budget/types/Category";
import DynamicIcon from "@shared/components/dynamic-icon";
import EditableCategoryName from "./editable-category-name";

interface UpdateCategoryContainerProps {
  category: Category;
  onIconClick: MouseEventHandler<HTMLButtonElement> | undefined;
  onNameEdit: () => void;
  onNameChange: ((nextValue: string) => void) | undefined;
}

const UpdateCategoryContainer: FC<UpdateCategoryContainerProps> = ({
  category,
  onIconClick,
  onNameEdit,
  onNameChange,
}) => {
  return (
    <HStack height="80px" borderWidth="2px" borderRadius="md" px="2">
      <IconButton
        aria-label="Icon"
        icon={<DynamicIcon iconName={category.icon} />}
        onClick={onIconClick}
      />
      <EditableCategoryName
        categoryName={category.name}
        onEdit={onNameEdit}
        onNameChange={onNameChange}
      />
    </HStack>
  );
};

export default UpdateCategoryContainer;
