import React from "react";
import { Text, Box, Img, Flex, Button } from "@chakra-ui/react";
import arrow from "../../assets/join-now-arrow.svg";
function Header({ data }) {
  return (
    <Box
      bgPosition={{ base: "center bottom", md: "center top" }}
      overflow="hidden"
      backgroundImage={data.img.url}
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
    >
      <Box
        minH={{ base: "360px", md: "unset" }}
        textAlign={{ base: "center", md: "unset" }}
        p={{
          base: "58px 0px 34px",
          md: "155px 0px 55px",
          lg: "185px 0px 70px",
        }}
      >
        <Box
          p={{ base: "0px 5%", md: "0px 15%", lg: "0px 16.7%" }}
          w={{ base: "100%", md: "unset" }}
        >
          <Box mb={{ base: "0px", md: "50px" }} maxW="550px">
            <Text
              fontSize={{ base: "16px", md: "26px" }}
              lineHeight={{ base: "normal", md: "48px" }}
              mb={{ base: "5px", md: "unset" }}
              color="rgb(174, 178, 206)"
            >
              {data.title}
            </Text>
            <Text
              fontSize={{ base: "20px", md: "38px" }}
              lineHeight={{ base: "29px", md: "54px" }}
              color="rgb(255, 255, 255)"
              m="0px 0px 16px"
            >
              {data.SubTitle}
            </Text>
            <Button
              backgroundColor={{ md: "rgb(74, 109, 255)", base: "unset" }}
              w={{ md: "215px", base: "unset" }}
              height={{ base: "unset", md: "58px" }}
              cursor="pointer"
              m={{ base: "unset", md: "40px 0px 30px" }}
              borderRadius="0"
            >
              <Text
                as="a"
                href={data.buttonUrl}
                target="_blank"
                color={{ base: "rgb(74, 109, 255)", md: "#fff" }}
              >
                {data.buttonName}
              </Text>
              <Img
                src={arrow}
                alt="arrow "
                pl="9px"
                display={{ base: "block", md: "none" }}
              />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
