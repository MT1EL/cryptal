import { Text, Box, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import homeBg from "../../assets/landingbG.svg";
import Body from "./Body";
import Navigate from "./Navigate";
import { setNewsData } from "../../actions/newsDataAction";
function Blog() {
  const locale = useSelector((state) => state.locale[0]);
  const [data, setData] = useState();
  const [tagsFilteredData, setTagsFilteredData] = useState();
  const dispatch = useDispatch();
  const [choosedTag, setChoosedTag] = useState([]);
  const [localTags, setLocalTags] = useState();
  // console.log(choosedTag);
  useEffect(() => {
    const defaultUrl = `https://content.cryptal.com/categories?_pick=name,id&_locale=${locale}`;
    fetch(defaultUrl)
      .then((res) => res.json())
      // .then((data) => dispatch(setNewsData({ data })));
      .then((data) => setData(data));
  }, []);
  if (!data) {
    return <Spinner />;
  }

  return (
    <Box>
      <Box
        maxW="100vw"
        // mt="-90px"
        position="relative"
        w="100vw"
        top="0"
        overflow="hidden"
        backgroundImage={homeBg}
        backgroundRepeat="no-repeats"
        bgPosition="center top"
        backgroundSize="cover"
      >
        <Box
          p={{ base: "72px 0px 54px", md: "155px 0px 55px" }}
          // w={{ base: "100%", md: "unset" }}
        >
          <Box p={{ base: "0px 5%", md: "0px 15%" }}>
            <Box
              w={{ md: "60%" }}
              maxW={{ base: "255px", md: "533px" }}
              p={{ base: "0px 24px", md: "unset" }}
            >
              <Text
                fontSize={{ base: "17px", md: "20px", lg: "38px" }}
                lineHeight={{ base: "27px", md: "54px" }}
                fontWeight={"500"}
                color="rgb(255, 255, 255)"
                margin="0px 0px 16px"
              >
                News Bits & More
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box p={{ base: "22px 0px", md: "65px 0px 100px" }}>
        <Box p={{ base: "0 5%", md: "0 15%" }} w="100%">
          <Navigate
            data={data}
            setChoosedTag={setChoosedTag}
            choosedTag={choosedTag}
            setTagsFilteredData={setTagsFilteredData}
            setLocalTags={setLocalTags}
          />
          <Body
            localTags={localTags}
            choosedTag={choosedTag}
            tagsFilteredData={tagsFilteredData}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Blog;
