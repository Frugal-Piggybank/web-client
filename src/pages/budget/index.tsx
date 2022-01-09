import React from "react";
import { NextPage } from "next";
import { useUser } from "@auth0/nextjs-auth0";

import Layout from "@shared/layout";
import Budget from "@scenes/budget";
import Loading from "@shared/components/loading";
import UnAuthBudgetContainer from "@scenes/budget/components/unauth-budget-container";

const BudgetPage: NextPage = () => {
  const { user, isLoading } = useUser();

  return (
    <Layout pageTitle="My Budget">
      {isLoading ? <Loading /> : !user ? <UnAuthBudgetContainer /> : <Budget />}
    </Layout>
  );
};

export default BudgetPage;
