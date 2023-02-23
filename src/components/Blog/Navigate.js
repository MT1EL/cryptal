import React, { useEffect, useState } from "react";
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
  useDisclosure,
} from "@chakra-ui/react";
import search from "../../assets/search.svg";
import { useDispatch, useSelector } from "react-redux";
import { setTag } from "../../actions/tagsAction";
import TagsDrawer from "./TagsDrawer";
function Navigate({
  data,
  setChoosedTag,
  setLocalTags,
  choosedTag,
  setTagsFilteredData,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const locale = useSelector((state) => state.locale[0]);
  const dispatch = useDispatch();
  useEffect(() => {
    const url = `https://content.cryptal.com/tags?_pick=name,id&_locale=${locale}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(setTag({ data })));
  }, []);
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      mb={{ base: "24px", md: "46px" }}
      justifyContent="space-between"
    >
      <Flex
        order={{ base: "2", md: "unset" }}
        pr={{ base: "22px", md: "unset" }}
        margin={{ base: "0px -5% 0px 0px", md: "unset" }}
        overflow={{ base: "scroll hidden", md: "hidden" }}
        minH={{ base: "44px", md: "unset" }}
        columnGap={{ base: "20px", md: "35px" }}
        whiteSpace={{ base: "nowrap", md: "unset" }}
        alignItems={"center"}
        flex={{ md: "1 1 0%" }}
      >
        {data.map((item) => (
          <Text
            key={item.id}
            cursor="pointer"
            transition="all 0.2s eaase 0s"
            color="rgb(124, 126, 168)"
            fontSize={{ base: "14px", md: " 16px" }}
            // onClick={() => hadndleClick(item.name)}
            onClick={() => setLocalTags(item.name)}
          >
            {item.name}
          </Text>
        ))}
      </Flex>
      <InputGroup
        maxW={{ base: "100%", md: "calc((100% - 98px) / 3)" }}
        w="100%"
        h="40px"
        borderColor="rgb(231, 231, 240)"
      >
        <InputLeftElement
          pointerEvents="none"
          children={<Img src={search} alt="search" w="13px" />}
        />
        <Input fontSize={"13px"} borderRadius="0px" />
        <InputRightElement
          width={locale === "ka" ? "8em" : "5em"}
          h="100%"
          m="0"
          p="0"
        >
          <Divider
            orientation="vertical"
            h="50%"
            mr={locale === "ka" ? "1em" : "0em"}
          />{" "}
          <Select
            h={{ base: "40px", md: "40px" }}
            border="none"
            fontSize={{ base: "14px", md: "18px" }}
            color="rgb(183, 184, 206) !important"
            onClick={onOpen}
          >
            <option value="tags">{locale === "ka" ? "ტეგები" : "tags"}</option>
            <option value="Gel">Gel</option>
            <option value="Usd">Usd</option>
            <option value="Eur">Eur</option>
          </Select>
          <TagsDrawer
            isOpen={isOpen}
            onClose={onClose}
            setChoosedTag={setChoosedTag}
            choosedTag={choosedTag}
            setTagsFilteredData={setTagsFilteredData}
          />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
}

export default Navigate;
