import { useContext } from "react";
import { Text, ScrollView, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { AcessibilidadeContext } from "../../contexts/AcessibilidadeContext";
import getGlobalStyle from "../../styles/GlobalStyle";
import { getStyle } from "./Style";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useIsFocused } from "@react-navigation/native";


export default function Registro_de_eventos() {
    const { settings, setSettings } = useContext(AcessibilidadeContext);
    const GlobalStyle = getGlobalStyle(settings.fonteGrande, settings.altoContraste);
    const Style = getStyle(settings.altoContraste)
    const isFocused = useIsFocused();

    const FetchLogsData = async () => {
        const response = await axios.get(`http://3.20.115.136:8000/api/logs`);

        console.log("logs recuperados:");

        return response.data;
    }

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['logs'],
        queryFn: FetchLogsData,
        refetchInterval: 5000,
        refetchIntervalInBackground: false,
        enabled: isFocused
    });

    const bodyLogs = data ?? [];

    // esse bgl é pra aplicar a classe certa dependendo do nível do log
    const estilosPorNivel: Record<string, any> = {
        comum: Style.log_comum,
        medio: Style.log_medio,
        alto: Style.log_alto,
        critico: Style.log_critico,
    };

    if (error) {
        return (
            <SafeAreaView style={[GlobalStyle.mainContainer, GlobalStyle.TemaBackground, Style.main]}>
                <Text style={[GlobalStyle.title, GlobalStyle.TemaTextoPrimario, Style.title]}>Registros</Text>
                <Text style={[GlobalStyle.normalText, GlobalStyle.TemaTextoPrimario]}>Erro ao carregar os dados: {error.message}</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={[GlobalStyle.mainContainer, GlobalStyle.TemaBackground, Style.main]}>
            <Text style={[GlobalStyle.title, GlobalStyle.TemaTextoPrimario, Style.title]}>Registros</Text>

            <ScrollView style={[Style.logs_table]}>
                {bodyLogs.map((item: any) => (
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