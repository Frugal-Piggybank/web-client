import React, { FC } from "react";
import {
  Heading,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

interface LineItemNotesPopoverProps {
  notes: string;
}

const LineItemNotesPopover: FC<LineItemNotesPopoverProps> = ({ notes }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          onClick={(e) => e.stopPropagation()}
          aria-label="Notes"
          icon={<FiInfo />}
          color="blue.300"
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          <Heading size="sm">Notes</Heading>
        </PopoverHeader>
        <PopoverBody>{notes}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default LineItemNotesPopover;
