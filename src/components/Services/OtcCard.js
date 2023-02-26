import { Text, Flex, Img } from "@chakra-ui/react";
import React from "react";

function OtcCard({ image, title, description }) {
  return (
    <Flex
      flex={{ base: "0 0 220px", md: "unset" }}
      mr="3%"
      flexDirection={"column"}
      alignItems="baseline"
      mb={{ base: "20px", md: "100px" }}
      w={{ base: "220px", md: "22%" }}
      fontSize="12px"
      border={{ base: "1px solid rgb(225, 225, 242)", md: "unset" }}
      borderRadius={"6px"}
      p={{ base: "30px", md: "unset" }}
    >
      <Img
        src={image}
        alt="icon"
        h={{ base: "35px", md: "55px" }}
        transform={{ md: "scale(0.8)" }}
      />
      <Text
        color="rgb(36, 42, 51)"
        fontWeight="500"
        fontSize={"20px"}
        m={{ base: "20px 0px 12px", lg: "35px 0px 15px" }}
        p={0}
      >
        {title}
      </Text>
      <Text
        color="rgb(146, 148, 177)"
        textAlign="left"
        opacity="1"
        letterSpacing={"0px"}
        fontWeight="normal"
        fontSize={{ base: "12px", md: "16px" }}
        lineHeight={{ base: "17px", md: "20px" }}
      >
        {description}
      </Text>
    </Flex>
  );
}

export default OtcCard;
