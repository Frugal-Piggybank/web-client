import React, { FC } from "react";
import { Text } from "@chakra-ui/react";

import Container from "./components/container";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Main from "./components/main";
import DarkModeSwitch from "./components/dark-mode-switch";

interface LayoutProps {
  pageTitle?: string;
}

const Layout: FC<LayoutProps> = ({
  children,
  pageTitle = "Frugal Piggybank",
}) => {
  return (
    <Container height="100vh">
      <Hero title={`${pageTitle}`} />
      <Main>{children}</Main>

      <DarkModeSwitch />
      <Footer>
        <Text bgClip="text" bgGradient="linear(to-l, #7928CA, #FF0080)">
          @thefrugaldev
        </Text>
      </Footer>
    </Container>
  );
};

export default Layout;
