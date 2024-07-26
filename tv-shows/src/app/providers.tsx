'use client'

import { PlannerContextProvider } from '@/components/features/planner/Planner/components/PlannerContextProvider';
import theme from '@/styles/themes/theme'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <PlannerContextProvider>
        {children}
      </PlannerContextProvider>
    </ChakraProvider>
  );
}