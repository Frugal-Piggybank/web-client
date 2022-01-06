import React, { FC, useState } from "react";
import NextLink from "next/link";
import { Button, Heading, Link, Table, Text } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";

import { GET_LINE_ITEMS_BY_DATE } from "./graphql/queries";
import Loading from "@shared/components/loading";
import Error from "@shared/components/error";
import AddButton from "@shared/components/add-button";
import BudgetHeader from "./components/budget-header";
import BudgetContainer from "./components/budget-container";
import { getMonthStartAndEndDay } from "@shared/lib/datetime-helpers";

const Budget: FC = () => {
  const [activeMonth, setActiveMonth] = useState<number>(
    new Date().getUTCMonth()
  );

  const { error, loading, data, refetch } = useQuery(GET_LINE_ITEMS_BY_DATE, {
    variables: {
      start: getMonthStartAndEndDay(activeMonth).start,
      end: getMonthStartAndEndDay(activeMonth).end,
    },
    fetchPolicy: "cache-and-network",
  });

  const handleMonthChange = (month: number) => {
    setActiveMonth(month);
    const { start, end } = getMonthStartAndEndDay(month);

    refetch({
      start,
      end,
    });
  };

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  const { lineItemsByDate: lineItems } = data;

  return (
    <>
      <BudgetHeader
        activeMonth={activeMonth}
        onMonthChange={handleMonthChange}
      />
      <Heading size="lg">January 2021</Heading>
      <BudgetContainer lineItems={lineItems} refetchLineItems={refetch} />
      <NextLink href="/budget/edit" passHref>
        <Link>
          <AddButton />
        </Link>
      </NextLink>
    </>
  );
};

export default Budget;
