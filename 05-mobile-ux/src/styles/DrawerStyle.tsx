const temaNormal = {
    headerBackground: "#FFFFFF",
    drawerBackground: "#FFFFFF",
    activeTint: "#007AFF",
    inactiveTint: "#000000",
    headerTint: "#000000"
};

const temaAltoContraste = {
    headerBackground: "#000000",
    drawerBackground: "#171717",
    activeTint: "#FFFF00",
    inactiveTint: "#FFFFFF",
    headerTint: "#FFFFFF"
};

export const getDrawerStyle = (altoContraste:boolean) => {
    const theme = altoContraste ? temaAltoContraste : temaNormal

    return {
        headerStyle: {
            backgroundColor: theme.headerBackground,
        },
        drawerStyle: {
            backgroundColor: theme.drawerBackground,
            width: 320,
        },
        drawerActiveTintColor: theme.activeTint,
        drawerInactiveTintColor: theme.inactiveTint,
        headerTintColor: theme.headerTint,
    };
}