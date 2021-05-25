import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { VFC } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import styles from "./WorksCard.module.css";

interface Props {
  imageUrl: string;
  workName: string;
  description: string;
  worksUrl: string;
  github: string;
  otherInformation?: string;
  skill: string;
}

export const WorksCard: VFC<Props> = (props) => {
  const {
    imageUrl,
    workName,
    description,
    worksUrl,
    github,
    otherInformation,
    skill,
  } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box borderRadius="lg" overflow="hidden" textAlign="center">
        <Box
          style={{ margin: "auto" }}
          w={{ base: "240px", sm: "300px", md: "320px", lg: "350px" }}
          h={{ base: "350px", md: "400" }}
          bg="#ffff"
          borderRadius="10px"
          p={{ base: "1", md: "3" }}
          m={{ base: "0", md: "5" }}
          opacity="0.8"
        >
          <Stack textAlign="center" alignItems="center">
            <Image
              borderRadius="5px"
              w={{ base: "240px", sm: "280px", md: "300px", lg: "320px" }}
              h={{ base: "150px", md: "230px", lg: "250px" }}
              boxSize="200px"
              src={imageUrl}
              alt={workName}
              m="auto"
              mt="3"
            />

            <Heading size="lg" pt="11">
              {workName}
            </Heading>
            <Text fontSize="lg" fontWeight="bold"></Text>

            <Button
              onClick={onOpen}
              bg="white"
              border="1px"
              w={{ base: "80%", md: "70%" }}
              mt="11"
              _hover={{ bg: "gray.100" }}
            >
              VIEW MORE
            </Button>
          </Stack>
        </Box>
      </Box>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Stack textAlign="center">
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
              {otherInformation && (
                <Text fontSize="sm" fontWeight="bold">
                  <a href={otherInformation} className={styles.link}>
                    管理ユーザー用ログインページ
                  </a>
                </Text>
              )}
              <Text className={styles.title} fontSize="lg" fontWeight="bold">
                Skills
              </Text>
              <Text fontSize="md" fontWeight="bold">
                {skill}
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
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
