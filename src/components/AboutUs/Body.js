import { Text, Box, Flex, Img, Button } from "@chakra-ui/react";
import React from "react";
import image from "../../assets/Future_0d6d2dd48d.svg";
function Body({ about, buildFuture }) {
  return (
    <Box p={{ base: "10px 0px 0px", md: "30px 0px 0px" }}>
      {/** LEARN MORE PART */}
      <Box p={{ base: "15px 0px 30px", md: "70px 0px 90px" }}>
        <Box p={{ base: "0px 5%", md: "0px 15%", lg: "0px 16.7%" }}>
          <Text
            fontSize={{ base: "14px", md: "22px" }}
            lineHeight="18px"
            mb="4px"
            color="rgb(124, 126, 168)"
          >
            {about.title}
          </Text>
          <Text
            fontSize={{ base: "20px", md: "44px" }}
            lineHeight="normal"
            fontWeight="600"
            m="auto"
            color="rgb(36, 42, 51)"
          >
            {about.subTitle}
          </Text>
          <Box
            fontSize={{ base: "12px", md: "16px" }}
            lineHeight={{ base: "16px", md: "25px" }}
            margin={{ base: "15px 0px 0px", md: "30px 0px 0px" }}
            columnGap="100px"
            color="rgb(138, 151, 172)"
            // style={{ columnCount: "1" }}
            dangerouslySetInnerHTML={{ __html: about.text }}
          ></Box>
        </Box>
      </Box>
      {/** BUILD THE FUTURE PART */}
      <Flex
        bg="rgb(16, 16, 34)"
        bgSize="auto"
        color="rgb(255, 255, 255)"
        // flexDirection="row"
        // justifyContent="center"
        alignItems="center"
      >
        <Box p={{ base: "0px 5%", md: "0px 15%", lg: "0px 16.7%" }}>
          <Box
            p={{ base: "24px 18px 54px", md: "30px 0px 40px" }}
            display={{ md: "flex" }}
          >
            <Box boxSizing="border-box">
              <Img
                src={image}
                alt=";"
                maxW={{ base: "177px", md: "unset" }}
                overflow="clip"
              />
            </Box>
            <Flex
              ml={{ md: "150px" }}
              maxW="690px"
              justifyContent="center"
              flexDirection="column"
              lineHeight="1.5"
            >
              <Text
                fontSize={{ base: "20px", md: "30px", lg: "38px" }}
                lineHeight={{ base: "normal", md: "54px" }}
                letterSpacing="0px"
                mb={{ md: "14px" }}
              >
                {buildFuture.title}
              </Text>

              <Box
                fontSize={{ base: "12px" }}
                color="rgb(170, 180, 219)"
                lineHeight="17px"
                mt="10px"
                dangerouslySetInnerHTML={{ __html: buildFuture.text }}
              />

              <Text mt={{ base: "10px", md: "0px" }}></Text>
              <Text mt={{ base: "10px", md: "0px" }}></Text>
              <Button
                bg="transparent"
                border="none"
                color="rgb(101, 130, 253)"
                textAlign="left"
                p="20px 0px 0px"
                display="block"
                _hover={{
                  bg: "none",
                }}
                as="a"
                href={buildFuture.buttonUrl}
              >
                {buildFuture.buttonName}
              </Button>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default Body;
