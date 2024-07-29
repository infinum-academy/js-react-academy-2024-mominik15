import { Hide, Show, chakra, useStyleConfig } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IFormComponentProps {
    onSubmit: () => {};
    children: ReactNode;
}

export const FormComponent = ({onSubmit, children} : IFormComponentProps) => {
    return (
        <>
            <Hide breakpoint="(max-width: 800px)">
                <chakra.form
                    __css={useStyleConfig('Container', {variant: 'regular'})}
                    onSubmit={onSubmit}
                >
                    {children}
                </chakra.form>
            </Hide>
            <Show breakpoint="(max-width: 800px)">
                <chakra.form
                    __css={useStyleConfig('Container', {variant: 'mobile'})}
                    onSubmit={onSubmit}
                >
                    {children}
                </chakra.form>
            </Show>
        </>
    )
};