import { Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useContext } from "react";
import { LineChart } from "react-native-gifted-charts";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { AcessibilidadeContext } from "../../contexts/AcessibilidadeContext";
import getGlobalStyle from "../../styles/GlobalStyle";
import { getStyle } from "./Style";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useIsFocused } from "@react-navigation/native";

export default function Monitoramento_telemetria() {
    const { settings, setSettings } = useContext(AcessibilidadeContext);
    const isFocused = useIsFocused();
    const GlobalStyle = getGlobalStyle(settings.fonteGrande, settings.altoContraste);
    const Style = getStyle(settings.altoContraste)

    const fetchTempData = async () => {
        const response = await axios.get(`http://3.20.115.136:8000/dados-brutos`);
        return response.data;
    }

    const fetchStatusMaquina = async () => {
        const response = await axios.get(`http://3.20.115.136:8000/status-maquina`);
        return response.data;
    }

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["statusMaquina"],
        queryFn: fetchStatusMaquina,
        refetchInterval: 5000,
        refetchIntervalInBackground: false,
        enabled: isFocused
    })

    const { data: tempData, isLoading: isLoadingTempData, isError: isErrorTempData } = useQuery({
        queryKey: ["tempData"],
        queryFn: fetchTempData,
        refetchInterval: 5000,
        refetchIntervalInBackground: false,
        enabled: isFocused,
        select: (rawList) => {
            if (!Array.isArray(rawList)) return [];
            
            // traduz a lista que retorna da API para a lista mockada q estava antes
            return rawList.slice(0, 6).reverse().map(item => ({
                value: item.current_temperature,
            }));
        }
    })

    const temp = data?.current_temperature ?? 0;
    const message = data?.operation_type ?? "";

    return (
        <SafeAreaView style={[GlobalStyle.mainContainer, GlobalStyle.TemaBackground]}>
            <View style={Style.viewTemp}>
                {temp >= 70 ? (
                    <View style={[Style.alertView, Style.TemaAlerta]}>
                        <Text style={[GlobalStyle.subtitle, Style.TemaTextoAlert]}>Atenção!</Text>

                        <Text style={[GlobalStyle.normalText, Style.TemaTextoAlert]}>
                            {isLoading ? "Carregando..." : isError ? "Erro ao carregar os dados" : message}
                        </Text>
                    </View>
                ) : ""}


                <View>
                    <Text style={[GlobalStyle.title, GlobalStyle.TemaTextoPrimario]}>Temperatura do sensor</Text>

                    <Text style={[GlobalStyle.TextGrandao, GlobalStyle.TemaTextoPrimario]}>
                        {isLoading ? "Carregando..." : isError ? "Erro ao carregar os dados" : temp}ºc

                        {/* mudando o ícone com base na temperatura */}
                        {
                            temp < 50 ?
                                (<FontAwesome5 name="temperature-low" size={24} color={GlobalStyle.TemaTextoPrimario} />) :
                                temp < 80 ?
                                    (<FontAwesome6 name="temperature-half" size={24} color={GlobalStyle.TemaTextoPrimario} />)
                                    :
                                    (<FontAwesome6 name="temperature-arrow-up" size={24} color={GlobalStyle.TemaTextoPrimario} />)
                        }
                    </Text>
                </View>
            </View>

            <View style={Style.viewRegistroTemp}>
                <Text style={[GlobalStyle.title, GlobalStyle.TemaTextoPrimario]}>Registro de temperaturas</Text>

                {/* <View style={Style.graficoTempTemporario}></View> */}
                <LineChart
                    data={tempData}
                    thickness={settings.altoContraste ? 5 : 3}
                    hideDataPoints={false}
                    color={Style.CorLinhaGrafico.color}
                    dataPointsColor={Style.CorLinhaGrafico.color}
                    yAxisTextStyle={Style.CorPrincipalGrafico}
                    xAxisLabelTextStyle={Style.CorPrincipalGrafico}
                    rulesColor={Style.CorPrincipalGrafico.color}
                    verticalLinesColor={Style.CorPrincipalGrafico.color}
                    yAxisColor={Style.CorPrincipalGrafico.color}
                    xAxisColor={Style.CorPrincipalGrafico.color}
                    width={285}
                />
            </View>
        </SafeAreaView>
    )
}