import React from 'react';
import {ChakraProvider ,Stack, Text, Box} from '@chakra-ui/react';
import Header from '../components/Header';

const HomePage = () =>{
    
    return(
        <ChakraProvider>
        <Header/>
            <Stack width="100%" height="100vh" justifyContent="center" alignItems="center">
                <Box>
                    <Text fontSize="50px">Hello World, This is the Home Page🎉</Text>
                </Box>
            </Stack>
        </ChakraProvider>
    );
}

export default HomePage;