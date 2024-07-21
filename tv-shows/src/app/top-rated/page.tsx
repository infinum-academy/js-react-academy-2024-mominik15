'use client';

import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";
import styles from "../page.module.css";
import { ShowsList } from "@/components/shared/ShowsList/ShowsList";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <main className={styles.main}>
        <SidebarNavigation />
        <ShowsList topRated={true} />
    </main>
  );
}
