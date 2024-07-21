'use client'

import { LoginForm } from "@/components/features/auth/LoginForm/LoginForm";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import styles from "../page.module.css";
import { Container } from "@chakra-ui/react";

export default function Register() {
    return (
        <main className={styles.main}>
            <Container>
                <AuthRedirect to='/all-shows' condition='isLoggedIn'/>
                <LoginForm />
            </Container>
        </main>
    );
}