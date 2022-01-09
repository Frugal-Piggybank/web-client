import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import { UserProvider } from "@auth0/nextjs-auth0";

import theme from "../../theme";
import { useApollo } from "@shared/lib/apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <UserProvider>
      <ApolloProvider client={apolloClient}>
        <ChakraProvider resetCSS theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </UserProvider>
  );
}

export default MyApp;
