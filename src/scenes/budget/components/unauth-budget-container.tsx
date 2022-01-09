import NextLink from "next/link";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  CloseButton,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { FC } from "react";

const UnAuthBudgetContainer: FC = () => {
  return (
    <>
      <Alert status="error">
        <AlertIcon />
        <VStack textAlign="center" width="100%">
          <AlertTitle mr={2}>
            Looks like you haven't created an account, yet!
          </AlertTitle>
          <AlertDescription>
            <NextLink href="/api/auth/login" passHref>
              <Link>Sign in or create and account</Link>
            </NextLink>{" "}
            to start creating your budget
          </AlertDescription>
        </VStack>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>
    </>
  );
};

export default UnAuthBudgetContainer;
