'use client'

import { LoginForm } from "@/components/features/auth/LoginForm/LoginForm";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import { Card, Container, chakra, useStyleConfig } from "@chakra-ui/react";

export default function Register() {
    const variant = window.innerWidth < 800 ? 'mobile' : 'regular';
    const style = useStyleConfig('Main', {variant});

    return (
        <chakra.main __css={style}>
            <Container alignSelf='center'>
                {/* i onda u card wrappati sve kaj mogu, cisto zbog radijusa, farbe i sl. zajednickih elemenata
                    varijante mogu def bojom */}
                <Card backgroundColor='purple' border='none' shadow='none'>
                    <AuthRedirect to='/all-shows' condition='isLoggedIn'/>
                    <LoginForm />
                </Card>
            </Container>
        </chakra.main>
    );
}