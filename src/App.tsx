import * as React from "react";
import "@fontsource/montserrat/100.css";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BasePage } from "./components";

const theme = extendTheme({
  fonts: {
    body: `'Montserrat', sans-serif`,
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <BasePage />
  </ChakraProvider>
);
