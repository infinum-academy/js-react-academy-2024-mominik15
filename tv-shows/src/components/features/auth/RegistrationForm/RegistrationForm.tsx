'use client'

import { mutator } from "@/fetchers/mutator";
import { swrKeys } from "@/fetchers/swrKeys";
import { FormControl, FormLabel, Heading, Input, chakra, Button, Alert } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";

interface IRegistrationFormInputs {
    email: string,
    password: string,
    passwordConfirmation: string,
}

export const RegistrationForm = () => {
    const [registrationStatus, setRegistrationStatus] = useState('unregistered');
    const { register, handleSubmit } = useForm<IRegistrationFormInputs>();
    const { trigger } = useSWRMutation(swrKeys.users, mutator, {
        onSuccess: () => {
            setRegistrationStatus('registered');
        }
    });

    const onRegister = async (data: IRegistrationFormInputs) => {
        if (data.password !== data.passwordConfirmation) {
            setRegistrationStatus('passwordsNotMatched');
            return;
        };
        
        await trigger(data);
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
                <Heading>Register</Heading>
                <FormControl isRequired={true}>
                    <FormLabel>Email</FormLabel>
                    <Input {...register('email')} required type='email' />
                </FormControl>
                <FormControl isRequired={true}>
                    <FormLabel>Password</FormLabel>
                    <Input {...register('password')} required type='password' />
                </FormControl>
                <FormControl isRequired={true}>
                    <FormLabel>Password confirmation</FormLabel>
                    <Input {...register('passwordConfirmation')} required type='password' />
                </FormControl>
                <Button type='submit'>Register</Button>
                { registrationStatus === 'passwordsNotMatched' && <Alert status='error'>Passwords do not match.</Alert> }
            </chakra.form> }
        </>
    );
}