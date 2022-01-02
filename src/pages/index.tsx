import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { AtSignIcon, CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import Hero from "../components/hero";
import Container from "../components/container";
import Main from "../components/main";
import DarkModeSwitch from "../components/dark-mode-switch";
import Footer from "../components/footer";

const Index = () => (
  <Container height="100vh">
    <Hero title="Frugal Piggybank" />
    <Main>
      <Text textAlign={"center"}>An easy place to manage your budget.</Text>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text bgClip="text" bgGradient="linear(to-l, #7928CA, #FF0080)">
        @thefrugaldev
      </Text>
    </Footer>
  </Container>
);

export default Index;
