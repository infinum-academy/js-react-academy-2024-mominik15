import { defineStyleConfig } from "@chakra-ui/react";

const Card = defineStyleConfig({
    baseStyle: {
        borderRadius: '25px',
    },
    variants: {
        purple: {
            backgroundColor: 'purple',
            color: 'white'
        },
        white: {
            backgroundColor: 'white',
            color: 'purple'
        },
        darkPurple: {
            backgroundColor: 'darkPurple',
            color: 'purple'
        }
    },
    defaultProps: {
        variant: 'purple'
    }
});

export default Card;