import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import getGlobalStyle from "../../styles/GlobalStyle";
import { useContext, useState } from "react";
import { AcessibilidadeContext } from "../../contexts/AcessibilidadeContext";
import { getStyle } from "./Style";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Shadow } from "react-native-shadow-2";

export default function Controle_atuadores() {
    const { settings, setSettings } = useContext(AcessibilidadeContext);
    const GlobalStyle = getGlobalStyle(settings.fonteGrande, settings.altoContraste);
    const Style = getStyle(settings.altoContraste);

    // usa o contexto de fonte aumentada para definir o tamanho dos icones
    const tamanhoIcons = settings.fonteGrande ? 85 : 60

    // aqui teria a função para verificar na nuvem se está em operação ou não
    // porém ainda nao está implementado, então vai ficar somente no useState msm
    const [ estadoAtuacao, setEstadoAtuacao] = useState(true);

    const handleParadaEmergencia = () => {
        console.log("executa a requisição para fazer a parada de emergencia.")
    }

    return (
        <SafeAreaView style={[ GlobalStyle.mainContainer, GlobalStyle.TemaBackground, Style.main ]}>
            <View style={[ Style.viewEstadoAtuador ]}>
                <Text style={[GlobalStyle.title, GlobalStyle.TemaTextoPrimario]}>Estado do atuador</Text>

                <Text style={[GlobalStyle.TemaTextoPrimario]}>
                    {estadoAtuacao ? (
                        <Shadow
                            distance={20}
                            startColor={`${Style.icon_indicador_operacao.color}30`}
                            endColor={'#00000000'}
                            offset={[0, 0]}
                            style={{ borderRadius: 100 }}
                        >
                            <MaterialCommunityIcons name="lightbulb-on" size={tamanhoIcons} color={Style.icon_indicador_operacao.color} />
                        </Shadow>
                        
                    ) : (
                        <MaterialCommunityIcons name="lightbulb-outline" size={tamanhoIcons} />
                    )}
                </Text>


                <Text style={[
                    GlobalStyle.subtitle, 
                    GlobalStyle.TemaTextoPrimario, 
                    estadoAtuacao ? Style.icon_indicador_operacao : ""
                ]}>
                    {estadoAtuacao ? "Em operação..." : "Fora de operação."}
                </Text>
            </View>

            <View style={[ Style.viewParadaEmergencia ]}>
                <Text style={[GlobalStyle.title, GlobalStyle.TemaTextoPrimario]}>Parada de emergência</Text>

                <TouchableOpacity onPress={() => handleParadaEmergencia()}>
                    <MaterialIcons name="radio-button-checked" size={tamanhoIcons + 20} color={Style.btn_parada_emergencia.color} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}