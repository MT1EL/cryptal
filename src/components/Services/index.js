import { Text, Box, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import OtcService from "./OtcService";
import Solution from "./Solution";
import Support from "./Support";

function Service() {
  const [serviceData, setServiceData] = useState();
  const locale = useSelector((state) => state.locale[0]);
  useEffect(() => {
    const url = `https://ge.cryptal.com/_next/data/eldRANH3LlG6sSgpDU-2H/${locale}/services.json?lang=${locale}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, []);

  if (!serviceData) {
    return <Spinner />;
  }
  const dataPageProps = serviceData.pageProps.page;
  return (
    <Box>
      <Header data={dataPageProps.header} />
      <Box p="10px 0px 0px">
        <OtcService
          data={dataPageProps.otcServices}
          subTitle={dataPageProps.header.SubTitle}
        />
        <Solution data={dataPageProps.consumerMarket} />
        <Support data={dataPageProps.contactUs} />
      </Box>
    </Box>
  );
}

export default Service;
