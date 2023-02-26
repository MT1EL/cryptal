import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import homeBg from "../../assets/landingbG.svg";
function Home() {
  return (
    <Box
      maxW="100vw"
      overflow="hidden"
      backgroundImage={homeBg}
      bgPosition="center"
    >
      {/* <Parallax
        bgImage={homeBg}
        style={{
          height: "300px",
          minWidth: "100vw",
          overflow: "hidden",
          position: "relative",
        }}
      > */}
      <Flex
        p={{ base: "36px 0px 36px", md: "175px 0px 70px" }}
        alignItems="center"
        justifyContent={"center"}
      >
        <Box
          p={{ base: "0px 5%", md: "0px 15%" }}
          w="100%"
          color="rgb(170, 180, 219)"
          textAlign="center"
        >
          <Text
            mb={{ base: "8px", md: "24px", lg: "12px" }}
            fontSize={{ base: "16px", md: "26px" }}
          >
            მოგესალმებით Cryptal-ზე
          </Text>
          <Text
            m={{ base: "0px auto", md: "0px auto 66px" }}
            mx="auto"
            fontSize={{ base: "20px", md: "38px" }}
            lineHeight={{ base: "30px", md: "52px" }}
            maxW={{ md: "63%" }}
            color="#fff"
          >
            უსაფრთხო და მარტივი წვდომა გლობალურ{" "}
            <span style={{ color: "#25D8D1" }}>კრიპტო </span>
            <strong>ბაზრებზე</strong>
          </Text>
          <Box
            as="a"
            href="https://auth.cryptal.com/auth/realms/GEX/protocol/openid-connect/registrations?client_id=gex-service-public&response_type=code&redirect_uri=https%3A%2F%2Fge.cryptal.com%2Fex"
          >
            <Button
              _hover={{
                bg: "rgb(74, 115, 295)",
              }}
              bg="rgb(74, 109, 255)"
              borderRadius="0px"
              color="#fff"
              h={{ base: "42px", md: "58px" }}
              py={{ base: "13", md: "23px" }}
              px={{ base: "42px", md: "74px", xl: "105px" }}
              mt="20px"
              fontSize="14px"
            >
              რეგისტრაცია
            </Button>
          </Box>
        </Box>
      </Flex>
      {/* </Parallax> */}
    </Box>
  );
}

export default Home;
