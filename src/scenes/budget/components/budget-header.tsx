import React, { FC, useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Center,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { monthNames } from "@shared/lib/datetime-helpers";

interface BudgetHeaderProps {
  activeMonth: number;
  onMonthChange: (activeMonth: number) => void;
}

const BudgetHeader: FC<BudgetHeaderProps> = ({
  activeMonth,
  onMonthChange,
}) => {
  const [activeMonthName, setActiveMonthName] = useState<string>();

  useEffect(() => {
    setActiveMonthName(monthNames[activeMonth]);
  }, [activeMonth]);

  return (
    <Center>
      <Stack spacing={4} direction={"row"}>
        <ButtonGroup isAttached variant="outline">
          <IconButton
            aria-label="Decrement Month"
            icon={<FiArrowLeft />}
            onClick={() => onMonthChange(activeMonth - 1)}
            isDisabled={activeMonth <= 0}
          />
          <Button>{activeMonthName}</Button>
          <IconButton
            aria-label="Increment Month"
            icon={<FiArrowRight />}
            onClick={() => onMonthChange(activeMonth + 1)}
            isDisabled={activeMonth >= 11}
          />
        </ButtonGroup>
      </Stack>
    </Center>
  );
};

export default BudgetHeader;
