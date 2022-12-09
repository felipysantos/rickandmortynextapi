import {
  Box,
  chakra,
  Flex,
  Heading,
  Image,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export const ProfileCard = ({ children }: any) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      as={motion.div}
      initial={{ y: "50px" }}
      animate={{
        opacity: [0, 1],
        y: 0,
      }}
      minW={{ base: "375px" }}
      flexDir={{ base: "column", lg: "row" }}
      alignItems={"center"}
      p={10}
      borderRadius={20}
      bgColor={colorMode === "light" ? "#706fd3" : "#6B6F78"}
      color={"#fff"}
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
