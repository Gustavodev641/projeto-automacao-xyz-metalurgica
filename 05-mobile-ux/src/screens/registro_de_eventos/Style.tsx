import { StyleSheet } from 'react-native';
import spacing from '../../styles/Spacing';

const temaNormal = {
    borderTableColor: "#000000",

    // cores de log
    log_comum_background_color: "#fff",
    log_comum_text_color: "#000",

    log_medio_background_color: "#fff59c",
    log_medio_text_color: "#000",

    log_alto_background_color: "rgb(255, 142, 142)",
    log_alto_text_color: "#550000",

    log_critico_background_color: "rgb(254, 0, 0)",
    log_critico_text_color: "#000"
}

const temaAltoContraste = {
    borderTableColor: "#FFFFFF",

    log_comum_background_color: "#000000",
    log_comum_text_color: "#FFFFFF",

    log_medio_background_color: "#FFFF00", 
    log_medio_text_color: "#000000",

    log_alto_background_color: "#FF8C00",
    log_alto_text_color: "#000000",

    log_critico_background_color: "#FF0000",
    log_critico_text_color: "#FFFFFF"
}

export const getStyle = (altoContraste: boolean) => {
    const theme = altoContraste ? temaAltoContraste : temaNormal;

    return StyleSheet.create({
        main: {
            gap: 15,
            justifyContent: "flex-start"
        },
        title: {
            textAlign: "left"
        },
        logs_table: {
            borderWidth: 1,
            borderColor: theme.borderTableColor,
            borderStyle: "solid",
            borderRadius: spacing.xs - 1.5,
            maxHeight: "90%"
        },
        linha_tabela: {
            borderWidth: 1,
            borderColor: theme.borderTableColor,
            borderStyle: "solid",
            padding: spacing.xs - 1.5
        },
        texto_tabela: {
            textAlign: "left",
        },

        // classe de cores para cada log
        log_comum: {
            backgroundColor: theme.log_comum_background_color,
            color: theme.log_comum_text_color
        },
        log_medio: {
            backgroundColor: theme.log_medio_background_color,
            color: theme.log_medio_text_color
        },
        log_alto: {
            backgroundColor: theme.log_alto_background_color,
            color: theme.log_alto_text_color
        },
        log_critico: {
            backgroundColor: theme.log_critico_background_color,
            color: theme.log_critico_text_color
        }
    })
}