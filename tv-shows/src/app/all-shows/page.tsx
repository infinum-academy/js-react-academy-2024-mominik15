'use client';

import { Flex } from "@chakra-ui/react";
import styles from "../page.module.css";
import { ShowCard } from "@/components/shared/ShowCard/ShowCard";
import { ShowsList } from "@/components/shared/ShowsList/ShowsList";

export default function Home() {
  return (
    <main className={styles.main}>
        <ShowsList />
    </main>
  );
}
