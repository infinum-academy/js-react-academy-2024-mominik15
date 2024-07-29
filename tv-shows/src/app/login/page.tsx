'use client'

import { LoginForm } from "@/components/features/auth/LoginForm/LoginForm";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import { EntryContainer } from "@/components/shared/EntryContainer/EntryContainer";

export default function Login() {
    return (
        <EntryContainer>
            <AuthRedirect to='/all-shows' condition='isLoggedIn'/>
            <LoginForm />
        </EntryContainer>
    );
}