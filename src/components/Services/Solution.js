import { Text, Box, Flex, Img, Button } from "@chakra-ui/react";
import React from "react";
import Container from "../Container";

function Solution({ data }) {
  return (
    <Flex
      bg="rgb(16, 16, 34)"
      bgSize="auto"
      flexDirection={"row"}
      color="rgb(255, 255, 255)"
      justifyContent="center"
    >
      <Container>
        <Box
          p={{ base: "24px 18px 54px", md: "30px 0px 40px" }}
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box>
            <Img
              src={data.img.url}
              alt="icon"
              maxW={{ base: "177px", md: "100%" }}
            />
          </Box>
          <Flex
            justifyContent="center"
            flexDirection={"column"}
            maxW="690px"
            lineHeight="1.5"
            ml={{ md: "150px" }}
          >
            <Text
              fontSize={{ base: "20px", md: "38px" }}
              lineHeight="normal"
              mb="0"
            >
              {data.title}
            </Text>
            <Box
              fontSize={"12px"}
              lineHeight="17px"
              mt="10px"
              color="rgb(170, 180, 219)"
              dangerouslySetInnerHTML={{
                __html: data.text,
              }}
              style={{ listStyle: "inside" }}
            />
            <Button
              bg="transparent"
              border="none"
              color="rgb(101, 130, 253)"
              textAlign="left"
              p="20px 0px 0px"
              as="a"
              href={data.buttonUrl}
              alignSelf="flex-start"
              target="_blank"
            >
              {data.buttonName}
            </Button>
          </Flex>
        </Box>
      </Container>
    </Flex>
  );
}

export default Solution;
