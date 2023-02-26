import React from "react";
import { Box } from "@chakra-ui/react";
function Container({ children }) {
  return (
    <Box p={{ base: "0px 5%", md: "0px 15%", lg: "0px 16.7%" }}>{children}</Box>
  );
}

export default Container;
