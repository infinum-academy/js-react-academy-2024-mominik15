import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const helpers = createMultiStyleConfigHelpers(['flex']);

const SidebarNavigation = helpers.defineMultiStyleConfig({
    baseStyle: {

    },
    variants: {
        regular: {
            flex: {
                minHeight: '100vh',
                maxWidth: '350px',
                minWidth: '200px',
                position: 'sticky',
                top: '0',
                padding: '0'
            }
        },
        mobile: {
            flex: {
                width: '100%',
                position: 'sticky',
                top: '0',
                padding: '0'
            }
        }
    },
    defaultProps: {
        variant: 'regular',
    }
});

export default SidebarNavigation;