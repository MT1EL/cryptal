import { Text, Box, Flex, Img } from "@chakra-ui/react";
import React from "react";

function Investors({ partners }) {
  return (
    <Box p={{ base: "30px 0px", md: "130px 0px" }}>
      <Box p={{ base: "0px 5%", md: "0px 15%", lg: "0px 16.7%" }}>
        <Box pb={{ md: "65px" }} maxW="570px">
          <Text
            fontSize={{ base: "20px", md: "44px" }}
            lineHeight={{ base: "normal", md: "60px" }}
            fontWeight="600"
            m="auto"
          >
            {partners.title}
          </Text>
          <Box
            fontSize={{ base: "12px", md: "16px" }}
            lineHeight={{ base: "16px", md: "25px" }}
            mt={{ base: "14px", md: "20px" }}
          ></Box>
        </Box>
        <Flex
          flexWrap={"wrap"}
          rowGap={{ base: "20px", md: "unset" }}
          gap={{ md: "50px 100px" }}
          margin={{ base: "22px 0px 0px ", md: "30px 0px 0px" }}
          fontSize={{ base: "12px", md: "16px" }}
          lineHeight={{ base: "16px", md: "25px" }}
          color="rgb(138, 151, 172)"
          textAlign="justify"
          alignItems="center"
        >
          {partners.group.map((item) => (
            <Box flex={"1 1 25%"} key={item.id}>
              <Box cursor="pointer">
                <Img src={item.img.url} alt="sponsor image" />
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export default Investors;
