import React, { FC } from "react";
import NextLink from "next/link";
import { Box, Button, Link } from "@chakra-ui/react";

interface NavLinkProps {
  relativeHref: string;
  linkText: string;
}

const NavLink: FC<NavLinkProps> = ({ relativeHref, linkText }) => {
  return (
    <Box>
      <NextLink href={relativeHref} passHref>
        <Button>
          <Link _hover={{ textDecoration: "none" }}>{linkText}</Link>
        </Button>
      </NextLink>
    </Box>
  );
};

export default NavLink;
