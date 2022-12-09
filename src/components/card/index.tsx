import {
  Box,
  chakra,
  Heading,
  Image,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
export const Card = ({ children, id }: any) => {
  const VStackMotion = chakra(motion.div);
  const { colorMode } = useColorMode();
  return (
    <VStackMotion
      initial={{ y: "-50px" }}
      animate={{
        transition: {
          delay: id * 0.05,
        },
        opacity: [0, 1],
        y: 0,
      }}
    >
      <Link
        href={"/images/character/[id]"}
        as={`/images/character/${children.id}`}
      >
        <VStack
          overflow={"hidden"}
          w={"100vw"}
          h={"auto"}
          maxW={"280px"}
          transitionDuration={"0.5s"}
          border={`2px solid ${colorMode === "light" ? "#000" : "#fff"}`}
          _hover={{
            img: {
              transform: "scale(1.1)",
              filter: "grayscale(0)",
            },
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
          <Box
            width={"100%"}
            height={"100%"}
            borderBottomRadius={0}
            overflow={"hidden"}
            borderBottom={`2px solid ${
              colorMode === "light" ? "#000" : "#fff"
            }`}
          >
            <Image
              width={"100%"}
              height={"100%"}
              src={children.image ? `${children.image}` : ""}
              alt={`${children.image}`}
              filter={"grayscale(1)"}
              transitionDuration={"0.5s"}
            />
          </Box>
          <Heading as={"h3"} size={"md"} py={4}>
            {children.name}
          </Heading>
        </VStack>
      </Link>
    </VStackMotion>
  );
};
