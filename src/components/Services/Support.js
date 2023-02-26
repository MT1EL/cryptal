import { Text, Box, Flex } from "@chakra-ui/react";
import React from "react";
import Container from "../Container";
import SupportBoxes from "./SupportBoxes";

function Support({ data }) {
  console.log(data);
  return (
    <Box p={{ base: "34px 0%", md: "100px 0px" }} bg="rgb(244, 248, 251)">
      <Container>
        <Text
          fontSize={{ base: "14px", md: "22px" }}
          lineHeight={{ base: "18px", md: "" }}
          color="rgb(124, 126, 168)"
          mb={"4px"}
        >
          {data.title}
        </Text>
        <Text
          fontSize={{ base: "20px", md: "44px" }}
          fontWeight="600"
          lineHeight={{ base: "normal", md: "60px" }}
          m="auto"
        >
          {data.subTitle}
        </Text>
        <Box
          mt={{ base: "15px", md: "24px" }}
          lineHeight={{ base: "16px", md: "25px" }}
          color="rgb(138, 151, 172)"
          fontSize="12px"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
        <Flex
          mt={{ base: "18px", md: "70px" }}
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
        >
          {data.group.map((item) => (
            <SupportBoxes
              key={item.id}
              buttonName={item.urlName}
              buttonUrl={item.url}
              title={item.title}
              subTitle={item.subTitle}
              image={item.img.url}
            />
          ))}
        </Flex>
      </Container>
    </Box>
  );
}

export default Support;
