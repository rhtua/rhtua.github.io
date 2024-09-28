import { Box, Flex, Text } from "@chakra-ui/react";

export const Opening: React.FC = () => {
  return (
    <Flex className="opening" overflowY="hidden">
      <Flex
        align="end"
        fontSize={30}
        fontWeight={600}
        color="#FEFEFE"
        className="opening-text"
      >
        <Flex>
          <Text>a</Text>
        </Flex>
        <Flex className="middle-text">
          <Flex align="end" gap={1}>
            <Text>rthur</Text>
            <Box w={1.5} h={1.5} borderRadius="full" bgColor="#F04A00" mb={3} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
