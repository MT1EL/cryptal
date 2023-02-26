import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import homeBg from "../../assets/landingbG.svg";

function Header({ header }) {
  return (
    <Box
      maxW="100vw"
      // mt="-90px"
      position="relative"
      w="100vw"
      top="0"
      overflow="hidden"
      backgroundImage={homeBg}
      backgroundRepeat="no-repeats"
      bgPosition="center top"
      backgroundSize="cover"
    >
      <Box p={{ base: "58px 0px 34px", md: "155px 0px 55px" }}>
        <Box p={{ base: "0px 5%", md: "0px 15%" }}>
          <Box
            w={{ md: "60%" }}
            maxW={{ base: "684px", md: "684px" }}
            p={{ base: "0px 24px", md: "unset" }}
            display="flex"
            flexDirection="column"
            justifyContent={{ base: "center", md: "unset" }}
            alignItems={{ base: "center", md: "unset" }}
          >
            <Text
              color="rgb(174, 178, 206)"
              fontSize={{ base: "16px", md: "26px" }}
              lineHeight={{ base: "18px", md: "48px" }}
              mb={{ base: "5px", md: "unset" }}
            >
              {header.title}
            </Text>
            <Text
              fontSize={{ base: "20px", lg: "38px" }}
              lineHeight={{ base: "29px", md: "54px" }}
              fontWeight={"500"}
              color="rgb(255, 255, 255)"
              margin={"0px 0px 16px"}
              textAlign={{ base: "center", md: "unset" }}
            >
              {header.text.replace(/(<([^>]+)>)/gi, "")}
            </Text>
            <Button
              bg={{ base: "transparent", md: "rgb(74, 109, 255)" }}
              w={{ base: "164px", md: "215px" }}
              h={{ base: "auto", md: "58px" }}
              color={{ base: "rgb(74, 109, 255)", md: "rgb(255, 255,255)" }}
              borderRadius="0"
              p={{ md: "1px 6px" }}
              m={{ base: "10px 0px 0px", md: "40px 0 30px" }}
              fontSize="14px"
              as="a"
              href={header.buttonUrl}
            >
              {header.buttonName}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
