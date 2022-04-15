import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile(): JSX.Element {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Nalisson Gomes</Text>
        <Text color="gray.300" fontSize="small">nalissongm.pro@gmail.com</Text>
      </Box>
      <Avatar size="md" name="Nalisson Gomes" src="https://github.com/nalissongm.png" />
    </Flex>
  );
}