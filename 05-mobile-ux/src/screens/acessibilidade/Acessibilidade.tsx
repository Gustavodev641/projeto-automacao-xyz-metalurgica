import { Text, View, Switch } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { AcessibilidadeContext } from "../../contexts/AcessibilidadeContext";
import { useContext } from "react";
import Style from "./Style";
import getGlobalStyle from "../../styles/GlobalStyle";

export default function Acessibilidade() {
    const { settings, setSettings } = useContext(AcessibilidadeContext);
    const GlobalStyle = getGlobalStyle(settings.fonteGrande);

    

    return (
        <SafeAreaView style={[GlobalStyle.mainContainer, Style.body]}>
            <Text style={GlobalStyle.title}>Configurações de acessibilidade</Text>

            <View>
                <View style={Style.viewSwitch}>
                    <Text style={[GlobalStyle.normalText, Style.textoSwitch]}>Habilitar narração</Text>
                    <Switch
                        value={settings.narracao}
                        onValueChange={(v) =>
                            setSettings({ ...settings, narracao: v })
                        }
                    />
                </View>
                
                <View style={Style.viewSwitch}>
                    <Text style={[GlobalStyle.normalText, Style.textoSwitch]}>Habilitar fonte aumentada</Text>
                    <Switch
                        value={settings.fonteGrande}
                        onValueChange={(v) =>
                            setSettings({ ...settings, fonteGrande: v })
                        }
                    />
                </View>
                
                <View style={Style.viewSwitch}>
                    <Text style={[GlobalStyle.normalText, Style.textoSwitch]}>Habilitar alto-contraste</Text>
                    <Switch
                        value={settings.altoContraste}
                        onValueChange={(v) =>
                            setSettings({ ...settings, altoContraste: v })
                        }
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}