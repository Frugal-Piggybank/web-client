import React from "react";
import { NextPage } from "next";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Layout from "@shared/layout";
import Categories from "@scenes/categories";

const CategoriesPage: NextPage = () => (
  <Layout pageTitle="My Categories">
    <Categories />
  </Layout>
);

export default withPageAuthRequired(CategoriesPage);
