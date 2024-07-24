'use client'

import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import { ProfileContainer } from "@/components/features/auth/ProfileContainer/ProfileContainer";
import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { Show, Hide, chakra, useStyleConfig } from "@chakra-ui/react";

export default function MyProfile() {
    const variant = window.innerWidth < 800 ? 'mobile' : 'regular';
    const style = useStyleConfig('Main', {variant});

    return (
        <>
            <Hide breakpoint="(max-width: 800px)">
            <chakra.main __css={useStyleConfig('Main', {variant: 'regular'})}>
                <AuthRedirect to='/login' condition='isLoggedOut'/>
                <SidebarNavigation />
                <ProfileContainer />
            </chakra.main>
            </Hide>
            <Show breakpoint="(max-width: 800px)">
            <chakra.main __css={useStyleConfig('Main', {variant: 'mobile'})}>
                <AuthRedirect to='/login' condition='isLoggedOut'/>
                <SidebarNavigation />
                <ProfileContainer />
            </chakra.main>
            </Show>
        </>
    );
}