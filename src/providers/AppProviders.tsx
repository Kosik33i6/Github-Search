import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppContextProvider } from './AppContextProvider';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>{children}</AppContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
