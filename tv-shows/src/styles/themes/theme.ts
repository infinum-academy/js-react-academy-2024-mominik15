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

const radii = {
    common: '24px',
}

const breakpoints = {
    base: '0px',
    sm: '320px',
    md: '800px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
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
    radii,
    breakpoints,
});

export default theme;