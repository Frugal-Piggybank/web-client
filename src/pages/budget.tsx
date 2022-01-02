import React from "react";
import { NextPage } from "next";

import Layout from "../shared/layout";
import Budget from "../scenes/budget";

const BudgetPage: NextPage = () => {
  return (
    <Layout pageTitle="My Budget">
      <Budget />
    </Layout>
  );
};

export default BudgetPage;
