'use client'

import { LoginForm } from "@/components/features/auth/LoginForm/LoginForm";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import { Container, chakra, useStyleConfig } from "@chakra-ui/react";

export default function Register() {
    const variant = window.innerWidth < 800 ? 'mobile' : 'regular';
    const style = useStyleConfig('Main', {variant});

    return (
        <chakra.main __css={style}>
            <Container>
                    <AuthRedirect to='/all-shows' condition='isLoggedIn'/>
                    <LoginForm />
                </Container>
        </chakra.main>
    );
}