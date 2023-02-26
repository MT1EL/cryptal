import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Container from "../Container";
import OtcCard from "./OtcCard.js";
function OtcService({ data, subTitle, title }) {
  return (
    <Box color="rgb(138, 151, 172)" pt="20px" fontSize="12px" lineHeight="16px">
      <Box display={{ md: "none" }}>
        <Container>
          <Text
            fontSize={{ base: "14px" }}
            mb="6px"
            lineHeight={"16px"}
            color="rgb(138, 151, 172)"
          >
            {data.blockTitle}
          </Text>
          <Text
            fontSize={{ base: "20px", md: "30px", lg: "38px" }}
            mb="14px"
            lineHeight={{ base: "normal", md: "54px" }}
            color="rgb(36, 42, 51)"
            fontWeight={"600"}
          >
            {subTitle}
          </Text>
        </Container>
      </Box>
      <Box
        p={{ base: "70px 0px 20px", md: "120px 0px 20px" }}
        bg="rgb(252, 252, 253)"
      >
        <Container>
          <Text
            fontSize={{ base: "20px", md: "44px" }}
            lineHeight={{ base: "normal", md: "" }}
            textAlign={"start"}
            fontWeight="600"
            mb="10px"
            color="rgb(36, 42, 51)"
          >
            {data.subTitle}
          </Text>
          <Text
            fontSize={{ base: "14px", md: "22px" }}
            mb={{ base: "20px", md: "100px" }}
            color="rgb(124, 126, 168)"
          >
            {data.blockTitle}
          </Text>
          <Flex
            flexWrap={{ base: "nowrap", md: "wrap" }}
            overflow={{ base: "scroll", md: "unset" }}
            w={{ base: "100%", md: "unset" }}
          >
            {data.otcGroup.map((item) => (
              <OtcCard
                key={item.id}
                image={item.img[0].url}
                title={item.title}
                description={item.description}
              />
            ))}
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

export default OtcService;
