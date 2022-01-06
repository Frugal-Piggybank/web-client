import React, { FC } from "react";
import { Center, Spinner } from "@chakra-ui/react";

const Loading: FC = () => (
  <Center>
    <Spinner size="xl" color="teal.500" />
  </Center>
);

export default Loading;
