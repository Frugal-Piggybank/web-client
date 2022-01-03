import React, { FC } from "react";
import { Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";

import { GET_LINE_ITEMS } from "./graphql/queries";
import Loading from "@shared/components/loading";
import Error from "@shared/components/error";
import BudgetTableHeader from "./components/budget-table-header";
import BudgetTableBody from "./components/budget-table-body";

const Budget: FC = () => {
  const { error, loading, data } = useQuery(GET_LINE_ITEMS);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  const { lineItems } = data;
  return (
    <Table variant="simple">
      <BudgetTableHeader />
      <BudgetTableBody lineItems={lineItems} />
    </Table>
  );
};

export default Budget;
