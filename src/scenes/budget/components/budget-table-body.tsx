import React, { FC } from "react";
import { Tbody, Td, Tr } from "@chakra-ui/react";
import { LineItem } from "../types/LineItem";
import { formatDateTime } from "@shared/lib/datetime-helpers";

interface BudgetTableBodyProps {
  lineItems: LineItem[];
}

const BudgetTableBody: FC<BudgetTableBodyProps> = ({ lineItems }) => {
  return (
    <Tbody>
      {lineItems.map((lineItem: any) => (
        <Tr>
          <Td>{formatDateTime(lineItem.date)}</Td>
          <Td>{lineItem.title}</Td>
          <Td>{lineItem.description}</Td>
          <Td>{lineItem.amount}</Td>
        </Tr>
      ))}
    </Tbody>
  );
};

export default BudgetTableBody;
