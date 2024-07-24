'use client'

import { RegistrationForm } from "@/components/features/auth/RegistrationForm/RegistrationForm";
import { Container, chakra, useStyleConfig } from "@chakra-ui/react";

export default function Register() {
    const variant = window.innerWidth < 800 ? 'mobile' : 'regular';
    const style = useStyleConfig('Main', {variant});

    return (
        <chakra.main __css={style}>
                <Container alignSelf='center' borderRadius='25px' boxShadow='modalShadow' display='flex' flexDirection='column'>
                    <RegistrationForm />
                </Container>
        </chakra.main>
    );
}