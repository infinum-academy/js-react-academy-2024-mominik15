'use client'

import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import { ProfileContainer } from "@/components/features/auth/ProfileContainer/ProfileContainer";
import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { chakra, useStyleConfig } from "@chakra-ui/react";

export default function MyProfile() {
    const variant = window.innerWidth < 800 ? 'mobile' : 'regular';
    const style = useStyleConfig('Main', {variant});

    return (
        <chakra.main __css={style}>
            <AuthRedirect to='/login' condition='isLoggedOut'/>
            <SidebarNavigation />
            <ProfileContainer />
        </chakra.main>
    );
}