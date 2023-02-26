import { Text, Flex, Img } from "@chakra-ui/react";
import React from "react";

function SupportBoxes({ buttonName, buttonUrl, title, subTitle, image }) {
  return (
    <Flex
      justifyContent={{ base: "flex-start", md: "space-around" }}
      border={"1px solid rgb(225, 225, 242)"}
      borderRadius="10px"
      flex={"0 0 46%"}
      maxH="140px"
      m="10px 0px"
    >
      <Img
        src={image}
        alt="icon"
        h={"fit-content"}
        maxW={{ base: "35%", md: "" }}
        bottom="9px"
        position="relative"
      />
      <Flex
        p={{ base: "15px 25px", md: "" }}
        flexDir="column"
        justifyContent="center"
      >
        <Text
          fontSize={{ base: "18px", md: "24px" }}
          lineHeight={{ base: "normal", md: "" }}
          mb={{ base: "4px", md: "0px" }}
          color="rgb(27, 29, 70)"
          fontWeight={"500"}
        >
          {title}
        </Text>
        <Text
          color="rgb(124, 126, 168)"
          fontSize={{ base: "12px", md: "16px" }}
          mb={{ base: "12px", md: "" }}
          fontWeight="normal"
        >
          {subTitle}
        </Text>
        <Text
          as="a"
          href={buttonUrl}
          target="_blank"
          fontSize={{ base: "12px", md: "" }}
          mt={{ base: "0px", md: "14px" }}
          color="rgb(74, 109, 255)"
        >
          {buttonName}
        </Text>
      </Flex>
    </Flex>
  );
}

export default SupportBoxes;
