import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `Helvetica Neue`,
    body: `HelveticaCaps`,
  },
  styles: {
    global: {
      body: {
        bg: "#fcfcfd",
      },
    },
  },
});

export default theme;
