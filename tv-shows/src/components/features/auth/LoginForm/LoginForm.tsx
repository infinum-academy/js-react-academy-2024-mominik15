'use client'

import { mutator } from "@/fetchers/mutator";
import { swrKeys } from "@/fetchers/swrKeys";
import { FormControl, Image, Input, chakra, Button, Alert, Flex, Text, useMultiStyleConfig, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import NextLink from 'next/link';
import useSWRMutation from "swr/mutation";
import { EmailIcon, LockIcon, UnlockIcon } from "@chakra-ui/icons";

interface ILoginFormInputs {
    email: string,
    password: string,
}

export const LoginForm = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState } = useForm<ILoginFormInputs>();
    const { trigger } = useSWRMutation(swrKeys.logIn, mutator);
    const variant = window.innerWidth < 800 ? 'mobile' : 'regular';
    const styles = useMultiStyleConfig('Container', {variant});

    const onLogin = async (data: ILoginFormInputs) => {
        setLoading(true);
        const response = await trigger(data);
        if (!response.ok) {
            setLoading(false);
            return
        }
        const body = await response.json();
        const userData = {
            accessToken: response.headers.get('access-token'),
            client: response.headers.get('client'),
            email: body.user.email,
        };
        setLoading(false);
        setLoggedIn(true);

        localStorage.setItem('userData', JSON.stringify(userData));
    }

    return (
        <>
            { loggedIn && <Flex direction='column' alignItems='center' gap={5}>
                <Text>Log in successful. Loading...</Text>
                <Button isLoading variant='ghost' />
            </Flex>}
            { !loggedIn && <Flex><chakra.form
                __css={styles.form}
                onSubmit={handleSubmit(onLogin)}
            >
                <Image alt='logo' src='/logo.svg' />
                <FormControl isRequired={true}>
                    <InputGroup>
                        <InputLeftElement height='100%' marginLeft='18px'>
                            <EmailIcon />
                        </InputLeftElement>
                        <Input
                            placeholder='Email'
                            errorBorderColor='crimson'
                            required
                            type='email'
                            isInvalid={!formState.isValid}
                            disabled={formState.isSubmitting}
                            {...register('email')}
                        />
                    </InputGroup>
                </FormControl>
                <FormControl isRequired={true}>
                    <InputGroup>
                        <InputLeftElement height='100%' marginLeft='18px'>
                            <LockIcon />
                        </InputLeftElement>
                        <Input
                            isInvalid={!formState.isValid}
                            errorBorderColor='crimson'
                            disabled={formState.isSubmitting}
                            {...register('password')}
                            required
                            placeholder="Password"
                            type='password'
                        />
                    </InputGroup>
                </FormControl>
                <Button isLoading={loading} type='submit' marginTop='23px' marginBottom='28px'>LOG IN</Button>
            </chakra.form> </Flex> }
            { !formState.isValid && <Alert status='error'>Invalid credentials, try again!</Alert>}
            { !loggedIn && <Flex alignSelf='center'>
                <Text>Don't have an account?</Text>
                <Text as={NextLink} href='/register' fontWeight='bold' marginLeft={1}>Register</Text>
            </Flex>
            }
        </>
    );
}