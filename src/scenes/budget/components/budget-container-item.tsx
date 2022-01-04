import React, { FC } from "react";
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

interface BudgetContainerItemProps {
  lineItem: LineItem;
  onDelete: () => void;
}

const BudgetContainerItem: FC<BudgetContainerItemProps> = ({
  lineItem,
  onDelete,
}) => {
  return (
    <Box
      width="100%"
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      cursor="pointer"
    >
      <Flex justifyContent="space-between">
        <HStack spacing="10">
          <Icon as={FiCreditCard} />
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
