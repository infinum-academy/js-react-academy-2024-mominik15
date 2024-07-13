import { LoginForm } from "@/components/features/auth/LoginForm/LoginForm";
import { Container } from "@chakra-ui/react";

export default function Register() {
    return (
        <Container background="grey.50">
            <LoginForm />
        </Container>
    );
}