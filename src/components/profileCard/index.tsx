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
      flexDir={{ base: "column", lg: "row" }}
      alignItems={"center"}
      bgColor={colorMode === "light" ? "#706fd3" : "#6B6F78"}
      color={"#fff"}
      pb={{ base: 10, md: 12, lg: 0 }}
    >
      <Box>
        <Image src={`${children.image}`} alt={`${children.name}`} />
      </Box>
      <VStack
        mt={{ base: "15px", lg: 0 }}
        px={{ base: 0, lg: "60px" }}
        alignItems={"flex-start"}
      >
        <Heading as="h1" size="2xl" py={2}>
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
