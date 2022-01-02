import { FC } from "react";
import { Flex, FlexProps } from "@chakra-ui/react";

const Footer: FC<FlexProps> = (props) => (
  <Flex as="footer" py="8rem" {...props} />
);

export default Footer;
