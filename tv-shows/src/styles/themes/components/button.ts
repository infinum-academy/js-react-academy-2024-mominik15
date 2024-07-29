import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
    baseStyle: {
        borderRadius: "full",
        fontWeight: '500',
        fontSize: '14pt',
        width: '144px',
        height: '52px',
      },
      sizes: {
        md: {
          px: 8,
          py: 4,
          h: "auto",  
        }
      },
      variants: {
        solid: {
            bg: 'white',
            color: 'purple',
        },
        ghost: {
            color: 'white',
            height: '44px',
            py: '8px',
            px: '13px',
            width: '140px',
            fontSize: '24px',
            fontWeight: '500',
            alignContent: 'left',
            _hover: {
                backgroundColor: 'purple',
                fontWeight: '700',
            }
        },
        disabled: {
            bg: 'white',
            color: 'purple',
            opacity: '50%'
        }
      }
});

export default Button;