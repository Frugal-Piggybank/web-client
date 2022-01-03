import { NextPage } from "next";
import { Text } from "@chakra-ui/react";
import Layout from "@shared/layout";

const HomePage: NextPage = () => (
  <Layout>
    <Text textAlign={"center"}>An easy place to manage your budget.</Text>
  </Layout>
);

export default HomePage;
