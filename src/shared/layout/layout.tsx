import React, { FC } from "react";
import { Text } from "@chakra-ui/react";

import Nav from "@shared/components/nav";
import Container from "./components/container";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Main from "./components/main";

interface LayoutProps {
  pageTitle?: string;
}

const Layout: FC<LayoutProps> = ({
  children,
  pageTitle = "Frugal Piggybank",
}) => {
  return (
    <Container height="100vh">
      <Nav />
      <Hero title={`${pageTitle}`} />
      <Main>{children}</Main>
      <Footer>
        <Text bgClip="text" bgGradient="linear(to-l, #7928CA, #FF0080)">
          @thefrugaldev
        </Text>
      </Footer>
    </Container>
  );
};

export default Layout;
