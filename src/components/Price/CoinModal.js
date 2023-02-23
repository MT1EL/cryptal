import {
  Modal,
  ModalOverlay,
  ModalContent,
  Flex,
  Img,
  Box,
  Text,
  Link,
  Button,
} from "@chakra-ui/react";
import React from "react";
import arrowUp from "../../assets/arrow-up-green.svg";
import arrowDown from "../../assets/arrow-down-red.svg";
import close_icon from "../../assets/close_icon.svg";
import Chart from "react-apexcharts";
import doc from "../../assets/doc.svg";
import wrld from "../../assets/wrld.svg";
import chartUp from "../../assets/chartUp.svg";
const lang = window.location.pathname.slice(1, 3);
const CoinModal = ({
  isOpen,
  onClose,
  currencyCode,
  change,
  currencyName,
  prices,
  volume,
  totalSupply,
  circulatingSupply,
  issueDate,
  content,
  webSite,
  whitePaper,
  explorer,
}) => {
  const buttonLabel = JSON.parse(localStorage.getItem("webData")).pageProps.page
    .btnName;
  const data = [
    {
      ka: "ჯამური მიწოდება",
      en: "Total Supply",
      result: totalSupply,
    },
    {
      ka: "მიმოქცევაშია",
      en: "Circulating Supply",
      result: circulatingSupply,
    },
    {
      ka: "შეიქმნა",
      en: "Issue Date",
      result: issueDate,
    },
  ];
  const options = {
    series: [
      {
        name: "prices",
        data: prices,
      },
    ],
    grid: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },

    chart: {
      sparkline: {
        enabled: false,
      },
      zoom: {
        enabled: false,
      },
      brush: {
        enabled: false,
        target: undefined,
        autoScaleYaxis: false,
      },
      toolbar: {
        show: false,
      },
    },

    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    colors:
      change === "0.00" ? ["#000000"] : change < 0 ? ["#f04a6a"] : ["#08aa7d"],
    height: "350",
    markers: {
      size: 0,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    stroke: {
      curve: "smooth",
    },
  };
  const buttonData = [
    { image: wrld, label: "website", href: webSite },
    { image: doc, label: "White Paper", href: whitePaper },
    { image: chartUp, label: "Block Explorer", href: explorer },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent p="40px 30px 30px">
        <Flex mt="30px" mb="14px" justifyContent="flex-end" bg="#fff">
          <Img src={close_icon} alt="close icon" w="24px" onClick={onClose} />
        </Flex>
        <Flex
          alignItems={"center"}
          fontSize={"12px"}
          lineHeight="17px"
          color="rgb(108, 118, 134)"
          justifyContent={"space-between"}
        >
          <Flex
            pb="14px"
            borderBottom={"1px solid rgb(242, 244, 250)"}
            w="100%"
          >
            <Img
              src={`https://static.cryptal.com/icons/svg/coins/${currencyCode.toLowerCase()}.svg`}
              alt="logo"
              mr="14px"
              height="36px"
            />
            <Flex flex="1 1 0%" justifyContent={"space-between"}>
              <Box>
                <Text fontSize="14px" color="rgb(22, 22, 41)" fontWeight="500">
                  {currencyName}
                </Text>
                <Text>{volume}</Text>
              </Box>
              <Flex alignItems="center">
                <Box>
                  <Text
                    color="rgb(80, 82, 108) "
                    fontWeight={"500"}
                    textAlign="right"
                  >
                    {prices[prices.length - 1]}
                  </Text>
                  <Flex
                    alignItems="center"
                    justifyContent={"flex-end"}
                    fontWeight="700"
                  >
                    <Img
                      src={arrowUp}
                      alt="arrow "
                      h="9px"
                      mr="2px"
                      display={change > 0 ? "block" : "none"}
                    />
                    <Img
                      src={arrowDown}
                      alt="arrow "
                      h="9px"
                      mr="2px"
                      display={change < 0 ? "block" : "none"}
                    />
                    <Text
                      color={
                        change === "0.00"
                          ? "#000000"
                          : change < 0
                          ? "#f04a6a"
                          : "#08aa7d"
                      }
                    >
                      {change} %
                    </Text>
                  </Flex>
                </Box>
                <Box
                  maxH="34px"
                  bottom="37px"
                  zIndex={"-1"}
                  position="relative"
                >
                  <Box minH="120px">
                    <Box w="108px" h="105px">
                      <Chart
                        options={options}
                        series={options.series}
                        type="area"
                        width="108px"
                        height={"105"}
                      />
                    </Box>
                  </Box>
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Box
          my="20px"
          fontSize="12px"
          lineHeight="17px"
          color="rgb(108, 118, 134)"
        >
          {data.map((item, index) => (
            <Flex key={index}>
              <Text fontWeight={"600"}>
                {lang === "ka" ? item.ka : item.en}:{" "}
              </Text>
              <Text> {item.result}</Text>
            </Flex>
          ))}
        </Box>
        <Box m="0 0 22px" h="calc(100vh - 423px)" overflow={"hidden"}>
          <Text
            m="unset"
            fontSize="12px"
            lineHeight="17px"
            color="rgb(108, 118, 134)"
          >
            {content.description
              .replace(/(<([^>]+)>)/gi, " ")
              .replace(/&nbsp;/g, "")}
          </Text>
        </Box>
        <Flex mb="26px" justifyContent={"space-between"}>
          {buttonData.map((item) => (
            <Link
              color="rgb(74, 109, 255)"
              key={item.label}
              textDecoration={"none"}
              href={item.href}
              target="_blank"
            >
              <Button variant="ghost" fontSize="12px" maxH="42px" px="0">
                <Img src={item.image} alt="world icon" mr="4px" />
                {item.label}
              </Button>
            </Link>
          ))}
        </Flex>
        <Button
          fontSize={"12px"}
          maxHeight="42px"
          p="12px 30px"
          bg="rgb(234, 238, 255)"
          color="rgb(74, 109, 255)"
          borderRadius={"0"}
        >
          {buttonLabel.buyNow}
        </Button>
      </ModalContent>
    </Modal>
  );
};
export default CoinModal;
