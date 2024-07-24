import { extendTheme } from "@chakra-ui/react";
import { colors } from "./foundations/colors";
import { fonts } from "./foundations/fonts";
import Container from "./components/container";
import Button from "./components/button";
import SidebarNavigation from "./components/sidebarNavigation";
import Main from "./components/main";

const shadows = {
    modalShadow: '0px 0px 9px rgba(0, 0, 0, 0.7)',
}

const theme = extendTheme({
    components: {
        Container,
        Button,
        SidebarNavigation,
        Main
    },
    colors,
    fonts,
    shadows,
});

export default theme;