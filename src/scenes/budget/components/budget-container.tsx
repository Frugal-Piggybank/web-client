import React, { FC, useState } from "react";
import { VStack, useDisclosure, useToast } from "@chakra-ui/react";
import { ApolloQueryResult, useMutation } from "@apollo/client";

import { LineItem } from "../types/LineItem";
import DeleteAlertDialog from "@shared/components/alert-dialog/delete-alert-dialog";
import BudgetContainerItem from "./budget-container-item";
import useSort from "@shared/hooks/use-sort";
import { DELETE_LINE_ITEM } from "../graphql/mutations";

interface BudgetContainerProps {
  lineItems: LineItem[];
  refetchLineItems: () => Promise<ApolloQueryResult<any>>;
}

const BudgetContainer: FC<BudgetContainerProps> = ({
  lineItems,
  refetchLineItems,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [itemToDelete, setItemToDelete] = useState<LineItem>();
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const { sortedData, ...sortControls } = useSort(lineItems, "date");
  const toast = useToast();
  const [deleteLineItem] = useMutation(DELETE_LINE_ITEM);

  const confirmDeletion = async () => {
    try {
      setIsDeleting(true);
      await deleteLineItem({ variables: { id: itemToDelete?._id } });
      toast({
        title: "Budget deleted.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      refetchLineItems();
    } catch (error) {
      toast({
        title: "Could not delete budget.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

    setIsDeleting(false);
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
              setItemToDelete(lineItem);
              onOpen();
            }}
          />
        ))}
      </VStack>
      <DeleteAlertDialog
        title={itemToDelete?.title ?? ""}
        isOpen={isOpen}
        onClose={cancelDeletion}
        onDelete={confirmDeletion}
        isDeleting={isDeleting}
      >
        Please confirm below if you'd like to delete this item.
      </DeleteAlertDialog>
    </>
  );
};

export default BudgetContainer;
