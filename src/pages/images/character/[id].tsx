import { Center, VStack } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { ProfileCard } from "../../../components/profileCard";
export const defaultEndpoint = `https://rickandmortyapi.com/api/character`;

export default function Characters({ data }: any) {
  return (
    <Center w={"100vw"} h={"100vh"}>
      <ProfileCard>{data}</ProfileCard>
    </Center>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: any) => {
  const { id } = params;
  const response = await fetch(`${defaultEndpoint}/${id}`);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};
