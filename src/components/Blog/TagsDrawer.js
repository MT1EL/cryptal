import React, { useEffect } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Box,
  Text,
  Flex,
  Img,
  Spinner,
} from "@chakra-ui/react";
import smallX from "../../assets/small-x.svg";
import { useSelector } from "react-redux";
function TagsDrawer({
  onClose,
  isOpen,
  setChoosedTag,
  choosedTag,
  setTagsFilteredData,
}) {
  const tags = useSelector((state) => state.tags);
  const locale = useSelector((state) => state.locale[0]);

  const handleClick = (name) => {
    if (choosedTag.includes(name)) {
      let index = choosedTag.indexOf(name);
      const d = choosedTag.splice(index, 1);
      setChoosedTag([...choosedTag]);
    } else {
      setChoosedTag((prev) => [...prev, name]);
    }
  };
  useEffect(() => {
    const url = `https://content.cryptal.com/posts?_sort=sort:DESC,id:DESC&_pick=id,sort,date,slug,readTime,title,description,cover,smallCover,categories&_start=0&_limit=6`;
    const tags =
      typeof choosedTag !== "string" ? choosedTag.join("&tags=") : false;

    let finalUrl = tags
      ? url + `&tags=${tags}` + `&_locale=${locale}`
      : url + `&_locale=${locale}`;
    fetch(finalUrl)
      .then((res) => res.json())
      .then((res) => setTagsFilteredData(tags ? res : []));
  }, [choosedTag]);
  if (!tags) {
    return <Spinner />;
  }
  return (
    <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent
        h="50%"
        boxShadow="rgb(27 28 44 / 16%) 0px 9px 26px"
        transform="scale(1)"
        transition="all 0.15s ease 0s"
        borderRadius={"20px 20px 0px 0px"}
        p="36px 36px"
      >
        <Box
          p="12px 10px 0px"
          fontSize={"14px"}
          color="rgb(27, 29, 70)"
          fontWeight={"500"}
          mb="20px"
        >
          <Flex justifyContent="space-between" alignItems="center">
            <Text>{locale === "ka" ? "აირჩიეთ ტეგები" : "Choose Tags"}</Text>
            <Flex
              onClick={() => setChoosedTag([])}
              display={choosedTag.length > 0 ? "flex" : "none"}
            >
              <Text color="rgb(74, 109, 255)" fontSize={"12px"}>
                {locale === "ka" ? "ყველაფრის გასუფთავება" : "  Clear All"}{" "}
              </Text>
              <Img src={smallX} ml="6px" />
            </Flex>
          </Flex>
          <Text mt="10px" fontSize={"12px"} rgb={"138, 151, 172"}>
            {locale === "ka"
              ? "თქვენ შეგიძლიათ გაფილტროთ ძიების შედეგები ტეგების მიხედვით"
              : "Filter search results by tags"}{" "}
          </Text>
          <Flex
            flexWrap="wrap"
            gap="8px"
            p="20px 0px"
            maxH="300px"
            overflow="scroll"
          >
            {tags.map((item) => (
              <Flex
                key={item.id}
                bg={
                  choosedTag.includes(item.id)
                    ? "rgba(74, 109, 255, 0.13)"
                    : "rgb(240, 240, 248)"
                }
                p="10px 16px"
              >
                <Text
                  color={
                    choosedTag.includes(item.id)
                      ? "rgb(74, 109, 255)"
                      : "rgb(138, 138, 185)"
                  }
                  fontSize="12px"
                  onClick={() => handleClick(item.id)}
                >
                  {item.name}
                </Text>
                <Img
                  src={smallX}
                  alt="remove button"
                  ml="6px"
                  display={choosedTag.includes(item.id) ? "block" : "none"}
                />
              </Flex>
            ))}
          </Flex>
        </Box>
      </DrawerContent>
    </Drawer>
  );
}

export default TagsDrawer;
