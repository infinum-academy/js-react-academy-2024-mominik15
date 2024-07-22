import { defineStyleConfig } from "@chakra-ui/react";

const Main = defineStyleConfig({
    baseStyle: {
        display: 'flex',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: 'darkPurple'
    },
    variants: {
        regular: {
            flexDirection: 'row',
        },
        mobile: {
            flexDirection: 'column'
        }
    }
});

export default Main;