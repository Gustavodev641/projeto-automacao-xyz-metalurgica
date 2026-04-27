import { useContext } from "react";
import { Text, ScrollView, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { AcessibilidadeContext } from "../../contexts/AcessibilidadeContext";
import getGlobalStyle from "../../styles/GlobalStyle";
import { getStyle } from "./Style";


export default function Registro_de_eventos() {
    const { settings, setSettings } = useContext(AcessibilidadeContext);
    const GlobalStyle = getGlobalStyle(settings.fonteGrande, settings.altoContraste);
    const Style = getStyle(settings.altoContraste)

    // body de teste para simular os logs
    const bodyLogsMock = [
        { id: 1, data: "2026-04-27", hora: "12:47", mensagem: "Log de nível comum", nivel: "comum" },
        { id: 2, data: "2026-04-27", hora: "12:48", mensagem: "Log de nível comum", nivel: "comum" },
        { id: 3, data: "2026-04-27", hora: "12:49", mensagem: "Log de nível medio", nivel: "medio" },
        { id: 4, data: "2026-04-27", hora: "12:50", mensagem: "Log de nível comum", nivel: "comum" },
        { id: 5, data: "2026-04-27", hora: "12:51", mensagem: "Log de nível alto", nivel: "alto" },
        { id: 6, data: "2026-04-27", hora: "12:52", mensagem: "Log de nível critico", nivel: "critico" },
        { id: 7, data: "2026-04-27", hora: "12:53", mensagem: "Log de nível comum", nivel: "comum" },
        { id: 8, data: "2026-04-27", hora: "12:54", mensagem: "Log de nível comum", nivel: "comum" },
        { id: 9, data: "2026-04-27", hora: "12:55", mensagem: "Log de nível medio", nivel: "medio" },
        { id: 10, data: "2026-04-27", hora: "12:56", mensagem: "Log de nível medio", nivel: "medio" },
        { id: 11, data: "2026-04-27", hora: "12:57", mensagem: "Log de nível comum", nivel: "comum" },
        { id: 12, data: "2026-04-27", hora: "12:58", mensagem: "Log de nível alto", nivel: "alto" },
        { id: 13, data: "2026-04-27", hora: "12:59", mensagem: "Log de nível comum", nivel: "comum" },
        { id: 14, data: "2026-04-27", hora: "13:00", mensagem: "Log de nível comum", nivel: "comum" },
        { id: 15, data: "2026-04-27", hora: "13:01", mensagem: "Log de nível comum", nivel: "comum" },
        { id: 16, data: "2026-04-27", hora: "13:02", mensagem: "Log de nível critico", nivel: "critico" },
        { id: 17, data: "2026-04-27", hora: "13:03", mensagem: "Log de nível medio", nivel: "medio" },
        { id: 18, data: "2026-04-27", hora: "13:04", mensagem: "Log de nível comum", nivel: "comum" },
        { id: 19, data: "2026-04-27", hora: "13:05", mensagem: "Log de nível comum", nivel: "comum" },
        { id: 20, data: "2026-04-27", hora: "13:06", mensagem: "Log de nível alto", nivel: "alto" },
        { id: 21, data: "2026-04-27", hora: "13:07", mensagem: "Log de nível alto", nivel: "alto" },
        { id: 22, data: "2026-04-27", hora: "13:08", mensagem: "Log de nível medio", nivel: "medio" },
        { id: 23, data: "2026-04-27", hora: "13:09", mensagem: "Log de nível comum", nivel: "comum" },
        { id: 24, data: "2026-04-27", hora: "13:10", mensagem: "Log de nível comum", nivel: "comum" },
        { id: 25, data: "2026-04-27", hora: "13:11", mensagem: "Log de nível critico", nivel: "critico" },
        { id: 26, data: "2026-04-27", hora: "13:12", mensagem: "Log de nível comum", nivel: "comum" },
        { id: 27, data: "2026-04-27", hora: "13:13", mensagem: "Log de nível medio", nivel: "medio" },
        { id: 28, data: "2026-04-27", hora: "13:14", mensagem: "Log de nível medio", nivel: "medio" },
        { id: 29, data: "2026-04-27", hora: "13:15", mensagem: "Log de nível comum", nivel: "comum" },
        { id: 30, data: "2026-04-27", hora: "13:16", mensagem: "Log de nível comum", nivel: "comum" }
    ];

    // esse bgl é pra aplicar a classe certa dependendo do nível do log
    const estilosPorNivel: Record<string, any> = {
        comum: Style.log_comum,
        medio: Style.log_medio,
        alto: Style.log_alto,
        critico: Style.log_critico,
    };

    return (
        <SafeAreaView style={[GlobalStyle.mainContainer, GlobalStyle.TemaBackground, Style.main]}>
            <Text style={[GlobalStyle.title, GlobalStyle.TemaTextoPrimario, Style.title]}>Registros</Text>

            <ScrollView style={[Style.logs_table]}>
                {bodyLogsMock.map((item) => (
                    <View key={item.id} style={[Style.linha_tabela, estilosPorNivel[item.nivel]]}>
                        <Text
                            style={[GlobalStyle.normalText, GlobalStyle.TemaTextoPrimario, Style.texto_tabela, estilosPorNivel[item.nivel]]}
                        >
                            {item.data} | {item.hora}: {item.mensagem}</Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}