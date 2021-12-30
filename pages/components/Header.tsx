import { Avatar, Wrap, WrapItem, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import styles from "../styles/components/Header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link href="/">
        <Text cursor="pointer" fontSize="3xl">
          News Feed
        </Text>
      </Link>
      <Wrap>
        <WrapItem>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </WrapItem>
      </Wrap>
    </div>
  );
}
