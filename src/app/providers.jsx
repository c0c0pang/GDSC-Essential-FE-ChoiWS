"use client";

import { ChakraProvider, Container } from "@chakra-ui/react";
export function Providers({ children }) {
  return (
    <ChakraProvider>
      <Container maxW="container.sm" h="100%" padding={0} overflow='hidden'>
        {children}
      </Container>
    </ChakraProvider>
  )
}
