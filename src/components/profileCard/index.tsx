import { Box, Flex, Heading, Image, VStack } from "@chakra-ui/react";

export const ProfileCard = ({ children }: any) => {
  console.log(children);
  return (
    <Flex
      border={"2px solid black"}
      minW={{ base: "375px" }}
      flexDir={{ base: "column", lg: "row" }}
      alignItems={"center"}
      p={10}
      borderRadius={20}
      bgColor={
        children.status === "alive" || children.status === "Alive"
          ? "green.200"
          : children.status === "dead" || children.status === "Dead"
          ? "red.200"
          : "gray"
      }
    >
      <Box>
        <Image
          borderRadius={10}
          src={`${children.image}`}
          alt={`${children.name}`}
        />
      </Box>
      <VStack
        ml={{ base: 0, lg: "60px" }}
        mt={{ base: "15px", lg: 0 }}
        alignItems={"flex-start"}
      >
        <Heading as="h1" size="2xl">
          {children.name}
        </Heading>
        <Heading as="h3" size="md">
          Status: <span style={{ fontWeight: "400" }}>{children.status}</span>
        </Heading>
        <Heading as="h3" size="md">
          Gender: <span style={{ fontWeight: "400" }}>{children.gender}</span>
        </Heading>
        <Heading as="h3" size="md">
          Specie: <span style={{ fontWeight: "400" }}>{children.species}</span>
        </Heading>
        <Heading as="h3" size="md">
          Location:{" "}
          <span style={{ fontWeight: "400" }}>{children.location.name}</span>
        </Heading>
        <Heading as="h3" size="md">
          Origin:{" "}
          <span style={{ fontWeight: "400" }}>{children.origin.name}</span>
        </Heading>
      </VStack>
    </Flex>
  );
};
