import { ReactNode } from "react";
import { QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";

import { useQueryClientProvider } from "../hooks/useQueryClientProvider";
import { theme } from "../styles/theme";

type Props = {
  children: ReactNode;
};

export function AppProvider({children}: Props) {
  const queryClient = useQueryClientProvider();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}