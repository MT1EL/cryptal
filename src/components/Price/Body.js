import { Flex, Text, Box, Img, Spinner } from "@chakra-ui/react";
import React from "react";
import arrowUp from "../../assets/caret-top-small.svg";
import arrowDown from "../../assets/caret-bottom-small.svg";
import CoinInfo from "./CoinInfo";
import { useSelector } from "react-redux";
function Body({ inputText }) {
  const data = useSelector((state) => state.data.pageProps.coins);
  const labels = [
    { label: "Coin name", procent: { base: "1 1 22%", md: "1 1 19%" } },
    { label: "Last price", procent: { base: "1 1 40%", md: "1 1 11%" } },
    { label: "Volume", procent: { base: "1 1 40%", md: "1 1 11%" } },
    { label: "24H", procent: { base: "1 1 20%", md: "1 1 20%" } },
  ];
  if (!data) {
    return <Spinner color="#4a6dff" />;
  }

  const filteredData = data.filter((item) =>
    inputText
      ? item.currencyName.toLowerCase().includes(inputText.toLowerCase())
      : item
  );
  return (
    <Box maxW="100%">
      <Flex alignItems="center">
        {labels.map((item) => (
          <Flex
            alignItems="center"
            key={item.label}
            flex={item.procent}
            justifyContent={
              item.label === "Coin name" ? "flex-start" : "flex-end"
            }
            minW="80px"
            py="10px"
          >
            <Text
              color="rgb(179, 188, 203)"
              fontSize={{ base: "13px", md: "14px" }}
            >
              {item.label}
            </Text>
            <Flex flexDirection="column" gap="2px">
              <Img src={arrowUp} alt="arrow up" />
              <Img src={arrowDown} alt="arrow Down" />
            </Flex>
          </Flex>
        ))}
        <Flex w="54px" py="10px" display={{ base: "none", md: "flex" }} />
      </Flex>
      <Box>
        {filteredData.map((item) => (
          <CoinInfo
            key={item.currencyName}
            content={item.content}
            change={item.change}
            circulatingSupply={item.circulatingSupply}
            currencyCode={item.currencyCode}
            currencyName={item.currencyName}
            explorer={item.explorer}
            issueDate={item.issueDate}
            prices={item.prices}
            totalSupply={item.totalSupply}
            volume={item.volume}
            webSite={item.webSite}
            whitePaper={item.whitePaper}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Body;
