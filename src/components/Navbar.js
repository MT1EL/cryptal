import React from "react";
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
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.svg";
import logoMobile from "../assets/Logo_mobile.svg";
const lang = window.location.pathname.slice(1, 3);
const pathname = window.location.pathname.slice(3);

export default function WithSubnavigation() {
  const { isOpen, onClose, onToggle } = useDisclosure();
  return (
    <>
      <Flex
        bg={useColorModeValue("rgb(12, 16, 39)", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: "17px", md: "36px" }}
        px={{ base: "5%", md: "15%", lg: "16.7%" }}
        align={"center"}
        justifyContent="space-between"
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
            href={"#"}
            h="50px"
            p="0 40px"
            borderRadius="0"
            _hover={{
              bg: "rgb(74, 109, 200)",
            }}
          >
            შესვლა
          </Button>
        </Stack>
      </Flex>

      {/* <Collapse in={isOpen} animateOpacity> */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <MobileNav />
      </Drawer>
    </>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("rgb(151, 152, 175)", "gray.200");
  const linkHoverColor = useColorModeValue("rgb(74, 109, 255)", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  // Stack direction={"row"} spacing={4} ml="55px"

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
          // href={navItem.href ?? "#"}
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
          // fontFamily="HelveticaNeueGEO"
        >
          {lang === "ka" ? navItem.label : navItem.engLabel}
        </Link>
      ))}
    </>
  );
};

function MobileNav() {
  return (
    <>
      <DrawerOverlay />
      <DrawerContent bg="rgb(35, 35, 56)">
        <DrawerCloseButton />
        <DrawerHeader>Create your account</DrawerHeader>

        <DrawerBody>
          <Text>toko</Text>
        </DrawerBody>

        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </>
  );
}

const MobileNavItem = ({ label, children, href, isOpen, onToggle }) => {
  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

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
