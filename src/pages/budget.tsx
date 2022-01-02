import React from "react";
import { Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";

import Container from "../components/container";
import Hero from "../components/hero";
import Main from "../components/main";
import DarkModeSwitch from "../components/dark-mode-switch";
import Footer from "../components/footer";

import { GET_LINE_ITEMS } from "../graphql/queries";

const Budget = () => {
  const { error, loading, data } = useQuery(GET_LINE_ITEMS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error! {error.message}</Text>;

  const { lineItems } = data;

  return (
    <Container height="100vh">
      <Hero title="My Budget" />
      <Main>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th isNumeric>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            {lineItems.map((lineItem: any) => (
              <Tr>
                <Td>{lineItem.date}</Td>
                <Td>{lineItem.title}</Td>
                <Td>{lineItem.description}</Td>
                <Td>{lineItem.amount}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Main>

      <DarkModeSwitch />
      <Footer>
        <Text bgClip="text" bgGradient="linear(to-l, #7928CA, #FF0080)">
          @thefrugaldev
        </Text>
      </Footer>
    </Container>
  );
};

export default Budget;
