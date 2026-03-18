import { StyleSheet } from 'react-native';
import spacing from './Spacing';

export const getGlobalStyle = (fonteGrande:boolean) => {
    const multiplicadorFonte = fonteGrande ? 1.5 : 1;

    return StyleSheet.create({
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
        }
    })
}

export default getGlobalStyle;