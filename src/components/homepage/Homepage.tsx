import { Flex, Spacer, Text, Box } from "@chakra-ui/react";
import { homeText } from "../../translation";
import "./button.css";

export const Homepage: React.FC<{ slideTo: (index: number) => void }> = ({
  slideTo,
}) => {
  const text = homeText;
  return (
    <Flex
      w="full"
      h="full"
      className="background"
      align="center"
      color="#ebebeb"
      justify="end"
      direction="column"
      fontSize={{
        base: "180%",
        sm: "170%",
        md: "180%",
        lg: "280%",
        xl: 72,
      }}
    >
      <Flex
        w="full"
        h="full"
        align="center"
        justify={{ base: "end", lg: "center" }}
        direction="column"
        px="2%"
        mt={{ base: 0, lg: "30%" }}
        mb={{ base: "5%", lg: 0 }}
      >
        <Flex zIndex={1} fontWeight={600}>
          <Text>
            {text.hi}
            <Text as="span" color="#F04A00">
              ,
            </Text>
          </Text>
        </Flex>
        <Flex zIndex={1} fontWeight={600} mb={8}>
          <Text>
            {text.se}
            <Text as="span" color="#F04A00">
              .
            </Text>
          </Text>
        </Flex>
        <Text
          fontSize={{
            base: "60%",
            sm: "30%",
            md: "30%",
            lg: "30%",
            xl: 22,
          }}
          zIndex={1}
          fontWeight={400}
        >
          {text.description}
        </Text>
      </Flex>
      <Box
        fontSize={{ base: 14, lg: 19 }}
        id="container"
        mb={{ base: "2%" }}
        mt={{ base: "4%" }}
        onClick={() => slideTo(1)}
      >
        <button className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">{text.knowMore}</span>
        </button>
      </Box>
    </Flex>
  );
};
