import {
  Text,
  Box,
  Flex,
  Img,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import arrowUp from "../../assets/arrow-up-green.svg";
import arrowDown from "../../assets/arrow-down-red.svg";
import AdditionalInfo from "./AdditionalInfo";
import CoinModal from "./CoinModal";
import Chart from "react-apexcharts";

function CoinInfo({
  change,
  circulatingSupply,
  currencyCode,
  currencyName,
  explorer,
  issueDate,
  prices,
  totalSupply,
  volume,
  webSite,
  whitePaper,
  content,
}) {
  const [clicked, setClicked] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
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
  return (
    <Accordion allowMultiple w="100%" border="none">
      <AccordionItem w="100%" border="none" position="relative">
        <Box
          position="absolute"
          inset="0 0 0 0"
          zIndex={10}
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
        />
        <Box
          mx={{ base: "0px", md: "-66px" }}
          px={{ base: "0px", md: "66px" }}
          borderRadius="9px"
          background="unset"
          transition="all 0.2s ease 0s, transform 0.1s ease 0s;"
          bg={clicked && "rgb(255, 255, 255)"}
          transform={clicked && "scale(1.002)"}
          boxShadow={clicked && "rgb(202 207 217 / 28%) 0px 14px 36px"}
          _hover={{
            bg: "rgb(255, 255, 255)",
            transform: "scale(1.002)",
            boxShadow: "rgb(202 207 217 / 28%) 0px 14px 36px",
          }}
        >
          <Flex
            p={{ base: "12px 4px", md: "27px 0px" }}
            maxH="93px"
            justifyContent="space-between"
            alignItems="center"
            cursor="pointer"
            color="rgb(36, 42, 51)"
            borderBottom={"1px solid rgb(236, 238, 243)"}
            _hover={{
              borderBottomColor: "transparent",
            }}
          >
            <Flex
              display="inline-flex"
              alignItems={"center"}
              justifySelf="self-start"
              flex={{ base: "1 1 22%", md: `1 1 19%` }}
            >
              <Img
                src={`https://static.cryptal.com/icons/svg/coins/${currencyCode.toLowerCase()}.svg`}
                alt="coin logo"
                w={{ base: "26px", md: "42px" }}
                h={{ base: "26px", md: "42px" }}
                mr={{ base: "10px", md: "27px" }}
              />
              <Text
                color="rgb(25, 26, 46)"
                fontSize="20px"
                display={{ base: "none", md: "block" }}
              >
                {currencyName}
              </Text>
              <Text
                color="rgb(118, 120, 160)"
                fontSize={{ base: "14px", md: "20px" }}
                ml="4px"
              >
                ({currencyCode})
              </Text>
            </Flex>
            <Flex
              flex={{ base: "1 1 30%", md: `1 1 11%` }}
              minW={{ base: "unset", md: "160px" }}
              justifyContent={"flex-end"}
              p={{ base: "0 0 0 10px", md: "unset" }}
              fontSize={{ base: "14px", md: "20px" }}
            >
              <Text>{prices[prices.length - 1]}</Text>
            </Flex>
            <Flex
              flex={{ base: "1 1 30%", md: `1 1 11%` }}
              minW={{ base: "unset", md: "160px" }}
              justifyContent={"flex-end"}
              p={{ base: "0 0 0 10px", md: "unset" }}
              fontSize={{ base: "14px", md: "20px" }}
            >
              <Text>{volume}</Text>
            </Flex>
            <Flex
              flex={{ base: "1 1 20%", md: `1 1 18%` }}
              minW={{ base: "70px", md: "220px" }}
              justifyContent={"flex-end"}
              p={{ base: "0 0 0 10px", md: "unset" }}
              alignItems="center"
            >
              <Box
                display="flex"
                gap="4px"
                fontSize={{ base: " 14px", md: "20px" }}
              >
                <Img
                  src={arrowUp}
                  alt="arrow Up"
                  display={change > 0 ? "block" : "none"}
                />
                <Img
                  src={arrowDown}
                  alt="arrow down"
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
                  w="100%"
                  textAlign={"right"}
                >
                  {change}%
                </Text>{" "}
                <Box
                  maxH="34px"
                  bottom="37px"
                  zIndex={"-1"}
                  position="relative"
                  display={{ base: "none", md: "block" }}
                >
                  <Box minH="120px">
                    <Box w="108px" h="105px">
                      <Chart
                        options={options}
                        series={options.series}
                        type="area"
                        width="100%"
                        height={"105"}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Flex>
            <AccordionButton
              w="fit-content"
              p="0"
              ml="22px"
              bg="transparent !important"
              onClick={() => setClicked(!clicked)}
              display={{ base: "none", md: "block" }}
            >
              <Box as="span">
                <AccordionIcon color={clicked && "rgb(74, 109, 255)"} />
              </Box>
              {/* <FontAwesomeIcon icon={faChevronDown} /> */}
            </AccordionButton>
          </Flex>
          <AccordionPanel>
            <AdditionalInfo
              totalSupply={totalSupply}
              circulatingSupply={circulatingSupply}
              issueDate={issueDate}
              webSite={webSite}
              whitePaper={whitePaper}
              explorer={explorer}
              currencyCode={currencyCode}
              content={content}
            />
          </AccordionPanel>
        </Box>
        <CoinModal
          isOpen={isOpen}
          onClose={onClose}
          currencyCode={currencyCode}
          currencyName={currencyName}
          prices={prices}
          change={change}
          volume={volume}
          totalSupply={totalSupply}
          circulatingSupply={circulatingSupply}
          issueDate={issueDate}
          content={content}
          webSite={webSite}
          whitePaper={whitePaper}
          explorer={explorer}
        />
      </AccordionItem>
    </Accordion>
  );
}

export default CoinInfo;
