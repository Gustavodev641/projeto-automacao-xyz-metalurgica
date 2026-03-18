import { StyleSheet } from 'react-native';
import spacing from '../../styles/Spacing';

const Style = StyleSheet.create({
    body: {
        justifyContent: "flex-start",
        gap: 25
    },
    viewSwitch: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    textoSwitch: {
        textAlign: "left"
    },
})

export default Style;