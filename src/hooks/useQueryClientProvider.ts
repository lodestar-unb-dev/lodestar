import { QueryClient } from 'react-query';

const queryClient = new QueryClient();

export function useQueryClientProvider(): QueryClient {
  return queryClient;
}
