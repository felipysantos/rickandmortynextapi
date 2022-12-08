import { Center, Heading, HStack, VStack } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { Card } from "../../components/card";

export const defaultEndpoint = `https://rickandmortyapi.com/api/character`;

export default function ImagesPage({ data }: any) {
  const { info, results } = data;

  const [isValue, setValue] = useState("");

  const [isResults, updateResults] = useState(results);

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

    const endpoint = `https://rickandmortyapi.com/api/character/?name=${isValue}`;

    updatePage({
      current: endpoint,
    });
  };

  return (
    <Center flexDir={"column"} h={"100vh"} w={"100vw"} overflow={"hidden"}>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Rick"
          value={isValue}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button type="submit">search</button>
      </form>
      <HStack
        w={"75%"}
        maxH={"400px"}
        flexWrap={"wrap"}
        gap={"20px"}
        alignItems={"center"}
        justifyContent={"center"}
        overflowY={"auto"}
      >
        {isResults ? (
          isResults.map((element: any, index: number) => (
            <Card key={index}>{element}</Card>
          ))
        ) : (
          <Center minW={"80%"} h={"400px"}>
            <Heading>Not fount</Heading>
          </Center>
        )}
      </HStack>
      <button onClick={handlePrevPage}>Prev</button>
      <button onClick={handleNextPage}>Next</button>
    </Center>
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
