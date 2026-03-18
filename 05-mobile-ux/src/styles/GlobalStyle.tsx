import { StyleSheet } from 'react-native';
import spacing from './Spacing';

const GlobalStyle = StyleSheet.create({
    mainContainer: {
        paddingLeft: spacing.md,
        paddingRight: spacing.md,
        height: "100%",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center"
    },
    subtitle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    },
    normalText: {
        fontSize: 14,
        fontWeight: "regular",
        textAlign: "center"
    },
})

export default GlobalStyle;