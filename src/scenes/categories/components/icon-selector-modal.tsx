import React, { FC, MouseEventHandler } from "react";
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

interface CustomIconProps {
  iconKey: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const CustomIcon: FC<CustomIconProps> = ({ iconKey, onClick }) => {
  const keyAsIcon = iconKey as keyof typeof FeatherIcons;

  const FiIcon = FeatherIcons[keyAsIcon];

  return (
    <IconButton
      onClick={onClick}
      m="1"
      variant="outline"
      colorScheme="teal"
      aria-label="Icon"
      icon={<FiIcon />}
    />
  );
};

interface IconSelectorModalProps {
  onClose: () => void;
  isOpen: boolean;
  onIconSelection: (iconKey: string) => void;
}

const IconSelectorModal: FC<IconSelectorModalProps> = ({
  onClose,
  isOpen,
  onIconSelection,
}) => {
  const iconKeys = Object.keys(FeatherIcons);

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading size="sm">Choose an icon for your category</Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex wrap="wrap" justifyContent="space-between">
            {iconKeys.map((iconKey) => (
              <CustomIcon
                key={iconKey}
                onClick={() => onIconSelection(iconKey)}
                iconKey={iconKey}
              />
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
