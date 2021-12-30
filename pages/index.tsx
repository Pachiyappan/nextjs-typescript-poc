import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { Wrap, Text } from "@chakra-ui/react";
import useSWR from "swr";
import Blog from "./components/Blog";

const Home: NextPage = () => {
  const { data: blogs, error } = useSWR(
    "https://newsapi.org/v2/everything?q=tesla&from=2021-11-30&sortBy=publishedAt&apiKey=55552e761d6d4de0ba2936af55b62715"
  );
  if (error) return <Text>{error?.message}</Text>;
  return (
    <Wrap justify="space-around">
      {blogs?.articles &&
        blogs?.articles.map((blog: any, i: number) => {
          return <Blog key={i} article={blog} />;
        })}
    </Wrap>
  );
};

export default Home;
