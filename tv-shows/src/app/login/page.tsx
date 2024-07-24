'use client'

import { LoginForm } from "@/components/features/auth/LoginForm/LoginForm";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import { Container, Hide, Show, chakra, useStyleConfig } from "@chakra-ui/react";

export default function Register() {
    return (
        <>
            <Hide breakpoint="(max-width: 800px)">
            <chakra.main __css={useStyleConfig('Main', {variant: 'regular'})}>
                    <Container alignSelf='center' borderRadius='25px' boxShadow='modalShadow' display='flex' flexDirection='column'>
                        <AuthRedirect to='/all-shows' condition='isLoggedIn'/>
                        <LoginForm />
                    </Container>
            </chakra.main>
            </Hide>
            <Show breakpoint="(max-width: 800px)">
            <chakra.main __css={useStyleConfig('Main', {variant: 'mobile'})}>
                    <Container alignSelf='center' width='100%' height='100vh' overflow='auto' boxShadow='modalShadow' display='flex' flexDirection='column'>
                        <AuthRedirect to='/all-shows' condition='isLoggedIn'/>
                        <LoginForm />
                    </Container>
            </chakra.main>
            </Show>
        </>
    );
}