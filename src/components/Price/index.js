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
} from "@chakra-ui/react";
import React from "react";
import search from "../../assets/search.svg";
import Body from "./Body";
function Price() {
  const data = JSON.parse(localStorage.getItem("webData"));
  return (
    <Box p={{ base: "10px 0px 0px", md: "30px 0px 60px" }}>
      <Box p={{ base: "0px 5%", md: "0px 16.7%" }} w="100%">
        {/* m={{ base: "86px 0px", md: "155px 0px 90px" }} */}
        <Box>
          <Flex
            justifyContent="space-between"
            display={{ base: "none", md: "flex" }}
          >
            <Box>
              <Text
                fontSize="34px"
                fontWeight="700"
                m="0px 0px 4px"
                color="rgb(27, 29, 70)"
                fontFamily={"HelveticaCaps"}
              >
                {data.pageProps.page.header.tabTitle}
              </Text>
              <Text fontSize="22px" color="rgb(124, 126, 168)" m="0">
                {data.pageProps.page.header.text.replace(/(<([^>]+)>)/gi, "")}
              </Text>
            </Box>
            <Box mb="60px">
              <InputGroup w="443px">
                <InputLeftElement
                  pointerEvents="none"
                  children={<Img src={search} alt="search" />}
                  h="58px"
                />
                <Input
                  borderRadius="0px"
                  placeholder="მოძებნეთ კრიპტოვალუტა"
                  h="58px"
                />
                <InputRightElement width="5em" h="100%" m="0" p="0">
                  <Select h="58px" border="none">
                    <option value="Gel">Gel</option>
                    <option value="Usd">Usd</option>
                    <option value="Eur">Eur</option>
                  </Select>
                </InputRightElement>
              </InputGroup>
            </Box>
          </Flex>
          <Body />
        </Box>
      </Box>
    </Box>
  );
}

export default Price;
