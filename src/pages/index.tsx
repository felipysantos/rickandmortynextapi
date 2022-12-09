import { Box, Center, Heading, VStack } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/header";

export default function Home() {
  return (
    <Box transitionDuration={"0.5s"}>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Amazing research platform of Rick and Morty characters."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Center h={"100vh"}>
          <VStack>
            <Heading textAlign={"center"}>
              Rick and Morty API <br /> with Next
            </Heading>
            <Link href={`/images`}>Redirect</Link>
          </VStack>
        </Center>
      </main>
    </Box>
  );
}
