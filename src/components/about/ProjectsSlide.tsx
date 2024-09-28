import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { aboutText } from "../../translation/about";
import { FigmaIcon, GitIcon } from "../icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export const ProjectsSlide: React.FC = () => {
  const text = aboutText;
  const [isLargerThanXl] = useMediaQuery("(min-width: 80em)");
  const [isSmallerThanLg] = useMediaQuery("(max-width: 62em)");

  const makeItems = Object.values(text.projectsList).map((item, index) => {
    return (
      <GridItem
        as={Flex}
        key={index}
        color="#EFEFEF"
        maxW="100%"
        maxH="100%"
        direction="column"
        align="center"
        justify={{ base: "space-between", lg: "center" }}
      >
        <Text
          mb={{ base: "8%" }}
          fontSize={{
            base: "140%",
            md: "140%",
            xl: "180%",
            "2xl": "120%",
          }}
          fontWeight={600}
        >
          {item.name}
        </Text>
        <Flex
          userSelect="none"
          justify="center"
          position="relative"
          mb={{ base: "10%", sm: "6%", xl: "10%" }}
          w={{ base: "full", lg: "50%", xl: "90%" }}
          borderRadius={16}
        >
          <Image
            margin="1px"
            src={item.image}
            borderRadius={16}
            objectFit={{ base: "contain", lg: "cover", "2xl": "contain" }}
          />
          <Box
            userSelect="none"
            fontSize={{
              base: "70%",
              md: "70%",
              lg: "80%",
              xl: "100%",
              "2xl": "100%",
            }}
            w="full"
            height="full"
            bgColor="#0F0F0F"
            borderRadius={16}
            position="absolute"
            alignContent="center"
            p={{ base: "5%", lg: "2%", "2xl": "5%" }}
            transition="all 200ms"
            fontWeight={500}
            opacity={0}
            _hover={{ opacity: 0.9 }}
          >
            {item.description}
          </Box>
        </Flex>
        <Text
          fontSize={{
            base: "80%",
            xl: "100%",
            "2xl": "110%",
          }}
          whiteSpace="nowrap"
          fontWeight={400}
        >
          {item.tecnologies}
        </Text>
        <Flex
          align="center"
          justify="center"
          gap={{ base: "30%", lg: "30%" }}
          minW={20}
          my={{ base: "2%", lg: "4%", xl: "6%" }}
        >
          <GitIcon
            _hover={{ color: "#F04A00" }}
            transition="all 200ms"
            cursor="pointer"
            onClick={() => window.open(item.gitLink, "_blank")}
            w={{ base: "35%", sm: "30%", lg: "30%", xl: "45%" }}
            maxW={{ base: 10, md: "unset" }}
          />
          {item.figma && (
            <FigmaIcon
              _hover={{ color: "#F04A00" }}
              transition="all 200ms"
              cursor="pointer"
              onClick={() => window.open(item.figma, "_blank")}
              w={{ base: "25%", sm: "25%", lg: "25%", xl: "40%" }}
              maxW={{ base: 10, md: "unset" }}
            />
          )}
        </Flex>
      </GridItem>
    );
  });

  return (
    <>
      {isLargerThanXl && (
        <Grid
          w="full"
          gap={10}
          px={20}
          templateColumns={{ base: "1fr 1fr", xl: "repeat(3, 1fr)" }}
          alignItems="center"
        >
          {makeItems}
        </Grid>
      )}
      {!isLargerThanXl && (
        <Flex
          direction="column"
          w="full"
          justify="center"
          mt={{ base: "4%", md: 0 }}
          gap={{ base: "2%", lg: "6%" }}
        >
          {isSmallerThanLg && (
            <Flex
              direction="column"
              px="3%"
              w="full"
              align="start"
              my="4%"
              opacity={0.7}
            >
              <Text
                cursor="pointer"
                userSelect="none"
                fontSize="140%"
                fontWeight={600}
                color="#F04A00"
              >
                {text.projects}
              </Text>
              <Flex w="full" h="2px" bgColor="#F04A00" />
            </Flex>
          )}

          <Swiper
            slidesPerView={!isSmallerThanLg ? 2.2 : 1.2}
            spaceBetween={!isSmallerThanLg ? 10 : 20}
            centeredSlides={isSmallerThanLg}
            navigation={!isSmallerThanLg}
            pagination={{
              clickable: true,
            }}
            className="projectsSwiper"
            allowTouchMove={true}
            modules={[Pagination, Navigation]}
          >
            {makeItems.map((item, index) => (
              <SwiperSlide key={index} className="projectsSlide">
                {item}
              </SwiperSlide>
            ))}
          </Swiper>
        </Flex>
      )}
    </>
  );
};
