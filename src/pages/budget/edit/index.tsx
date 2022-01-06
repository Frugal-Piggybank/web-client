import React from "react";
import { NextPage } from "next";
import Layout from "@shared/layout";
import UpsertLineItem from "@scenes/upsert-line-item";

const EditBudgetPage: NextPage<{ id: string }> = ({ id }) => {
  return (
    <Layout pageTitle="Edit Budget">
      <UpsertLineItem id={id} />
    </Layout>
  );
};

export default EditBudgetPage;
