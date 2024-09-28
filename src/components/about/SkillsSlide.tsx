import { Flex, GridItem, Text, useMediaQuery } from "@chakra-ui/react";
import { aboutText } from "../../translation/about";

export const SkillsSlide: React.FC = () => {
  const text = aboutText;
  const [isLargerThanLg] = useMediaQuery("(min-width: 62em)");

  return (
    <Flex
      direction="column"
      h={{ base: "auto", lg: "full" }}
      w="full"
      justify="center"
    >
      {!isLargerThanLg && (
        <Flex
          direction="column"
          px="3%"
          w="full"
          align="start"
          my="4%"
          mb="8%"
          opacity={0.7}
        >
          <Text
            cursor="pointer"
            userSelect="none"
            fontSize={"140%"}
            fontWeight={600}
            color="#F04A00"
          >
            {text.skills}
          </Text>
          <Flex w="full" h="2px" bgColor="#F04A00" />
        </Flex>
      )}
      <Flex
        w="full"
        color="#EBEBEB"
        align="center"
        justifyContent={{ base: "center", xl: "unset" }}
        px={{ base: "4%", lg: "4%", xl: "8%" }}
        direction={{ base: "column", lg: "row" }}
      >
        <Flex
          w={{ base: "100%", xl: "50%" }}
          direction="column"
          align="start"
          pr="2%"
          h={{ base: "auto", lg: "full" }}
          gap={{ base: "5%", lg: "10%", xl: "10%" }}
        >
          <Text
            fontSize={{ base: "130%", md: "100%", lg: "110%", xl: "180%" }}
            fontWeight={700}
          >
            {text.skillList.education.name}
          </Text>
          <Flex direction="column-reverse" justify="start">
            {Object.values(text.skillList.education.items).map(
              (item, index) => {
                return (
                  <Flex
                    direction="column"
                    justify="start"
                    key={index}
                    mb={{ base: "5%", lg: "6%", xl: "8%" }}
                  >
                    <Text
                      fontSize={{
                        base: "110%",
                        md: "100%",
                        lg: "100%",
                        xl: "155%",
                      }}
                      fontWeight={600}
                      textAlign="start"
                    >
                      {item.name}
                    </Text>
                    <Text
                      fontSize={{
                        base: "85%",
                        md: "80%",
                        lg: "74%",
                        xl: "110%",
                      }}
                      fontWeight={500}
                      textAlign="start"
                      textDecoration="underline"
                    >
                      {item.institution}
                    </Text>
                    <Text
                      fontSize={{
                        base: "95%",
                        md: "100%",
                        lg: "100%",
                        xl: "160%",
                      }}
                      fontWeight={600}
                      textAlign="start"
                    >
                      {item.duration}
                    </Text>
                  </Flex>
                );
              }
            )}
          </Flex>
        </Flex>

        <Flex
          h={{ base: "2px", lg: "full" }}
          w={{ base: "full", lg: "2px" }}
          bgColor="#BEBEBE"
          my="10%"
        />

        <Flex
          w={{ base: "100%", xl: "50%" }}
          direction={{ base: "column", md: "row", lg: "column" }}
          align="start"
          gap="10%"
          mb={{ base: "10%", md: 0, lg: "4%" }}
          h={{ base: "auto", lg: "full" }}
          pl={{ base: 0, lg: "5%" }}
        >
          <Flex direction="column" align="start" mb={{ base: "7%", lg: 0 }}>
            <Text
              fontSize={{ base: "130%", md: "100%", lg: "110%", xl: "180%" }}
              fontWeight={700}
              mb="8%"
            >
              {text.skillList.hardSkills.name}
            </Text>
            <Flex w="full" gap={3} flexWrap="wrap">
              {Object.values(text.skillList.hardSkills.items).map(
                (item, index) => {
                  return (
                    <GridItem
                      key={index}
                      as={Flex}
                      w="fit-content"
                      justify="center"
                      borderWidth="1px"
                      borderRadius={8}
                      px={2}
                    >
                      <Text
                        fontSize={{
                          base: "90%",
                          md: "80%",
                          lg: "70%",
                          xl: "110%",
                        }}
                        fontWeight={500}
                        textAlign="start"
                      >
                        {item}
                      </Text>
                    </GridItem>
                  );
                }
              )}
            </Flex>
          </Flex>

          <Flex direction="column" align="start">
            <Text
              fontSize={{ base: "130%", md: "100%", lg: "110%", xl: "180%" }}
              fontWeight={700}
              mb="8%"
            >
              {text.skillList.softSkills.name}
            </Text>
            <Flex w="full" gap={3} flexWrap="wrap">
              {Object.values(text.skillList.softSkills.items).map(
                (item, index) => {
                  return (
                    <GridItem
                      key={index}
                      as={Flex}
                      w="fit-content"
                      justify="center"
                      borderWidth="1px"
                      borderRadius={8}
                      px={2}
                    >
                      <Text
                        fontSize={{
                          base: "90%",
                          md: "80%",
                          lg: "70%",
                          xl: "110%",
                        }}
                        fontWeight={500}
                        textAlign="start"
                      >
                        {item}
                      </Text>
                    </GridItem>
                  );
                }
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
