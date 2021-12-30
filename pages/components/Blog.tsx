import React from "react";
import { Badge, Box, Image } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import Link from "next/link";

interface Article {
  article: {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
      name: string;
    };
    url: string;
    title: string;
    urlToImage: string;
  };
}
export default function Blog({ article }: Article) {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Link
      href={{
        pathname: `/blog/${article.title}`,
        query: {
          title: article.title,
          author: article.author,
          urlToImage: article.urlToImage,
          content: article.content,
          publishedAt: article.publishedAt,
        },
      }}
    >
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        m="6"
        width="330px"
        cursor="pointer"
      >
        <Image
          height="200px"
          objectFit="cover"
          src={
            article.urlToImage ||
            "https://images0.persgroep.net/rcs/EEhblS1X4LJ6tJyscPjr8o-M2O8/diocontent/211267852/_focus/0.59/0.44/_fill/1200/630/?appId=21791a8992982cd8da851550a453bd7f&quality=0.7"
          }
          alt={article.title}
        />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {article.author}
            </Badge>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {article.title}
          </Box>

          <Box>
            {new Date(article.publishedAt).toLocaleDateString("en-us", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </Box>
        </Box>
      </Box>
    </Link>
  );
}
