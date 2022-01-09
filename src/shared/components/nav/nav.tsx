import React, { FC } from "react";
import { Box, Flex, HStack } from "@chakra-ui/react";
import NavLink from "./components/nav-link";
import DarkModeSwitch from "./components/dark-mode-switch";
import AuthLink from "./components/auth-link";

const Nav: FC = () => {
  return (
    <Box paddingY="5" width="100%">
      <Flex as="nav" maxWidth="48rem" mx="auto" justifyContent="space-between">
        <HStack>
          <NavLink relativeHref="/" linkText="Home" />
          <NavLink relativeHref="/budget" linkText="Budget" />
        </HStack>
        <HStack>
          <AuthLink />
          <DarkModeSwitch />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Nav;
