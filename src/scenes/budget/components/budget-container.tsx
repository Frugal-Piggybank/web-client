import React, { FC, useState } from "react";
import { VStack, useDisclosure } from "@chakra-ui/react";
import { LineItem } from "../types/LineItem";
import ConfirmationModal from "@shared/components/confirmation-modal/confirmation-modal";
import BudgetContainerItem from "./budget-container-item";
import useSort from "@shared/hooks/use-sort";

interface BudgetContainerProps {
  lineItems: LineItem[];
}

const BudgetContainer: FC<BudgetContainerProps> = ({ lineItems }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [itemToDelete, setItemToDelete] = useState<string>();
  const { sortedData, ...sortControls } = useSort(lineItems, "date");

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
        {sortedData.map((lineItem: LineItem) => (
          <BudgetContainerItem
            key={lineItem._id}
            lineItem={lineItem}
            onDelete={() => {
              setItemToDelete(lineItem._id);
              onOpen();
            }}
          />
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
