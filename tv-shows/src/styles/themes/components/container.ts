import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const helpers = createMultiStyleConfigHelpers(['form', 'heading', 'input']);

const defaultProps = {
  size: 'lg',
}

const Container = helpers.defineMultiStyleConfig({
  baseStyle: {
    backgroundColor: 'purple',
    color: 'white',
    form: {
        font: 'body',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '9',
    },
    heading: {
        marginTop: '50px',
        font: 'heading',
        color: 'white'
    },
    input: {
        borderRadius: 'full',
        borderWidth: '2px',
        font: 'body',
        color: 'white',
        height: '56px',
        padding: '16px 54px',
        verticalAlign: 'center',
    }
  },
  variants: {
    regular: {
        borderRadius: '16px',
        padding: '56px',
        boxShadow: '0px 0px 9px rgba(0, 0, 0, 0.7)',
        form: {
            width: "500px",
            maxWidth: "100%",
            font: 'body',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '9',
        },
    },
    mobile: {
        width: "100vw",
        padding: '0',
        form: {
            width: "100%",
            minHeight: "100vh",
            font: 'body',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '9',
            margin: '0',
            padding: '0'
        },
    },
  }
});

export default Container;