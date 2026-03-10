import { Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import GlobalStyle from "../../styles/GlobalStyle";
import Style from "./Style";
import { useState } from "react";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function Monitoramento_telemetria() {
    const [ temp, setTemp ] = useState(82);

    return (
        <SafeAreaView style={GlobalStyle.mainContainer}>
            <View style={Style.viewTemp}>
                <View style={Style.alertView}>
                    <Text style={Style.subtitle}>Atenção!</Text>

                    <Text style={Style.normalText}>A temperatura está muito alta!</Text>
                </View>

                <View>
                    <Text style={Style.title}>Temperatura do sensor</Text>

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
                <Text style={Style.title}>Registro de temperaturas</Text>

                <View style={Style.graficoTempTemporario}></View>
            </View>
        </SafeAreaView>
    )
}