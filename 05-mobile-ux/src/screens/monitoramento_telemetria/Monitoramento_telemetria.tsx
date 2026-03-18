import { Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Style from "./Style";
import { useContext, useState } from "react";
import { LineChart } from "react-native-gifted-charts";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { AcessibilidadeContext } from "../../contexts/AcessibilidadeContext";
import getGlobalStyle from "../../styles/GlobalStyle";

export default function Monitoramento_telemetria() {
    const { settings, setSettings } = useContext(AcessibilidadeContext);
    const [ temp, setTemp ] = useState(82);
    const GlobalStyle = getGlobalStyle(settings.fonteGrande);

    const tempData = [
        { value: 40 },
        { value: 80 },
        { value: 65 },
        { value: 90 },
        { value: 70 },
    ];

    // function teste() {
    //     console.log(settings)
    // }

    return (
        <SafeAreaView style={GlobalStyle.mainContainer}>
            <View style={Style.viewTemp}>
                <View style={Style.alertView}>
                    <Text style={GlobalStyle.subtitle}>Atenção!</Text>

                    <Text style={GlobalStyle.normalText}>A temperatura está muito alta!</Text>
                </View>

                <View>
                    <Text style={GlobalStyle.title}>Temperatura do sensor</Text>

                    <Text style={Style.textTemp}>
                        {temp}ºc  
                        
                        {/* mudando o ícone com base na temperatura */}
                        {
                            temp < 50 ? 
                                (<FontAwesome5 name="temperature-low" size={24} color="black" />) : 
                            temp < 80 ? 
                                (<FontAwesome6 name="temperature-half" size={24} color="black" />) 
                            : 
                                (<FontAwesome6 name="temperature-arrow-up" size={24} color="black" />)
                        }
                    </Text>
                </View>
            </View>

            <View style={Style.viewRegistroTemp}>
                <Text style={GlobalStyle.title}>Registro de temperaturas</Text>

                {/* <View style={Style.graficoTempTemporario}></View> */}
                <LineChart 
                    data={tempData}
                    thickness={3}
                    color="blue"
                    hideDataPoints={false}
                />
            </View>

            {/* <View>
                <Text onPress={() => teste()}>CLIQUE AQUI</Text>
            </View> */}
        </SafeAreaView>
    )
}