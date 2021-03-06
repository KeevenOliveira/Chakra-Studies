import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme,
  Stack,
} from "@chakra-ui/react"
import Form from './Form';
import { ColorModeSwitcher } from "./ColorModeSwitcher"

export const App = () => (
  <ChakraProvider theme={theme}>
      <Stack justifySelf="flex-end">
        <ColorModeSwitcher />
      </Stack>
      <Box width="100%" height="100vh" display="flex" alignItems="center" justifyContent="center" flexDirection="column" >
       <Form />
      </Box>
    </ChakraProvider>
)
