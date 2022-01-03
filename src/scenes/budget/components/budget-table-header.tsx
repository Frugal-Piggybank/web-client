import React, { FC } from "react";
import { Th, Thead, Tr } from "@chakra-ui/react";
import { LineItem } from "../types/LineItem";

const BudgetTableHeader: FC = () => {
  return (
    <Thead>
      <Tr>
        <Th>Date</Th>
        <Th>Title</Th>
        <Th>Description</Th>
        <Th isNumeric>Amount</Th>
      </Tr>
    </Thead>
  );
};

export default BudgetTableHeader;
