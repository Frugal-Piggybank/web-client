import React, { FC } from "react";
import {
  Button,
  Flex,
  Heading,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import * as FeatherIcons from "react-icons/fi";

const CustomIcon: FC<{ iconKey: string }> = ({ iconKey }) => {
  const keyAsIcon = iconKey as keyof typeof FeatherIcons;

  const FiIcon = FeatherIcons[keyAsIcon];

  return (
    <IconButton
      m="1"
      variant="outline"
      colorScheme="teal"
      aria-label="Icon"
      icon={<FiIcon />}
    />
  );
};

const IconSelectorModal: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const iconKeys = Object.keys(FeatherIcons);

  return (
    <Modal onClose={onClose} isOpen={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading size="sm">Choose an icon for your category</Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex wrap="wrap" justifyContent="space-between">
            {iconKeys.map((iconKey) => (
              <CustomIcon key={iconKey} iconKey={iconKey} />
            ))}
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default IconSelectorModal;
