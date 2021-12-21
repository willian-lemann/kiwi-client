import Head from "next/head";

import { GlobalStyle } from "../styles/global";

import type { AppProps } from "next/app";

import { Provider } from "../context";
import { socket } from "../config/socket";
import { useEffect } from "react";

function App({ Component, pageProps }: AppProps) {


  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="nextjs" key="title" />
        <link rel="icon" href="/favicon.ico" />

        <title>Kiwi Chat</title>
      </Head>

      <GlobalStyle />
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
