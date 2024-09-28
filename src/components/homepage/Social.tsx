import { Flex } from "@chakra-ui/react";
import { GitIcon, InIcon, BskIcon, CvIcon } from "../icons";
export const Social: React.FC = () => {
  return (
    <Flex
      w="full"
      align="center"
      justify="center"
      gap={{ base: "5%", lg: 0 }}
      direction={{ base: "row", lg: "column" }}
    >
      <GitIcon
        w={{ base: "6%", lg: "60%", xl: "45%" }}
        _hover={{ color: "#F04A00" }}
        cursor={"pointer"}
        onClick={() => window.open("https://github.com/rhtua", "_blank")}
      />
      <InIcon
        w={{ base: "10%", lg: "60%", xl: "45%" }}
        _hover={{ color: "#F04A00" }}
        cursor={"pointer"}
        onClick={() =>
          window.open("https://www.linkedin.com/in/rhtua/", "_blank")
        }
      />
      <BskIcon
        _hover={{ color: "#F04A00" }}
        w={{ base: "8%", lg: "60%", xl: "45%" }}
        cursor={"pointer"}
        onClick={() =>
          window.open("https://bsky.app/profile/rhtua.com.br  ", "_blank")
        }
      />
      <CvIcon
        w={{ base: "7%", lg: "60%", xl: "45%" }}
        cursor={"pointer"}
        _hover={{ color: "#F04A00" }}
        onClick={() =>
          window.open("https://www.rhtua.com.br/Arthur-Fusieger-Resume.pdf")
        }
      />
    </Flex>
  );
};
