'use client'

import { RegistrationForm } from "@/components/features/auth/RegistrationForm/RegistrationForm";
import { EntryContainer } from "@/components/shared/EntryContainer/EntryContainer";

export default function Register() {
    return (
        <EntryContainer>
            <RegistrationForm />
        </EntryContainer>
    );
}