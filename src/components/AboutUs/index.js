import { Box, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Body from "./Body";
import Header from "./Header";
import Investors from "./Investors";
import Contact from "./Contact";

function AboutUs() {
  const [data, setData] = useState();
  const locale = useSelector((state) => state.locale[0]);
  useEffect(() => {
    const url = `https://ge.cryptal.com/_next/data/eldRANH3LlG6sSgpDU-2H/${locale}/about-us.json?lang=${locale}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.pageProps.page));
  }, []);
  if (!data) {
    return <Spinner />;
  }
  return (
    <Box maxW="100%" overflowX="hidden">
      <Header header={data.header} />
      <Body about={data.about} buildFuture={data.buildFuture} />
      <Investors partners={data.partners} />
      <Contact contact={data.contact} />
    </Box>
  );
}

export default AboutUs;
