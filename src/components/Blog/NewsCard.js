import { Text, Box, Img, Flex } from "@chakra-ui/react";
import React from "react";
import clock from "../../assets/clock.svg";
function NewsCard({ smallImage, date, title, description, tag, time }) {
  return (
    <Box
      as="a"
      borderRadius={"8px"}
      display="inline-flex"
      flexDirection={"column"}
      cursor="pointer"
      overflow="hidden"
      justifyContent={"space-between"}
      border={{ md: "1px solid rgb(225, 225, 242)" }}
    >
      <Box
        maxW="100%"
        minH="45%"
        maxH="305px"
        w="100%"
        h="217px"
        borderRadius={"8px"}
        minW={{ base: "100%", md: "unset" }}
        overflow="hidden"
      >
        <Img src={smallImage} alt="poster" objectFit={"fill"} minH="100%" />
      </Box>
      <Box
        p={{ base: "5px", md: "26px 40px 30px" }}
        display="flex"
        flexDirection={"column"}
        justifyContent="space-between"
      >
        <Text
          fontSize="14px"
          lineHeight={"20px"}
          color="rgb(124, 126, 168)"
          display={{ base: "none", md: "block" }}
        >
          {date}
        </Text>
        <Text
          fontSize={{ base: "18px", md: "12px" }}
          lineHeight={{ base: "26px", md: "29px" }}
          mt="12px"
          fontWeight="600"
          color="rgb(81, 83, 118)"
        >
          {title}
        </Text>
        <Text
          maxH={{ base: "60px", md: "unset" }}
          m={{ base: "4px 0px 18px", md: "16px 0px 28px" }}
          fontSize="14px"
          lineHeight={"20px"}
          color="rgb(0, 0, 0)"
        >
          {description.replace(/(<([^>]+)>)/gi, "").replace(/&nbsp;/g, "")}
        </Text>
        <Flex alignItems={"center"} justifyContent="space-between">
          <Text
            p={{ base: "4px 17px", md: "8px 14px" }}
            fontSize="12px"
            color="rgb(72, 72, 100)"
            cursor={"pointer"}
            lineHeight="20px"
            bg="rgb(242, 245, 255)"
            order={{ base: "2", md: "unset" }}
          >
            {tag}
          </Text>
          <Flex
            color="rgb(170, 171, 199)"
            fontSize="12px"
            alignItems="center"
            lineHeight="20px"
          >
            <Text
              color={"rgb(124, 126, 168)"}
              pr="8px"
              fontSize={{ base: "12px", md: "14px" }}
              borderRight="1px solid rgb(229, 229, 237)"
              display={{ md: "none" }}
            >
              {date}
            </Text>
            <Img src={clock} alt="clock icon" mr="8px" ml="6px" />
            {time}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default NewsCard;
