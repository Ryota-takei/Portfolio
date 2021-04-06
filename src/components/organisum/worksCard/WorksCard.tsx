import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { VFC } from "react";

import styles from "./WorksCard.module.css";

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
    <Box maxW="sm"  borderRadius="lg" overflow="hidden" mx="auto">
      <Box
        w="380px"
        h="420px"
        bg="#ffff"
        borderRadius="10px"
        shadow="md"
        p={4}
        m={5}
        mx="auto"
        opacity="0.8"
      >
        <Stack textAlign="center">
          <Image
            borderRadius="full"
            boxSize="200px"
            src={imageUrl}
            alt={workName}
            m="auto"
          />

          <Text className={styles.title} fontSize="lg" fontWeight="bold">
            Title
          </Text>
          <Text fontSize="sm">{workName}</Text>
          <Text className={styles.title} fontSize="lg" fontWeight="bold">
            Description
          </Text>
          <Text fontSize="sm">{description}</Text>
          <Text ontSize="lg" fontWeight="bold">
            <a className={styles.link} href={worksUrl}>
              Website
            </a>{" "}
            /
            <a className={styles.link} href={github}>
              {" "}
              Github
            </a>
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};
