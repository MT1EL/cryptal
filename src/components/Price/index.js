import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Img,
  InputRightElement,
  Select,
  Divider,
  Center,
} from "@chakra-ui/react";
import React, { useState } from "react";
import search from "../../assets/search.svg";
import Body from "./Body";
function Price() {
  const [inputText, setInputText] = useState();
  const data = JSON.parse(localStorage.getItem("webData"));
  const handleInput = (e) => {
    setInputText(e.target.value);
  };
  return (
    <Box p={{ base: "10px 0px 0px", md: "30px 0px 60px" }}>
      <Box
        p={{ base: "0px 5%", md: "0px 16.7%" }}
        w="100%"
        mt={{ base: "4em", md: "8em" }}
      >
        {/* m={{ base: "86px 0px", md: "155px 0px 90px" }} */}
        <Box>
          <Flex justifyContent="space-between">
            <Box display={{ base: "none", md: "flex" }} flexDirection="column">
              <Text
                fontSize="34px"
                fontWeight="700"
                m="0px 0px 4px"
                color="rgb(27, 29, 70)"
                fontFamily={"HelveticaCaps"}
              >
                {data.pageProps.page.header.tabTitle}
              </Text>
              <Text
                fontSize="22px"
                color="rgb(124, 126, 168)"
                m="0"
                dangerouslySetInnerHTML={{
                  __html: data.pageProps.page.header.text,
                }}
              ></Text>
            </Box>
            <Box mb={{ base: "30px", md: "60px" }} maxW="100%">
              <InputGroup
                w="443px"
                maxW="100%"
                borderColor="rgb(231, 231, 240)"
              >
                <InputLeftElement
                  pointerEvents="none"
                  children={<Img src={search} alt="search" />}
                  display={{ base: "none", md: "flex" }}
                />
                <Input
                  fontSize={"13px"}
                  borderRadius="0px"
                  placeholder="მოძებნეთ კრიპტოვალუტა"
                  _placeholder={{
                    color: "rgb(183, 184, 206) !important",
                  }}
                  onChange={handleInput}
                />

                <InputRightElement width="5em" h="100%" m="0" p="0">
                  <Divider orientation="vertical" h="50%" />{" "}
                  <Select
                    h={{ base: "40px", md: "58px" }}
                    border="none"
                    fontSize={{ base: "14px", md: "18px" }}
                    color="rgb(183, 184, 206) !important"
                  >
                    <option value="Gel">Gel</option>
                    <option value="Usd">Usd</option>
                    <option value="Eur">Eur</option>
                  </Select>
                </InputRightElement>
              </InputGroup>
            </Box>
          </Flex>
          <Body inputText={inputText} />
        </Box>
      </Box>
    </Box>
  );
}

export default Price;
