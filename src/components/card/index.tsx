import { Heading, Image, VStack } from "@chakra-ui/react";
import Link from "next/link";

export const Card = ({ children }: any) => {
  return (
    <VStack>
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
        bgColor={"#706fd3"}
        color={"#f7f1e3"}
      >
        <Image
          width={"100%"}
          height={"100%"}
          src={children.image ? `${children.image}` : ""}
          alt={`${children.image}`}
          borderRadius={20}
        />
        <Heading as={"h3"} size={"md"} py={4}>
          {children.name}
        </Heading>
      </VStack>
    </Link>
    </VStack>
  );
};
