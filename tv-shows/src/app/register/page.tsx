'use client'

import { RegistrationForm } from "@/components/features/auth/RegistrationForm/RegistrationForm";
import { Hide, Show, Container, chakra, useStyleConfig } from "@chakra-ui/react";

export default function Register() {
    return (
        <>
            <Hide breakpoint="(max-width: 800px)">
            <chakra.main __css={useStyleConfig('Main', {variant: 'regular'})}>
                    <Container alignSelf='center' borderRadius='25px' boxShadow='modalShadow' display='flex' flexDirection='column'>
                        <RegistrationForm />
                    </Container>
            </chakra.main>
            </Hide>
            <Show breakpoint="(max-width: 800px)">
            <chakra.main __css={useStyleConfig('Main', {variant: 'mobile'})}>
                    <Container alignSelf='center' width='100%' height='100vh' overflow='auto' boxShadow='modalShadow' display='flex' flexDirection='column'>
                        <RegistrationForm />
                    </Container>
            </chakra.main>
            </Show>
        </>
    );
}