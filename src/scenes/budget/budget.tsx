import React, { FC } from "react";
import { Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";

import { GET_LINE_ITEMS } from "./graphql/queries";
import Loading from "@shared/components/loading";
import Error from "@shared/components/error";

const Budget: FC = () => {
  const { error, loading, data } = useQuery(GET_LINE_ITEMS);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  const { lineItems } = data;
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Date</Th>
          <Th>Title</Th>
          <Th>Description</Th>
          <Th isNumeric>Amount</Th>
        </Tr>
      </Thead>
      <Tbody>
        {lineItems.map((lineItem: any) => (
          <Tr>
            <Td>{lineItem.date}</Td>
            <Td>{lineItem.title}</Td>
            <Td>{lineItem.description}</Td>
            <Td>{lineItem.amount}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Budget;
