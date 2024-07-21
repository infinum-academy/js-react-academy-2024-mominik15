'use client'

import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import styles from "../../page.module.css";
import ShowSection from "@/components/features/shows/ShowSection/ShowSection";
import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { Flex } from "@chakra-ui/react";

export default function ShowDetails () {
    return (
        <main className={styles.main}>
            <AuthRedirect to='/login' condition='isLoggedOut'/>
            <Flex direction='row'>
                <SidebarNavigation />
                <ShowSection />
            </Flex>
        </main>
      );
}