import { AcessibilidadeProvider } from './src/contexts/AcessibilidadeContext';
import { DrawerNavigator } from './src/navigation/DrawerNavigator';

export default function App() {
  return (
    <AcessibilidadeProvider>
      <DrawerNavigator />
    </AcessibilidadeProvider>
  );
}