'use client'

import { mutator } from "@/fetchers/mutator";
import { swrKeys } from "@/fetchers/swrKeys";
import { FormControl, Image, Input, chakra, Button, Alert, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import NextLink from 'next/link';
import useSWRMutation from "swr/mutation";
import { FormComponent } from "@/components/shared/FormComponent/FormComponent";
import { PasswordInput } from "../PasswordInput/PasswordInput";
import { EmailInput } from "../EmailInput/EmailInput";

interface ILoginFormInputs {
    email: string,
    password: string,
}

export const LoginForm = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const { register, handleSubmit, formState } = useForm<ILoginFormInputs>();
    const { trigger } = useSWRMutation(swrKeys.logIn, mutator);

    const onLogin = async (data: ILoginFormInputs) => {
        const response = await trigger(data);
        if (!response.ok) {
            return
        }
        const body = await response.json();
        const userData = {
            accessToken: response.headers.get('access-token'),
            client: response.headers.get('client'),
            email: body.user.email,
        };
        setLoggedIn(true);

        localStorage.setItem('userData', JSON.stringify(userData));
    }

    return (
        <>
            { loggedIn && <Flex direction='column' alignItems='center' gap={5}>
                <Text>Log in successful. Loading...</Text>
                <Button isLoading variant='ghost' />
            </Flex>}
            { !loggedIn && <Flex><FormComponent onSubmit={handleSubmit(onLogin)}>
                <Image alt='logo' src='/logo.svg' />
                <FormControl isRequired={true}>
                    <EmailInput
                        isInvalid={!formState.isValid}
                        disabled={formState.isSubmitting}
                        {...register('email')}
                    />
                </FormControl>
                <FormControl isRequired={true}>
                    <PasswordInput
                        isInvalid={!formState.isValid}
                        disabled={formState.isSubmitting}
                        {...register('password')}
                    />
                </FormControl>
                <Button isLoading={formState.isLoading} type='submit' marginTop='23px' marginBottom='28px'>LOG IN</Button>
            </FormComponent> </Flex> }
            { !formState.isValid && <Alert status='error'>Invalid credentials, try again!</Alert>}
            { !loggedIn && <Flex alignSelf='center'>
                <Text>Don't have an account?</Text>
                <Text as={NextLink} href='/register' fontWeight='bold' marginLeft={1}>Register</Text>
            </Flex>
            }
        </>
    );
}