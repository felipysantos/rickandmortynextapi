import {
  Button,
  Center,
  Flex,
  FormControl,
  Heading,
  HStack,
  Input,
  useColorMode,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Card } from "../../components/card";
import { Header } from "../../components/header";
export const defaultEndpoint = `https://rickandmortyapi.com/api/character`;

export default function ImagesPage({ data }: any) {
  const { info, results } = data;

  const { colorMode } = useColorMode();

  const [isResults, updateResults] = useState(results);

  const [isDisable, setDisable] = useState(false);

  const [isPage, updatePage] = useState({
    ...info,
    current: defaultEndpoint,
  });

  const { current } = isPage;

  useEffect(() => {
    if (current === defaultEndpoint) return;

    async function request() {
      const res = await fetch(current);
      const nextData = await res.json();

      updatePage({
        current,
        ...nextData.info,
      });

      if (!nextData.info?.prev) {
        updateResults(nextData.results);
        return;
      }
      updateResults([...nextData.results]);
    }
    request();
  }, [current]);

  const handleNextPage = () => {
    updatePage((prev: any) => {
      return {
        ...prev,
        current: isPage?.next,
      };
    });
  };

  const handlePrevPage = () => {
    updatePage((prev: any) => {
      return {
        ...prev,
        current: isPage?.prev,
      };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const isValue = e.target[0].value;

    !isValue.length ? setDisable(false) : setDisable(true);

    const endpoint = `https://rickandmortyapi.com/api/character/?name=${isValue}`;

    updatePage({
      current: endpoint,
    });
  };

  return (
    <>
      <Head>
        <title>Rick and Morty</title>
        <meta
          name="description"
          content="Amazing research platform of Rick and Morty characters."
        />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Header />
      <Center
        flexDir={"column"}
        h={"100vh"}
        w={"100vw"}
        minW={"375px"}
        overflow={"hidden"}
        justifyContent={"space-around"}
        pt={{ base: 10, lg: 5 }}
      >
        <Heading>Rick and Morty</Heading>

        <form onSubmit={handleSubmit}>
          <FormControl
            transitionDuration={"0.3s"}
            border={`2px solid ${colorMode === "light" ? "#fff" : "#1a202c"}`}
            _focusWithin={{
              border: `2px solid ${colorMode === "light" ? "#1a202c" : "#fff"}`,
            }}
            h={"auto"}
            my={4}
          >
            <Flex w={"100%"} justifyContent={"space-between"}>
              <Input
                borderRadius={0}
                type="search"
                placeholder="Rick Sanchez"
                variant={"unstyled"}
                px={4}
              />
              <Button
                variant={"ghost"}
                type="submit"
                px={"25px"}
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
                Search
              </Button>
            </Flex>
          </FormControl>
        </form>
        <HStack
          w={"75%"}
          minW={"350px"}
          maxH={"400px"}
          flexWrap={"wrap"}
          gap={"20px"}
          alignItems={"center"}
          justifyContent={"center"}
          overflowY={"auto"}
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: colorMode === "light" ? "#706fd3" : "#fff",
              borderRadius: "24px",
            },
          }}
        >
          {isResults ? (
            isResults.map((element: any, index: number) => (
              <Card id={index} key={index}>
                {element}
              </Card>
            ))
          ) : (
            <Center minW={"80%"} h={"400px"}>
              <Heading>Not fount</Heading>
            </Center>
          )}
        </HStack>
        <Flex w={"100%"} maxW={"500px"} py={1} justifyContent={"space-around"}>
          <Button
            onClick={handlePrevPage}
            isDisabled={isDisable}
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
            Prev
          </Button>
          <Button
            onClick={handleNextPage}
            isDisabled={isDisable}
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
            Next
          </Button>
        </Flex>
      </Center>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(defaultEndpoint);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};
