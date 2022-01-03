import React, { FC } from "react";
import { Text } from "@chakra-ui/react";
import { ApolloError } from "@apollo/client";

interface ErrorProps {
  error: ApolloError;
}

const Error: FC<ErrorProps> = ({ error }) => (
  <Text>Error! {error.message}</Text>
);

export default Error;
