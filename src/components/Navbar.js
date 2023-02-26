import React, { useState } from "react";
import {
  Img,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.svg";
import logoMobile from "../assets/Logo_mobile.svg";
import checkMark from "../assets/small-blue-checkmark.svg";
import { useDispatch } from "react-redux";
import { changeToEng, changeToGeo } from "../actions/localeAction";
import { CHANGE_TO_ENGLISH, CHANGE_TO_GEORGIAN } from "../actionTypes";
const lang = window.location.pathname.slice(1, 3);
const pathname = window.location.pathname.slice(3);
export default function WithSubnavigation() {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, onClose, onToggle } = useDisclosure();
  window.onscroll = function () {
    if (window.pageYOffset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <>
      <Flex
        // bg={useColorModeValue("rgb(12, 16, 39)", "gray.800")}
        bg={scrolled ? "rgb(12, 16, 39)" : "transparent"}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: "17px", md: "36px" }}
        // lg: "16.7%"
        px={{ base: "5%", md: "15%" }}
        w="100%"
        align={"center"}
        justifyContent="space-between"
        position={"fixed"}
        top="0"
        zIndex={5}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex>
          <Img
            src={logo}
            alt="logo"
            display={{ base: "none", md: "block" }}
            w="169px"
          />
          <Img
            src={logoMobile}
            alt="logo mobile"
            display={{ base: "block", md: "none" }}
          />
          <Flex
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            ml="55px"
          >
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Text
            w="50px"
            h="50px"
            borderRadius="100%"
            as="a"
            href={
              pathname === ""
                ? lang === "ka"
                  ? "/en"
                  : "/ka"
                : lang === "ka"
                ? `/en${pathname}`
                : `/ka${pathname}`
            }
          >
            {lang === "ka" ? "en" : "ka"}
          </Text>

          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"rgb(74, 109, 255)"}
            h="50px"
            p="0 40px"
            borderRadius="0"
            _hover={{
              bg: "rgb(74, 109, 200)",
            }}
            href="https://auth.cryptal.com/auth/realms/GEX/protocol/openid-connect/auth?client_id=gex-service-public&response_type=code&redirect_uri=https%3A%2F%2Fge.cryptal.com%2Fex"
            target={"_blank"}
          >
            შესვლა
          </Button>
        </Stack>
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <MobileNav />
      </Drawer>
    </>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("rgb(151, 152, 175)", "gray.200");
  const linkHoverColor = useColorModeValue("rgb(74, 109, 255)", "white");
  return (
    <>
      {NAV_ITEMS.map((navItem) => (
        <Link
          as="a"
          href={
            navItem.href.slice(1, 3) !== "en" ||
            navItem.href.slice(1, 3) !== "ka"
              ? `/en${navItem.href.slice(1)}`
              : navItem.href
          }
          key={navItem.label}
          outlineOffset="0px"
          outline="0px"
          target={navItem.target}
          fontSize={"16px"}
          letterSpacing="0px"
          p="11px 0px"
          mx="16px"
          lineHeight="21px"
          color={linkColor}
          _hover={{
            textDecoration: "none",
            color: linkHoverColor,
          }}
        >
          {lang === "ka" ? navItem.label : navItem.engLabel}
        </Link>
      ))}
    </>
  );
};

function MobileNav() {
  const data = JSON.parse(localStorage.getItem("webData")).pageProps.settings
    .menus;
  const dispatch = useDispatch();
  return (
    <>
      <DrawerOverlay />
      <DrawerContent
        bg="rgb(35, 35, 56)"
        py="40px"
        px="32px"
        w="80%"
        maxW="80%"
        overflow={"scroll"}
      >
        <Button
          mx="22px"
          mt="5px"
          mb="28px"
          p="13px 22px "
          bg="rgb(74, 109, 255)"
          color="#fff"
          fontWeight={"400"}
          borderRadius="0"
        >
          შესვლა
        </Button>
        <Divider
          w="unset"
          m="15px 22px"
          borderBottom="1px solid rgb(54, 54, 80)"
        />
        <Flex flexDirection={"column"}>
          {data.header.map((item) => (
            <Link
              key={item.id}
              href={
                !item.url
                  ? `/${lang === "" ? "en" : lang}/${item.slug}`
                  : `https://ge.cryptal.com/ex${item.url}`
              }
              target={item.blank ? "_blank" : "_self"}
              cursor="pointer"
              fontSize="16px"
              color="rgb(156, 158, 204)"
              p="13px 22px"
              lineHeight={"17px"}
            >
              {item.title}
            </Link>
          ))}
        </Flex>
        <Divider
          w="unset"
          m="15px 22px"
          borderBottom="1px solid rgb(54, 54, 80)"
        />
        <Flex flexDirection={"column"}>
          {data.footer.map((item) => (
            <Link
              key={item.id}
              href={
                !item.url
                  ? `/${item.slug}`
                  : `https://ge.cryptal.com/ex${item.url}`
              }
              target={item.blank ? "_blank" : "_self"}
              cursor="pointer"
              fontSize="14px"
              color="rgb(98, 100, 126)"
              p="13px 22px"
              lineHeight={"17px"}
            >
              {item.title}
            </Link>
          ))}
        </Flex>
        <Divider
          w="unset"
          m="15px 22px"
          borderBottom="1px solid rgb(54, 54, 80)"
        />
        <Flex
          justifyContent={"space-between"}
          onClick={() => {
            dispatch(changeToEng({ type: CHANGE_TO_ENGLISH }));
          }}
        >
          <CustomLink>
            <span
              style={{
                fontWeight: "700",
                color: lang === "en" ? "rgb(101, 130, 253)" : "unset",
              }}
            >
              English
            </span>
          </CustomLink>
          <Img
            src={checkMark}
            alt="checkMark"
            display={lang === "en" ? "block" : "none"}
          />
        </Flex>
        <Flex
          justifyContent={"space-between"}
          onClick={() => {
            dispatch(changeToGeo({ type: CHANGE_TO_GEORGIAN }));
          }}
        >
          <CustomLink>
            <span
              style={{
                fontWeight: "700",
                color: lang === "ka" ? "rgb(101, 130, 253)" : "unset",
              }}
            >
              ქართული
            </span>
          </CustomLink>
          <Img
            src={checkMark}
            alt="checkMark"
            display={lang === "en" ? "none" : "block"}
          />
        </Flex>
      </DrawerContent>
    </>
  );
}

const CustomLink = ({ children }) => (
  <Link
    cursor="pointer"
    fontSize="14px"
    color="rgb(98, 100, 126)"
    p="13px 22px"
    lineHeight={"17px"}
    href={`/${children.props.children === "ქართული" ? "ka" : "en"}${
      pathname && pathname
    }`}
  >
    {children}
  </Link>
);

const NAV_ITEMS = [
  {
    label: "ფასები",
    engLabel: "Market Prices",
    href: `/${lang}/markets`,
    target: "_self",
  },
  {
    label: "კრიპტოს შეძენა",
    engLabel: "Buy Cripto",
    href: "https://ge.cryptal.com/ex/instant-trade/USDT-EUR",
    target: "_blank",
  },
  {
    label: "Spot ბირჟა",
    engLabel: "Spot Trading",
    href: "https://ge.cryptal.com/ex/GRT-GEL",
    target: "_blank",
  },
  {
    label: "სერვისები",
    engLabel: "Services",
    href: `/${lang}/services`,
    target: "_self",
  },
  {
    label: "ჩვენ შესახებ",
    engLabel: "About Us",
    href: `/${lang}/about-us`,
    target: "_self",
  },
  {
    label: "ბლოგი",
    engLabel: "News",
    href: `/${lang}/blog`,
    target: "_self",
  },
];
