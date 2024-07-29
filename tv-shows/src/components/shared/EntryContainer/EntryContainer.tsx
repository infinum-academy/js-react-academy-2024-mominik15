import { Container, Hide, Show, chakra, useStyleConfig } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IEntryContainerProps {
    children: ReactNode;
}

export const EntryContainer = ({children} : IEntryContainerProps) => {
    return (
        <>
            <Hide breakpoint="(max-width: 800px)">
                <chakra.main __css={useStyleConfig('Main', {variant: 'regular'})}>
                    <Container alignSelf='center' borderRadius='common' width='100%'  overflow='auto' boxShadow='modalShadow' display='flex' flexDirection='column'>
                        {children}
                    </Container>
                </chakra.main>
            </Hide>
            <Show breakpoint="(max-width: 800px)">
                <chakra.main __css={useStyleConfig('Main', {variant: 'mobile'})}>
                    <Container alignSelf='center' width='100%' height='100vh' overflow='auto' boxShadow='modalShadow' display='flex' flexDirection='column'>
                        {children}
                    </Container>
                </chakra.main>
            </Show>
        </>
    );
}