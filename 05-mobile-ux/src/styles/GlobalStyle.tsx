import { StyleSheet } from 'react-native';
import spacing from './Spacing';

const GlobalStyle = StyleSheet.create({
    mainContainer: {
        paddingLeft: spacing.md,
        paddingRight: spacing.md,
        // backgroundColor:"red",
        height: "100%",
        justifyContent: "space-between"
    }
})

export default GlobalStyle;