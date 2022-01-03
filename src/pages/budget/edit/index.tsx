import React from "react";
import { NextPage } from "next";
import Layout from "@shared/layout";
import UpsertLineItem from "@scenes/upsert-line-item";

const EditBudgetPage: NextPage = () => {
  return (
    <Layout pageTitle="Edit Budget">
      <UpsertLineItem />
    </Layout>
  );
};

export default EditBudgetPage;
