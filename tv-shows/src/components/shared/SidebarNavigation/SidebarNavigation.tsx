'use client'

import { Button, Card, CardBody, CardFooter, CardHeader, Flex, Hide, Image, Show, useStyleConfig } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { RegularNavigation } from "../RegularNavigation/RegularNavigation";
import { MobileNavigation } from "../MobileNavigation/MobileNavigation";

export const SidebarNavigation = () => {
    const router = useRouter();
    const onLogOut = () => {
        localStorage.removeItem('userData');
        router.push('/login');
    };

    return (
        <>
            <Hide breakpoint="(max-width: 800px)">
                <Flex __css={useStyleConfig('SidebarNavigation', {variant: 'regular'}).flex as object}>
                    <RegularNavigation onLogOut={onLogOut} />
                </Flex>
            </Hide>
            <Show breakpoint="(max-width: 800px)">
                <Flex __css={useStyleConfig('SidebarNavigation', {variant: 'mobile'}).flex as object}>
                    <MobileNavigation onLogOut={onLogOut} />
                </Flex>
            </Show>
        </>
    );
}