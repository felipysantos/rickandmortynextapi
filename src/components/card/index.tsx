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
          borderRadius={20}
          overflow={"hidden"}
          w={"100vw"}
          h={"auto"}
          maxW={"280px"}
          bgColor={colorMode === "light" ? "#706fd3" : "#6B6F78"}
          color={"#f7f1e3"}
          transitionDuration={"0.5s"}
          _hover={{
            img: {
              transform: "scale(1.1)",
              filter: "grayscale(0)",
            },
          }}
        >
          <Box
            width={"100%"}
            height={"100%"}
            borderRadius={20}
            overflow={"hidden"}
          >
            <Image
              width={"100%"}
              height={"100%"}
              src={children.image ? `${children.image}` : ""}
              alt={`${children.image}`}
              filter={"grayscale(0.75)"}
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
