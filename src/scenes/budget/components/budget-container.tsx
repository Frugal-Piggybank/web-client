import React, { FC } from "react";
import {
  Box,
  Heading,
  VStack,
  Text,
  Flex,
  Icon,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { FiCreditCard, FiTrash2 } from "react-icons/fi";
import { LineItem } from "../types/LineItem";
import { formatDateTime } from "@shared/lib/datetime-helpers";

interface BudgetContainerProps {
  lineItems: LineItem[];
}

const BudgetContainer: FC<BudgetContainerProps> = ({ lineItems }) => {
  const confirmDeletion = (id?: string) => {
    // alert(`Are you sure you want to delete this item?`);
  };

  return (
    <VStack>
      {lineItems.map((lineItem: LineItem) => (
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
              <IconButton
                aria-label="Delete"
                icon={<FiTrash2 />}
                onClick={() => confirmDeletion(lineItem._id)}
              />
            </HStack>
          </Flex>
        </Box>
      ))}
    </VStack>
  );
};

export default BudgetContainer;
