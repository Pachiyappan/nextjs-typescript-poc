import * as React from "react";
import "@fontsource/open-sans";
import "./styles/index.scss";
import { AppProps } from "next/app";
import Header from "./components/Header";
import { ChakraProvider } from "@chakra-ui/react";
import { SWRConfig } from "swr";

const fetcher = (args: any) => fetch(args).then((res) => res.json());
function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <SWRConfig value={{ fetcher }}>
        <Header />
        <div style={{ margin: "20px" }}>
          <Component />
        </div>
      </SWRConfig>
    </ChakraProvider>
  );
}

export default App;
