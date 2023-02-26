import { Text, Box, Flex, Img } from "@chakra-ui/react";
import React from "react";

function Contact({ contact }) {
  console.log(contact);
  return (
    <Box bg="rgb(244, 248, 251)" p={{ base: "34px 0%", md: "100px 0%" }}>
      <Box p={{ base: "0px 5%", md: "0px 15%", lg: "0px 16.7%" }}>
        <Text
          fontSize={{ base: "14px" }}
          lineHeight={{ base: "18px", md: "22px" }}
          mb="4px"
          color="rgb(124, 126, 168)"
        >
          {contact.title}
        </Text>
        <Text
          fontSize={{ base: "20px", md: "44px" }}
          lineHeight={{ base: "normal", md: "60px" }}
          fontWeight="600"
          m="auto"
        >
          {contact.subTitle}
        </Text>
        <Box
          mt="15px"
          fontSize="12px"
          lineHeight={{ base: "16px", md: "24px" }}
          color="rgb(138, 151, 172)"
          dangerouslySetInnerHTML={{ __html: contact.description }}
        />
        <Flex
          mt={{ base: "18px", md: "60px" }}
          flexDirection="column"
          justifyContent={"space-between"}
          flexWrap="wrap"
        >
          <Flex
            display="inline-flex"
            justifyContent={{ base: "flex-start", md: "space-around" }}
            flex={"0 0 46%"}
            border="1px solid rgb(225, 225, 242)"
            m={"10px 0px"}
            borderRadius="10px"
            maxH="140px"
            maxW="550px"
          >
            <Img src={contact.group[0].img.url} />
            <Box
              p="15px 25px"
              display="flex"
              flexDirection={"column"}
              justifyContent="space-around"
            >
              <Text
                fontSize={{ base: "18px", md: "24px" }}
                lineHeight={{ base: "normal", md: "unset" }}
                mb="4px"
                color="rgb(27, 29, 70)"
                fontWeight="500"
              >
                {contact.group[0].title}
              </Text>
              <Text
                as="a"
                href={contact.group[0].url}
                fontSize="12px"
                color="rgb(74, 109, 255)"
              >
                {contact.group[0].urlName}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Contact;
