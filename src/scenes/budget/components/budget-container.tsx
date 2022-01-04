import React, { FC, useState } from "react";
import {
  Box,
  Heading,
  VStack,
  Text,
  Flex,
  Icon,
  HStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FiCreditCard, FiTrash2 } from "react-icons/fi";
import { LineItem } from "../types/LineItem";
import { formatDateTime } from "@shared/lib/datetime-helpers";
import ConfirmationModal from "@shared/components/confirmation-modal/confirmation-modal";

interface BudgetContainerProps {
  lineItems: LineItem[];
}

const BudgetContainer: FC<BudgetContainerProps> = ({ lineItems }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [itemToDelete, setItemToDelete] = useState<string>();

  const confirmDeletion = (id?: string) => {
    alert(`Deleting item: ${itemToDelete}`);
    onClose();
  };

  const cancelDeletion = () => {
    setItemToDelete(undefined);
    onClose();
  };

  return (
    <>
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
                  onClick={() => {
                    setItemToDelete(lineItem._id);
                    onOpen();
                  }} //confirmDeletion(lineItem._id)}
                />
              </HStack>
            </Flex>
          </Box>
        ))}
      </VStack>
      <ConfirmationModal
        isOpen={isOpen}
        onClose={cancelDeletion}
        onConfirm={confirmDeletion}
      >
        Please confirm below if you'd like to delete this item.
      </ConfirmationModal>
    </>
  );
};

export default BudgetContainer;
