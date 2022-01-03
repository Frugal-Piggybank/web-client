import React, { FC, useState } from "react";
import { Button, Center, Select, Stack } from "@chakra-ui/react";
import { monthNames } from "@shared/lib/datetime-helpers";

const BudgetHeader: FC = () => {
  const [showExpenses, setShowExpenses] = useState<boolean>(true);
  const [showSavings, setShowSavings] = useState<boolean>(false);

  return (
    <Center>
      <Stack spacing={4} direction={"row"}>
        <Button
          onClick={() => setShowExpenses(!showExpenses)}
          colorScheme="teal"
          variant="outline"
          isActive={showExpenses}
        >
          Expenses
        </Button>
        <Button
          onClick={() => setShowSavings(!showSavings)}
          colorScheme="teal"
          variant="outline"
          isActive={showSavings}
        >
          Savings
        </Button>
      </Stack>
    </Center>
  );
};

export default BudgetHeader;
