import { useRouter } from "next/router";
import React from "react";
import {
  Container,
  Box,
  Text,
  HStack,
  Stack,
  Avatar,
  Image,
} from "@chakra-ui/react";

export default function BlogDetails() {
  const data: any = useRouter();
  const query = data.query;
  console.log(data);
  return (
    <div>
      <Container maxW="container.lg" fontFamily="Open Sans">
        <Box padding="4">
          <Text fontSize="3xl" fontWeight="700">
            {query.title}
          </Text>
          <HStack spacing="24px" py="20px">
            <Avatar name={query.author} src={query.urlToImage} />
            <Text fontSize="xl">{query.author}</Text>
            <Text fontSize="sm" color="grey">
              {new Date(query.publishedAt).toLocaleDateString("en-us", {
                year: "numeric",
                day: "numeric",
                month: "short",
              })}
            </Text>
          </HStack>
          <Stack>
            <Image src={query.urlToImage} alt={query.author} />
          </Stack>
          {Array(50)
            .fill("")
            .map((data, i) => (
              <Text key={i}>{query.content}</Text>
            ))}
        </Box>
      </Container>
    </div>
  );
}
