import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps): JSX.Element {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Nalisson Gomes</Text>
          <Text color="gray.300" fontSize="small">nalissongm.pro@gmail.com</Text>
        </Box>
      )}
      <Avatar size="md" name="Nalisson Gomes" src="https://github.com/nalissongm.png" />
    </Flex>
  );
}