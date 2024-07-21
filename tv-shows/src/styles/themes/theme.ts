import { extendTheme } from "@chakra-ui/react";
import { colors } from "./foundations/colors";
import { fonts } from "./foundations/fonts";
import Container from "./components/container";
import Button from "./components/button";

const theme = extendTheme({
    components: {
        Container,
        Button
    },
    colors,
    fonts
});

export default theme;