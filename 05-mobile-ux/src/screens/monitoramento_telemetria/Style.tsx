import { StyleSheet } from 'react-native';
import spacing from '../../styles/Spacing';

const temaNormal = {
    // para alertas
    borderWitdhAlert: 1.5,
    borderColorAlert: "#ff0000",
    backgroundColorAlert: "#ff00003e",
    textColorAlert: "#000000",

    // para o gráfico
    colorMainLineGraphic: "#003cff",
    mainColorGraphic: "#000000"
};

const temaAltoContraste = {
    // para alertas
    borderWitdhAlert: 2.5,
    borderColorAlert: "#ff0000",
    backgroundColorAlert: "#ff000000",
    textColorAlert: "#FFFFFF",

    // para o gráfico
    colorMainLineGraphic: "#FFFF00",
    mainColorGraphic: "#ffffff"
};

export const getStyle = (altoContraste: boolean) => {
    const theme = altoContraste ? temaAltoContraste : temaNormal;

    return StyleSheet.create({
        viewTemp: {
            gap: 15
        },
        alertView: {
            padding: spacing.sm,
            gap: 10
        },
        viewRegistroTemp: {
            gap: 25,
            marginTop: 15,
            marginBottom: 150,
            // margin: "auto"
        },
        TemaAlerta: {
            borderWidth: theme.borderWitdhAlert,
            borderColor: theme.borderColorAlert,
            backgroundColor: theme.backgroundColorAlert,
            borderRadius: 2.5
        },
        TemaTextoAlert: {
            color: theme.textColorAlert
        },
        CorPrincipalGrafico: {
            color: theme.mainColorGraphic
        },
        CorLinhaGrafico: {
            color: theme.colorMainLineGraphic
        }
    })
}