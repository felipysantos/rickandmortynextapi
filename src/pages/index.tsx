import {
  Box,
  Button,
  Center,
  Heading,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/header";
export default function Home() {
  const { colorMode } = useColorMode();

  return (
    <Box transitionDuration={"0.5s"}>
      <Head>
        <title>Rick and Morty</title>
        <meta
          name="description"
          content="Amazing research platform of Rick and Morty characters."
        />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <main>
        <Header />
        <Center h={"100vh"}>
          <VStack>
            <Heading textAlign={"center"}>
              Rick and Morty API <br /> with Next Js
            </Heading>
            <Link href={`/images`}>
              <Button
                variant={"ghost"}
                transitionDuration={"0.3s"}
                _hover={{
                  color: colorMode === "light" ? "#fff" : "#000",
                  ":before": {
                    width: "100%",
                    height: "100%",
                  },
                }}
                position={"relative"}
                borderRadius={"0"}
                _before={{
                  transitionDuration: "0.3s",
                  content: '""',
                  zIndex: "-1",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "0%",
                  height: "100%",
                  backgroundColor: colorMode === "light" ? "#706fd3" : "#fff",
                }}
              >
                Access Api
              </Button>
            </Link>
          </VStack>
        </Center>
      </main>
    </Box>
  );
}
