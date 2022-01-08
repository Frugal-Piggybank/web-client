import React, { FC, useRef, useState } from "react";
import {
  AlertDialog as ChakraAlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

interface DeleteAlertDialogProps {
  title: string;
  isOpen: boolean;
  isDeleting: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteAlertDialog: FC<DeleteAlertDialogProps> = ({
  title,
  isOpen,
  isDeleting,
  onClose,
  onDelete,
}) => {
  const cancelRef = useRef();

  return (
    <ChakraAlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef.current}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete {title}
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button
              ref={cancelRef.current}
              onClick={onClose}
              isDisabled={isDeleting}
            >
              Cancel
            </Button>
            <Button
              colorScheme="red"
              onClick={onDelete}
              ml={3}
              isLoading={isDeleting}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </ChakraAlertDialog>
  );
};

export default DeleteAlertDialog;
