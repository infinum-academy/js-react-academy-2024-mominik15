import { LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { IconButton, Input, InputGroup, InputLeftElement, InputProps, InputRightElement } from "@chakra-ui/react";
import { forwardRef, useState } from "react";

interface IPasswordInputProps extends InputProps {
}

export const PasswordInput = forwardRef<HTMLInputElement, IPasswordInputProps>(({ ...props }, ref) => {
    const [ showPassword, setShowPassword ] = useState(false); 

    return (
        <InputGroup>
            <InputLeftElement height='100%' marginLeft='18px'>
                <LockIcon />
            </InputLeftElement>
            <Input
                ref={ref}
                errorBorderColor='crimson'
                required
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                {...props}
            />
            <InputRightElement height='100%' marginRight='18px'>
                { !showPassword && <IconButton
                    aria-label='Password hidden'
                    icon={<ViewOffIcon />}
                    variant='ghost'
                    onClick={() => setShowPassword(true)}
                /> }
                { showPassword && <IconButton
                    aria-label='Password shown'
                    icon={<ViewIcon />}
                    variant='ghost'
                    onClick={() => setShowPassword(false)}
                /> }
            </InputRightElement>
        </InputGroup>
    );
});