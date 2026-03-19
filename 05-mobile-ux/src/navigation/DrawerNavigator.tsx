import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Monitoramento_telemetria from '../screens/monitoramento_telemetria/Monitoramento_telemetria';
import Controle_atuadores from '../screens/controle_atuadores/Controle_atuadores';
import Registro_de_eventos from '../screens/registro_de_eventos/Registro_de_eventos';
import Acessibilidade from '../screens/acessibilidade/Acessibilidade';
import { AcessibilidadeContext } from '../contexts/AcessibilidadeContext';
import { useContext } from 'react';
import { getDrawerStyle } from '../styles/DrawerStyle';

export const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();
    const { settings, setSettings } = useContext(AcessibilidadeContext);
    const drawerStyle = getDrawerStyle(settings.altoContraste);

    return (
        <NavigationContainer>
        <Drawer.Navigator
          screenOptions={drawerStyle}
        >
          <Drawer.Screen 
            name='Monitoramento de telemetria'
            component={Monitoramento_telemetria}
            options={{
              drawerIcon: ({ size, color }) => (
                <FontAwesome6 name="temperature-half" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen 
            name='Controle e atuadores'
            component={Controle_atuadores}
            options={{
              drawerIcon: ({ size, color }) => (
                <AntDesign name="control" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen 
            name='Registro de eventos'
            component={Registro_de_eventos}
            options={{
              drawerIcon: ({ size, color }) => (
                <FontAwesome5 name="book" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen 
            name='Acessibilidade'
            component={Acessibilidade}
            options={{
              drawerIcon: ({ size, color }) => (
                <Ionicons name="accessibility" size={size} color={color} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    )
}