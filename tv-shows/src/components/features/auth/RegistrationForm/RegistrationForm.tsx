'use client'

import { mutator } from "@/fetchers/mutator";
import { swrKeys } from "@/fetchers/swrKeys";
import { Image, Flex, FormControl, chakra, Button, Alert, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import NextLink from 'next/link';
import useSWRMutation from "swr/mutation";
import { EmailInput } from "../EmailInput/EmailInput";
import { PasswordInput } from "../PasswordInput/PasswordInput";

interface IRegistrationFormInputs {
    email: string,
    password: string,
    passwordConfirmation: string,
}

export const RegistrationForm = () => {
    const [registrationStatus, setRegistrationStatus] = useState('unregistered');
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState } = useForm<IRegistrationFormInputs>();
    const router = useRouter();
    const { trigger } = useSWRMutation(swrKeys.users, mutator);

    const onRegister = async (data: IRegistrationFormInputs) => {
        if (data.password !== data.passwordConfirmation) {
            setRegistrationStatus('passwordsNotMatched');
            return;
        };
        
        setLoading(true);
        const response = await trigger(data);
        setLoading(false);
        if (response.ok) {
            setRegistrationStatus('registered');
            router.push('/login');
        };
        return null;
    }

    return (
        <>
            { registrationStatus === 'registered' && <Alert status='success'>Registration successful!</Alert>}
            { registrationStatus !== 'registered' && <chakra.form
                display='flex'
                flexDirection='column'
                alignItems='center'
                gap={3}
                onSubmit={handleSubmit(onRegister)}
            >
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
                <FormControl isRequired={true}>
                    <PasswordInput
                        isInvalid={!formState.isValid}
                        disabled={formState.isSubmitting}
                        {...register('passwordConfirmation')}
                        placeholder="Password comfirmation"
                    />
                </FormControl>
                <Button isLoading={loading} type='submit'>SIGN UP</Button>
                { registrationStatus === 'passwordsNotMatched' && <Alert status='error'>Passwords do not match.</Alert> }
            </chakra.form> }
            <Flex alignSelf='center' marginTop={5}>
                <Text>Don't have an account?</Text>
                <Text as={NextLink} href='/login' fontWeight='bold' marginLeft={1}>Log in</Text>
            </Flex>
        </>
    );
}