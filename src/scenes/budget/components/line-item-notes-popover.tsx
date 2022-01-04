import React, { FC } from "react";
import {
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
        <IconButton aria-label="Notes" icon={<FiInfo />} color="blue.300" />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Notes</PopoverHeader>
        <PopoverBody>{notes}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default LineItemNotesPopover;
