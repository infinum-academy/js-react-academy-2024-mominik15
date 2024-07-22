'use client';

import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import { ShowsList } from "@/components/shared/ShowsList/ShowsList";
import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { chakra, useStyleConfig } from "@chakra-ui/react";

export default function Home() {
  const variant = window.innerWidth < 800 ? 'mobile' : 'regular';
  const style = useStyleConfig('Main', {variant});

  return (
    <chakra.main __css={style}>
        <AuthRedirect to='/login' condition='isLoggedOut'/>
        <SidebarNavigation />
        <ShowsList topRated={false} />
    </chakra.main>
  );
}
