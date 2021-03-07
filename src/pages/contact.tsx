import Header from '../components/Header';
import React from 'react';
import {ChakraProvider, Stack, Box, Text} from '@chakra-ui/react';

const ContactPage= () =>{
    
    return(
        <ChakraProvider>
        <Header/>
            <Stack width="100%" height="100vh" justifyContent="center" alignItems="center">
                <Box>
                    <Text fontSize="50px">Hello World, This is the Contact Page🐱‍💻</Text>
                </Box>
            </Stack>
        </ChakraProvider>
    );
}

export default ContactPage;