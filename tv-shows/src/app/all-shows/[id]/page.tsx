'use client'

import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import ShowSection from "@/components/features/shows/ShowSection/ShowSection";
import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { Show, Hide, chakra, useStyleConfig } from "@chakra-ui/react";

export default function ShowDetails () {
    return (
        <>
        <Hide breakpoint="(max-width: 800px)">
          <chakra.main __css={useStyleConfig('Main', {variant: 'regular'})}>
              <AuthRedirect to='/login' condition='isLoggedOut'/>
              <SidebarNavigation />
              <ShowSection />
          </chakra.main>
        </Hide>
        <Show breakpoint="(max-width: 800px)">
          <chakra.main __css={useStyleConfig('Main', {variant: 'mobile'})}>
              <AuthRedirect to='/login' condition='isLoggedOut'/>
              <SidebarNavigation />
              <ShowSection />
          </chakra.main>
        </Show>
      </>
      );
}