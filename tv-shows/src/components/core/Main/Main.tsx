import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { Hide, Show, chakra, useStyleConfig } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IMainProps {
    children: ReactNode;
}

export const Main = ({children} : IMainProps) => {
    return (
        <>
            <Hide breakpoint="(max-width: 800px)">
                <chakra.main __css={useStyleConfig('Main', {variant: 'regular'})}>
                    <AuthRedirect to='/login' condition='isLoggedOut'/>
                    <SidebarNavigation />
                    {children}
                </chakra.main>
            </Hide>
            <Show breakpoint="(max-width: 800px)">
                <chakra.main __css={useStyleConfig('Main', {variant: 'mobile'})}>
                    <AuthRedirect to='/login' condition='isLoggedOut'/>
                    <SidebarNavigation />
                    {children}
                </chakra.main>
            </Show>
        </>
    );
}