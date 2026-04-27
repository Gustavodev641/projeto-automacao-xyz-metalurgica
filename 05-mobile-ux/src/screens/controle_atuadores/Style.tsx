import { StyleSheet } from 'react-native';

const temaNormal = {
    indicadorOperacaoOn: "#ff9500",
    btnParada: "#d10000"
}

const temaAltoContraste = {
    indicadorOperacaoOn: "#ffea00",
    btnParada: "#ff0000"
}

export const getStyle = (altoContraste: boolean) => {
    const theme = altoContraste ? temaAltoContraste : temaNormal;

    return StyleSheet.create({
        main:{
            justifyContent: "space-around"
        },
        viewEstadoAtuador: {
            flexDirection: "column",
            alignItems: "center",
            gap: 15,
        },
        viewParadaEmergencia: {
            flexDirection: "column",
            alignItems: "center",
            gap: 15,
            marginBottom: 100,
        },
        icon_indicador_operacao: {
            color: theme.indicadorOperacaoOn,
        },
        btn_parada_emergencia: {
            color: theme.btnParada
        }
    })
}