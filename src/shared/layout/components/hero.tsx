import { FC } from "react";
import { Flex, Heading } from "@chakra-ui/react";

interface HeroProps {
  title: string;
}

const Hero: FC<HeroProps> = ({ title }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
    bgGradient="linear(to-l, #7928CA, #FF0080)"
    bgClip="text"
  >
    <Heading fontSize="6vw">{title}</Heading>
  </Flex>
);

export default Hero;
