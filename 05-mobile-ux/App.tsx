import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AcessibilidadeProvider } from './src/contexts/AcessibilidadeContext';
import { DrawerNavigator } from './src/navigation/DrawerNavigator';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AcessibilidadeProvider>
        <DrawerNavigator />
      </AcessibilidadeProvider>
    </QueryClientProvider>
  );
}