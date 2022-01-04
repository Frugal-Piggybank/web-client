import React, { FC } from "react";
import NextLink from "next/link";
import { Button, Heading, Link, Table, Text } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";

import { GET_LINE_ITEMS_BY_DATE } from "./graphql/queries";
import Loading from "@shared/components/loading";
import Error from "@shared/components/error";
import AddButton from "@shared/components/add-button";
import BudgetHeader from "./components/budget-header";
import BudgetContainer from "./components/budget-container";

const Budget: FC = () => {
  const { error, loading, data } = useQuery(GET_LINE_ITEMS_BY_DATE, {
    variables: {
      start: "2022-01-01T00:00:00.000Z",
      end: "2022-01-17T00:00:00.000Z",
    },
  });

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  const { lineItemsByDate: lineItems } = data;

  return (
    <>
      <BudgetHeader />
      <Heading size="lg">January 2021</Heading>
      <BudgetContainer lineItems={lineItems} />
      <NextLink href="/budget/edit" passHref>
        <Link>
          <AddButton />
        </Link>
      </NextLink>
    </>
  );
};

export default Budget;
