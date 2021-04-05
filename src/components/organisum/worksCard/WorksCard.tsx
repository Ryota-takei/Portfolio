import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { VFC } from "react";

interface Props {
  imageUrl: string;
  workName: string;
  description: string;
  worksUrl: string;
  github: string;
}

export const WorksCard: VFC<Props> = (props) => {
  const { imageUrl, workName, description, worksUrl, github } = props;

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box
        w="300px"
        h="300px"
        bg="white"
        borderRadius="10px"
        shadow="md"
        p={4}
        m={5}
        mx="auto"
        _hover={{ cursor: "pointer", opacity: 0.8 }}
      >
        <Stack textAlign="center">
          <Image
            borderRadius="full"
            boxSize="160px"
            src={imageUrl}
            alt={workName}
            m="auto"
          />
          <Text fontSize="lg" fontWeight="bold">
            {workName}
          </Text>
          <Text fontSize="sm">{description}</Text>
        </Stack>
      </Box>
    </Box>
  );
};
