import { FC } from "react";
import { Stack, StackProps } from "@chakra-ui/react";

const Main: FC<StackProps> = (props) => (
  <Stack
    spacing="1.5rem"
    width="100%"
    maxWidth="48rem"
    py="3rem"
    px="1rem"
    {...props}
  />
);

export default Main;
