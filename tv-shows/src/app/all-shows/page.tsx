'use client';

import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import styles from "../page.module.css";
import { ShowsList } from "@/components/shared/ShowsList/ShowsList";
import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";

export default function Home() {
  return (
    <main className={styles.main}>
        <AuthRedirect to='/login' condition='isLoggedOut'/>
        <SidebarNavigation />
        <ShowsList topRated={false} />
    </main>
  );
}
