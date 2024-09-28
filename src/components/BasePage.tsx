import {
  AbsoluteCenter,
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { mainText } from "../translation/main";
import { Homepage, Opening } from ".";
import { About } from "./about";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useRef } from "react";
import { Social } from "./homepage/Social";

export const BasePage: React.FC = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const [isLargerThanLg] = useMediaQuery("(min-width: 62em)");

  const text = mainText;

  const slideTo = (index: number) => {
    swiperRef?.current?.swiper.slideTo(index);
  };

  return (
    <Flex
      direction="column"
      bgColor="#FEFEFE"
      w="100svw"
      h="100svh"
      align="center"
      overflow="hidden"
      justify="center"
    >
      <Opening />
      {/* Header */}
      <Flex
        h="8%"
        w={"full"}
        align="center"
        justify="space-between"
        px={{ base: "2%", md: "3%", xl: "4%" }}
      >
        {isLargerThanLg && (
          <Flex
            cursor="pointer"
            onClick={() => slideTo(1)}
            className="buttonHover"
            direction="column"
          >
            <Text
              fontSize={{ base: "60%", md: "80%", xl: "100%" }}
              fontWeight={400}
              userSelect="none"
              color="#0F0F0F"
            >
              {text.experience}
            </Text>
            <Box bgColor="#0F0F0F" h="1px" w={0} />
          </Flex>
        )}
        <Flex
          align="end"
          gap={0.5}
          onClick={() => slideTo(0)}
          cursor="pointer"
          mt={-1}
        >
          <Text
            fontSize={{ base: "130%", md: "150%", xl: "220%" }}
            fontWeight={600}
            userSelect="none"
          >
            arthur
            <Text
              as="span"
              color="#F04A00"
              fontSize={{ base: "140%", md: "160%", xl: "110%" }}
            >
              .
            </Text>
          </Text>
        </Flex>
        {isLargerThanLg && (
          <Flex
            cursor="pointer"
            onClick={() => window.open("mailto:contato@rhtua.com.br")}
            className="buttonHover"
            direction="column"
          >
            <Text
              fontSize={{ base: "65%", md: "80%", xl: "100%" }}
              fontWeight={{ base: 500, lg: 400 }}
              userSelect="none"
              color="#0F0F0F"
            >
              {text.contact}
            </Text>
            <Box bgColor="#0F0F0F" h="1px" w={0} />
          </Flex>
        )}
        {!isLargerThanLg && (
          <Menu placement="top" initialFocusRef={undefined}>
            <MenuButton
              w="fit-content"
              className="buttonHover"
              fontSize={{ base: "65%", md: "80%", xl: "100%" }}
              fontWeight={{ base: 500, lg: 400 }}
            >
              {text.menu}
              <Box bgColor="#0F0F0F" h="1px" w={0} />
            </MenuButton>
            <MenuList w="100svw" zIndex={10} border="none" borderRadius={0}>
              <Flex w="full" direction="column" align="center" py="2%" gap={5}>
                <Button
                  borderRadius={4}
                  variant="outline"
                  onClick={() => window.open("mailto:contato@rhtua.com.br")}
                  colorScheme="orange"
                  borderColor="#F04A00"
                  color="#F04A00"
                  minW="50%"
                >
                  {text.getInTouch}
                </Button>
                <Box position="relative" minW="40%">
                  <Box bgColor="#9F9F9F" h="1px" w="full" />
                  <AbsoluteCenter bg="white" px="4">
                    {text.or}
                  </AbsoluteCenter>
                </Box>
                <Social />
              </Flex>
            </MenuList>
          </Menu>
        )}
      </Flex>

      {/* Corpo */}

      <Flex w="full" h="full" px={{ base: 1, lg: 0 }} align="center">
        <Flex h="full" w={{ sm: "2%", md: "3%", xl: "10%" }} />
        <Flex
          w="full"
          h="full"
          bgColor="#0F0F0F"
          borderRadius={16}
          px={{ base: 0, lg: 4 }}
          justify="center"
        >
          <Swiper
            ref={swiperRef}
            className="mySwiper swiper-h"
            allowTouchMove={false}
            direction={"vertical"}
            modules={[Pagination]}
          >
            <SwiperSlide key={0}>
              <Homepage slideTo={slideTo} />
            </SwiperSlide>
            <SwiperSlide key={1}>
              <About />
            </SwiperSlide>
          </Swiper>
        </Flex>
        {/* Side menu */}
        {isLargerThanLg && (
          <Flex h="full" w={{ sm: "2%", md: "3%", xl: "10%" }}>
            <Social />
          </Flex>
        )}
      </Flex>
      <Flex
        h={{ base: "3%", lg: "10%" }}
        w={"full"}
        align="center"
        justify="center"
        px={16}
      >
        <Text fontSize={{ base: "60%", lg: "80%" }}>
          © {new Date().getFullYear()} - {text.rights}
        </Text>
      </Flex>
    </Flex>
  );
};
