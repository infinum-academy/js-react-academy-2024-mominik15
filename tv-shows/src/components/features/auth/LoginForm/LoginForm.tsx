'use client'

import { mutator } from "@/fetchers/mutator";
import { swrKeys } from "@/fetchers/swrKeys";
import { FormControl, FormLabel, Heading, Input, chakra, Button, Alert } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { mutate } from "swr";
import useSWRMutation from "swr/mutation";

interface ILoginFormInputs {
    email: string,
    password: string,
}

export const LoginForm = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const { register, handleSubmit } = useForm<ILoginFormInputs>();
    const { trigger } = useSWRMutation(swrKeys.logIn, mutator, {
        onSuccess: (data) => {
            setLoggedIn(true);
            mutate(data, { revalidate: false });
            console.log(data);
        }
    });

    const onLogin = async (data: ILoginFormInputs) => {
        const response = await trigger(data);
        const body = await response.json();
        const userData = {
            accessToken: response.headers.get('access-token'),
            client: response.headers.get('client'),
            email: body.user.email,
        };

        localStorage.setItem('userData', JSON.stringify(userData));
    }

    return (
        <>
            { loggedIn && <Alert status='success'>Login successful!</Alert>}
            { !loggedIn && <chakra.form
                display='flex'
                flexDirection='column'
                alignItems='center'
                gap={3}
                onSubmit={handleSubmit(onLogin)}
            >
                <Heading>Login</Heading>
                <FormControl isRequired={true}>
                    <FormLabel>Email</FormLabel>
                    <Input {...register('email')} required type='email' />
                </FormControl>
                <FormControl isRequired={true}>
                    <FormLabel>Password</FormLabel>
                    <Input {...register('password')} required type='password' />
                </FormControl>
                <Button type='submit'>Register</Button>
            </chakra.form> }
        </>
    );
}