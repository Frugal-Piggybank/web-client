import React, { FC } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { FiCreditCard, FiInfo, FiTrash2 } from "react-icons/fi";

import { formatDateTime } from "@shared/lib/datetime-helpers";
import { LineItem } from "../types/LineItem";
import LineItemNotesPopover from "./line-item-notes-popover";
import DynamicIcon from "@shared/components/dynamic-icon";

interface BudgetContainerItemProps {
  lineItem: LineItem;
  onDelete: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const BudgetContainerItem: FC<BudgetContainerItemProps> = ({
  lineItem,
  onDelete,
}) => {
  const router = useRouter();

  return (
    <Box
      width="100%"
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      cursor="pointer"
      onClick={() => router.push(`/budget/edit/${lineItem._id}`)}
    >
      <Flex justifyContent="space-between">
        <HStack spacing="10">
          {lineItem.category?.icon ? (
            <DynamicIcon iconName={lineItem.category.icon} />
          ) : (
            <Icon as={FiCreditCard} />
          )}

          <Box>
            <Heading fontSize="xl">{lineItem.title}</Heading>
            <Text fontSize="sm">{formatDateTime(lineItem.date)}</Text>
          </Box>
        </HStack>
        <HStack spacing="10">
          <Heading fontSize="xl">${lineItem.amount}</Heading>
          <HStack>
            <LineItemNotesPopover notes={lineItem.notes} />
            <IconButton
              aria-label="Delete"
              icon={<FiTrash2 />}
              onClick={onDelete}
            />
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default BudgetContainerItem;
