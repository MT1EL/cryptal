import { Box, Flex, Text, Button, Img } from "@chakra-ui/react";
import doc from "../../assets/doc.svg";
import wrld from "../../assets/wrld.svg";
import chartUp from "../../assets/chartUp.svg";
const AdditionalInfo = ({
  totalSupply,
  circulatingSupply,
  issueDate,
  webSite,
  whitePaper,
  explorer,
  currencyCode,
  content,
}) => {
  const data = JSON.parse(localStorage.getItem("webData"));
  const infoTitles = data.pageProps.page.infoTitles;
  const resultArr = [totalSupply, circulatingSupply, issueDate];

  return (
    <Box>
      <Box pb="4px">
        {infoTitles.map((item, index) => (
          <Flex
            key={item.description}
            fontSize="16px"
            lineHeight="28px"
            color="rgb(108, 118, 134)"
          >
            <Text>{item.description}: </Text>
            <Text> {resultArr[index]}</Text>
          </Flex>
        ))}
      </Box>
      <Flex fontSize="16px" lineHeight="28px" color="rgb(108, 118, 134)">
        {content.description
          .replace(/(<([^>]+)>)/gi, "")
          .replace(/&nbsp;/g, "")}
      </Flex>
      <Flex mt="20px" alignItems={"center"} justifyContent="space-between">
        <Button
          fontSize="16px"
          h="43px"
          p="12px 30px"
          bg="rgb(234, 238, 255)"
          color="rgb(74, 109, 255)"
          borderRadius="0px"
          as="a"
          href={`https://ge.cryptal.com/ex/${currencyCode}-GEL`}
          target="_blank"
        >
          მსურს ყიდვა
        </Button>
        <Flex gap="1em" color="rgb(74, 109, 255)" fontSize="16px">
          <Flex p="11px 0px 11px 45px" gap="4px" alignItems={"center"}>
            <Img src={wrld} alt="world svg" />
            <Text as="a" href={webSite} target="_blank">
              Website
            </Text>
          </Flex>
          <Flex p="11px 0px 11px 45px" gap="4px" alignItems={"center"}>
            <Img src={doc} alt="document svg" />
            <Text as="a" href={whitePaper} target="_blank">
              White Paper
            </Text>
          </Flex>
          <Flex p="11px 0px 11px 45px" gap="4px" alignItems={"center"}>
            <Img src={chartUp} alt="cart svg" />
            <Text as="a" href={explorer} target="_blank">
              Block Explorer
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AdditionalInfo;
