import { Box, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { MdDescription } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

type Prop = {
  title: string;
  imageUrl: string;
  description: string;
  qiitaURL: string;
  readmeURL: string;
  skills: string;
  githubURL: string;
  siteURL: string;
  isEven?: boolean;
};

export const WorkCard: React.VFC<Prop> = (props) => {
  const {
    title,
    imageUrl,
    description,
    qiitaURL,
    readmeURL,
    skills,
    githubURL,
    siteURL,
    isEven,
  } = props;
  return (
    <Box bg={isEven ? undefined : "white"}>
      <Stack
        w={{ base: "100%", md: "80%" }}
        mx="auto"
        pt="50px"
        pb="10"
        spacing={{ base: "10", md: "8" }}
      >
        <Heading as="h2" textAlign="center">
          {title}
        </Heading>
        <HStack display={{ base: "block", md: "flex" }}>
          <Image
            src={imageUrl}
            w={{ base: "80%", md: "45%" }}
            mx="auto"
            mb={{ base: "5", md: "0" }}
          />
          <Stack p="2" spacing="8" color="gray.700">
            <Stack>
              <HStack>
                <Box color="orange.300">
                  <MdDescription size="25px" />
                </Box>
                <Heading fontSize="xl" as="h3">
                  アプリ概要
                </Heading>
              </HStack>
              <Text fontWeight="bold">{description}</Text>
              <Box>
                更に詳しい解説は
                <Box
                  fontWeight="semibold"
                  as="a"
                  href={qiitaURL}
                  color="blue.400"
                  _hover={{ color: "blue.700" }}
                >
                  こちらのQiita記事
                </Box>
                もしくは
                <Box
                  fontWeight="semibold"
                  as="a"
                  href={readmeURL}
                  color="blue.400"
                  _hover={{ color: "blue.700" }}
                >
                  GithubのReadMe
                </Box>
                にまとめています。
              </Box>
            </Stack>
            <Stack>
              <HStack>
                <Box color="orange.300">
                  <BsPencil size="25px" />
                </Box>
                <Heading fontSize="xl" as="h3">
                  主な使用技術
                </Heading>
              </HStack>
              <Text fontWeight="bold">{skills}</Text>
            </Stack>
            <HStack spacing="3">
              <HStack
                as="a"
                py="2"
                px="2"
                borderRadius="15px"
                _hover={{ cursor: "pointer", bg: "gray.100" }}
                href={githubURL}
              >
                <Box>
                  <AiFillGithub size="25px" />
                </Box>
                <Heading fontSize="xl" as="h3">
                  Githubページ
                </Heading>
              </HStack>
              <Box size="30px">/</Box>
              <HStack
                as="a"
                py="2"
                px="2"
                borderRadius="15px"
                _hover={{ cursor: "pointer", bg: "gray.100" }}
                href={siteURL}
              >
                <Box>
                  <CgWebsite size="25px" />
                </Box>
                <Heading fontSize="xl" as="h3">
                  サイト
                </Heading>
              </HStack>
            </HStack>
          </Stack>
        </HStack>
      </Stack>
    </Box>
  );
};
