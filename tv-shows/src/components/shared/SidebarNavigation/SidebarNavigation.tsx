'use client'

import { Button, Card, CardBody, CardFooter, CardHeader, Flex, Image, useStyleConfig } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { RegularNavigation } from "../RegularNavigation/RegularNavigation";
import { MobileNavigation } from "../MobileNavigation/MobileNavigation";

export const SidebarNavigation = () => {
    const router = useRouter();
    const onLogOut = () => {
        localStorage.removeItem('userData');
        router.push('/login');
    };

    const variant = window.innerWidth < 800 ? 'mobile' : 'regular';
    const style= useStyleConfig('SidebarNavigation', {variant});

    return (
        <Flex __css={style.flex as object}>
            { variant === 'regular' ? <RegularNavigation onLogOut={onLogOut} /> : <MobileNavigation onLogOut={onLogOut} /> }
        </Flex>
    );
}