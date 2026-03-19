import { StyleSheet } from 'react-native';
import spacing from './Spacing';

const temaNormal = {
    background: "#FFFFFF",
    text: "#000000",
};

const temaAltoContraste = {
    background: "#000000",
    text: "#FFFFFF",
};

export const getGlobalStyle = (fonteGrande:boolean, altoContraste:boolean) => {
    const multiplicadorFonte = fonteGrande ? 1.5 : 1;

    // se "altoContraste" for true, theme = a "temaAltoContraste", se for false, theme = "temaNormal"
    const theme = altoContraste ? temaAltoContraste : temaNormal;

    return StyleSheet.create({
        // styles de fontes e tamanhos
        mainContainer: {
            paddingLeft: spacing.md,
            paddingRight: spacing.md,
            height: "100%",
            justifyContent: "space-between"
        },
        title: {
            fontSize: 24 * multiplicadorFonte,
            fontWeight: "bold",
            textAlign: "center"
        },
        subtitle: {
            fontSize: 18 * multiplicadorFonte,
            fontWeight: "bold",
            textAlign: "center"
        },
        normalText: {
            fontSize: 14 * multiplicadorFonte,
            fontWeight: "regular",
            textAlign: "center"
        },
        TextGrandao: {
            fontSize: 50 * multiplicadorFonte,
            fontWeight: "bold",
            textAlign: "center"
        },

        // styles de tema de cores
        TemaBackground: {
            backgroundColor: theme.background
        },
        TemaTextoPrimario: {
            color: theme.text
        },
    })
}

export default getGlobalStyle;