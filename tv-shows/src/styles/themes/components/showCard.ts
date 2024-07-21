import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const helpers = createMultiStyleConfigHelpers(['form', 'heading', 'input']);

const ShowCard = helpers.defineMultiStyleConfig({
    baseStyle: {

    }
});

export default ShowCard;