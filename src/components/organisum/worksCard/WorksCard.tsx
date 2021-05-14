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
    <Box borderRadius="lg" overflow="hidden" textAlign="center">
      <Box
        style={{ margin: "auto" }}
        w={{ base: "240px", sm: "300px", md: "320px", lg: "350px" }}
        h={{ base: "470px", sm: "440" }}
        bg="#ffff"
        borderRadius="10px"
        p={{ base: "1", md: "3" }}
        m={{ base: "0", md: "5" }}
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
          <Text fontSize="lg" fontWeight="bold">
            {workName}
          </Text>
          <Text className={styles.title} fontSize="lg" fontWeight="bold">
            Description
          </Text>
          <Text fontSize="sm" fontWeight="bold">
            {description}
          </Text>
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
