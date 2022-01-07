import React from "react";
import { NextPage } from "next";
import Layout from "@shared/layout";
import Categories from "@scenes/categories/categories";

const CategoriesPage: NextPage = () => (
  <Layout pageTitle="My Categories">
    <Categories />
  </Layout>
);

export default CategoriesPage;
