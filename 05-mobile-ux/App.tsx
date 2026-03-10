import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Monitoramento_telemetria from './src/screens/monitoramento_telemetria/Monitoramento_telemetria';
import Controle_atuadores from './src/screens/controle_atuadores/Controle_atuadores';
import Registro_de_eventos from './src/screens/registro_de_eventos/Registro_de_eventos';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen 
          name='Monitoramento de telemetria'
          component={Monitoramento_telemetria}
          options={{
            drawerIcon: ({ size, color }) => (
              <FontAwesome6 name="temperature-half" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen 
          name='Controle e atuadores'
          component={Controle_atuadores}
          options={{
            drawerIcon: ({ size, color }) => (
              <AntDesign name="control" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen 
          name='Registro de eventos'
          component={Registro_de_eventos}
          options={{
            drawerIcon: ({ size, color }) => (
              <FontAwesome5 name="book" size={24} color="black" />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}