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
    <Box maxW="sm" borderRadius="lg" overflow="hidden" mx="auto">
      <Box
        w={{ base: "235px", sm: "300px", md: "330", lg: "350" }}
        h={{ base: "460px", sm: "440" }}
        bg="#ffff"
        borderRadius="10px"
        p={4}
        m={5}
        mx="auto"
        opacity="0.8"
      >
        <Stack textAlign="center">
          <Image
            borderRadius="full"
            boxSize="180px"
            src={imageUrl}
            alt={workName}
            m="auto"
          />

          <Text className={styles.title} fontSize="lg" fontWeight="bold">
            Title
          </Text>
          <Text fontSize="lg" fontWeight="bold">{workName}</Text>
          <Text className={styles.title} fontSize="lg" fontWeight="bold">
            Description
          </Text>
          <Text fontSize="sm" fontWeight="bold">{description}</Text>
          <Text fontSize="lg" fontWeight="bold">
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
