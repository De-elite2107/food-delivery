import "/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Montserrat } from "next/font/google";
const _Montserrat = Montserrat({ subsets: ["latin"] }); 

export default function App({ Component, pageProps }) {
  const Route = useRouter();
  console.log("Route", Route.pathname);
  if (typeof window === "undefined") return;
  return (
    <ChakraProvider>
      <Head>
        <title>Food Delivery</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={_Montserrat.className}>
          <Component {...pageProps} />
        </main>
    </ChakraProvider>
  );
}
