import { StyleSheet } from 'react-native';
import spacing from '../../styles/Spacing';

const Style = StyleSheet.create({
    viewTemp: {
        gap: 15
    },
    alertView: {
        borderWidth: 1.5,
        borderColor: "#ff0000",
        backgroundColor: "#ff00003e",
        borderRadius: 2.5,
        padding: spacing.sm,
        gap: 10
    },
    textTemp: {
        fontSize: 50,
        fontWeight: "bold",
        textAlign: "center"
    },

    viewRegistroTemp: {
        alignItems: "center",
        gap: 10,
        marginBottom: 150
    },
})

export default Style;