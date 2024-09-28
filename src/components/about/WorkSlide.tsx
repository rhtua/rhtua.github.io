import { Flex, Grid, GridItem, Text, useMediaQuery } from "@chakra-ui/react";
import { aboutText } from "../../translation/about";

export const WorkSlide: React.FC = () => {
  const text = aboutText;
  const [isLargerThanLg] = useMediaQuery("(min-width: 62em)");

  return (
    <Flex
      w={{ base: "full", lg: "full" }}
      h={{ base: "auto", lg: "full" }}
      direction="column"
      justify="center"
    >
      {!isLargerThanLg && (
        <Flex
          direction="column"
          px={4}
          w="full"
          align="start"
          my={"5%"}
          mt={"3%"}
          opacity={0.7}
        >
          <Text
            cursor="pointer"
            userSelect="none"
            fontSize="140%"
            fontWeight={600}
            color="#F04A00"
          >
            {text.work}
          </Text>
          <Flex w="full" h="2px" bgColor="#F04A00" />
        </Flex>
      )}
      {Object.values(text.workExperiences).map((item, index) => {
        return (
          <Flex
            key={item.name}
            direction={{ base: "row", lg: "column-reverse" }}
            gap={4}
            ml={{ base: "5%", lg: 0 }}
            mb={{ base: 0, lg: "3%", xl: "4%" }}
            w="full"
            px={{ base: 0, lg: 8 }}
          >
            <Flex
              ml={2}
              w={{ base: "2px", lg: "full" }}
              direction="column"
              align="center"
            >
              {!isLargerThanLg && (
                <>
                  <Flex
                    h={index === 0 ? "12%" : "7%"}
                    w="2px"
                    bgColor="#FEFEFE"
                  />
                  <Flex
                    h={3}
                    w={3}
                    p="2px"
                    bgColor="#FEFEFE"
                    borderRadius="full"
                  >
                    <Flex
                      h="full"
                      w="full"
                      bgColor="#0F0F0F"
                      borderRadius="full"
                    />
                  </Flex>
                </>
              )}
              <Flex
                h={{ base: "full", lg: "2px" }}
                w={{ base: "2px", lg: "full" }}
                bgColor="#FEFEFE"
              />
            </Flex>
            <Grid
              px={{ base: 0, lg: "5%" }}
              color="#FEFEFE"
              w="full"
              opacity={0.9}
              gap={{ base: 4, lg: 0 }}
              templateColumns={{
                base: "1fr",
                lg: "2fr 3fr 4fr",
              }}
            >
              <Flex
                direction="column"
                align="start"
                pl={{ base: "10%", lg: 0 }}
                justify={{ base: "space-between", lg: "center" }}
              >
                <Text
                  whiteSpace="nowrap"
                  fontSize={{
                    base: "115%",
                    lg: "120%",
                    xl: "160%",
                    "2xl": "200%",
                  }}
                  fontWeight={600}
                >
                  {item.period}
                </Text>
                <Text
                  whiteSpace="nowrap"
                  fontSize={{
                    base: "80%",
                    xl: "100%",
                    "2xl": "115%",
                  }}
                  fontWeight={500}
                >
                  {item.timespan}
                </Text>
              </Flex>
              <GridItem
                alignContent="center"
                px={{ base: 0, lg: 6, xl: 12 }}
                w="full"
                rowStart={{ base: 1, lg: "auto" }}
              >
                <Text
                  fontSize={{
                    base: "120%",
                    xl: "160%",
                    "2xl": "200%",
                  }}
                  textAlign="start"
                  mt={index === 0 ? "4%" : 0}
                  whiteSpace={item.name.length > 12 ? "unset" : "nowrap"}
                  fontWeight={700}
                >
                  {item.name}
                </Text>
              </GridItem>
              <GridItem
                as={Flex}
                alignContent="center"
                pl={{ base: "10%", lg: "6%" }}
                justifyContent="end"
                w={{ base: "fit-content", lg: "full" }}
              >
                <Flex
                  direction="column"
                  align="start"
                  mb={{ base: 10, lg: 0 }}
                  justify="center"
                  width={{ base: "100%", lg: "100%", "2xl": "100%" }}
                >
                  <Text
                    fontSize={{
                      base: "110%",
                      lg: "90%",
                      xl: "170%",
                      "2xl": "210%",
                    }}
                    fontWeight={600}
                  >
                    {item.role}
                  </Text>
                  <Text
                    fontSize={{
                      base: "65%",
                      lg: "90%",
                      xl: "100%",
                      "2xl": "120%",
                    }}
                    fontWeight={500}
                    whiteSpace="nowrap"
                  >
                    {item.technologies}
                  </Text>
                </Flex>
              </GridItem>
            </Grid>
          </Flex>
        );
      })}
    </Flex>
  );
};
