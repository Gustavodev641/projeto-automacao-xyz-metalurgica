import { Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useContext, useState } from "react";
import { LineChart } from "react-native-gifted-charts";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { AcessibilidadeContext } from "../../contexts/AcessibilidadeContext";
import getGlobalStyle from "../../styles/GlobalStyle";
import { getStyle } from "./Style";

export default function Monitoramento_telemetria() {
    const { settings, setSettings } = useContext(AcessibilidadeContext);
    const [ temp, setTemp ] = useState(85);
    const GlobalStyle = getGlobalStyle(settings.fonteGrande, settings.altoContraste);
    const Style = getStyle(settings.altoContraste)

    const tempData = [
        { value: 40 },
        { value: 80 },
        { value: 65 },
        { value: 90 },
        { value: 70 },
    ];

    return (
        <SafeAreaView style={[GlobalStyle.mainContainer, GlobalStyle.TemaBackground]}>
            <View style={Style.viewTemp}>
                {temp >= 80 ? (
                    <View style={[Style.alertView, Style.TemaAlerta]}>
                        <Text style={[GlobalStyle.subtitle, Style.TemaTextoAlert]}>Atenção!</Text>

                        <Text style={[GlobalStyle.normalText, Style.TemaTextoAlert]}>A temperatura está muito alta!</Text>
                    </View>
                ) : ""}
                

                <View>
                    <Text style={[GlobalStyle.title, GlobalStyle.TemaTextoPrimario]}>Temperatura do sensor</Text>

                    <Text style={[GlobalStyle.TextGrandao, GlobalStyle.TemaTextoPrimario]}>
                        {temp}ºc  
                        
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
                />
            </View>
        </SafeAreaView>
    )
}