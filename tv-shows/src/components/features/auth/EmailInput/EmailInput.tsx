import { EmailIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement, InputProps } from "@chakra-ui/react";
import { forwardRef } from "react";

interface IEmailInputProps extends InputProps {
}

export const EmailInput = forwardRef<HTMLInputElement, IEmailInputProps>(({ ...props }, ref) => {
    return (
        <InputGroup>
            <InputLeftElement height='100%' marginLeft='18px'>
                <EmailIcon />
            </InputLeftElement>
            <Input
                ref={ref}
                placeholder='Email'
                errorBorderColor='crimson'
                required
                type='email'
                {...props}
            />
        </InputGroup>
    );
});