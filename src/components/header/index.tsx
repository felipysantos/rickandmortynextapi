import { Button, Flex, Switch, useColorMode } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const backPage = () => {
    window.history.back();
  };

  return (
    <Flex
      mt={0}
      w={"100%"}
      border={"none"}
      position={"fixed"}
      justifyContent={"space-between"}
      alignItems={"center"}
      h={{ base: "10", lg: "12" }}
    >
      <Button
        variant={"ghost"}
        ml={{ base: 5, lg: "100px" }}
        onClick={backPage}
        transitionDuration={"0.3s"}
        _hover={{
          color: colorMode === "light" ? "#fff" : "#fff",
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
          backgroundColor: "#706fd3",
        }}
      >
        <ArrowLeftIcon fontSize={"10px"} mr={4} />
        Back
      </Button>
      <Switch
        colorScheme={"gray"}
        mr={{ base: 5, lg: "100px" }}
        isChecked={colorMode === "light" ? false : true}
        onChange={toggleColorMode}
      />
    </Flex>
  );
};
