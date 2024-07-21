import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const helpers = createMultiStyleConfigHelpers(['form', 'heading', 'input']);

const defaultProps = {
  size: 'lg',
}

const Container = helpers.defineMultiStyleConfig({
  defaultProps,
  baseStyle: {
    backgroundColor: 'purple',
    borderRadius: '16px',
    boxShadow: '0px 0px 9px rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: '56px',
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
  }
});

export default Container;