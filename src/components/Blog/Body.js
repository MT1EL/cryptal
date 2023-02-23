import { Grid, Spinner, Box, Flex, Button, Img } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import more from "../../assets/more.png";
import { useSelector } from "react-redux";
function Body({ localTags, choosedTag, tagsFilteredData }) {
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0);
  const locale = useSelector((state) => state.locale[0]);

  useEffect(() => {
    const url = `https://content.cryptal.com/posts?_sort=sort:DESC,id:DESC&_pick=id,sort,date,slug,readTime,title,description,cover,smallCover,categories&_start=${counter}&_limit=6&_locale=${locale}`;
    fetch(url)
      .then((res) => res.json())
      .then((ndata) => {
        setData([...data, ...ndata]);
      });
  }, [counter]);
  if (data.length === 0) {
    return <Spinner />;
  }
  console.log(tagsFilteredData);
  const filteredData =
    tagsFilteredData.length > 0
      ? tagsFilteredData
      : data.filter((item) =>
          localTags ? item.categories[0].name.includes(localTags) : item
        );

  return (
    <Box>
      <Grid
        rowGap={"34px"}
        columnGap={{ base: "unset", md: "auto" }}
        gridTemplateColumns={{ base: "auto", md: "repeat(3, 364px)" }}
        justifyContent="space-between"
        gap={{ md: "48px" }}
        mt={{ md: "50px" }}
      >
        {filteredData.map((item) => {
          return (
            <NewsCard
              key={item.id}
              smallImage={item.smallCover.url}
              date={item.date}
              title={item.title}
              tag={item.categories[0].name}
              time={item.readTime}
              description={item.description}
            />
          );
        })}
      </Grid>
      <Flex
        alignItems="center"
        justifyContent="center"
        m={{ base: "34px 0px 10px", md: "100px 0px 0px" }}
        display={tagsFilteredData.length > 0 ? "none" : "flex"}
      >
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent="center"
          cursor="pointer"
        >
          <Button
            p="0"
            fontSize={"18px"}
            variant="unstyled"
            fontWeight={"500"}
            color="rgb(74, 109, 255)"
          >
            Read More
          </Button>
          <Img
            src={more}
            alt="see more"
            onClick={() => setCounter(counter + 6)}
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Body;
