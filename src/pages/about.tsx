import React from 'react';
import {ChakraProvider, Stack, Box, Text, Flex, Breadcrumb, BreadcrumbItem, Tab, Tabs, TabList} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {ColorModeSwitcher} from '../ColorModeSwitcher';

const AboutPage= () =>{
    
    return(
        <ChakraProvider>
            <Flex fontStyle="oblique" color="black" justifyContent="center" alignItems="center" width="100%" bg="yellow" padding="10px">
                    <Breadcrumb separator="">
                    
                        <BreadcrumbItem>
                            <Tabs defaultIndex={2} variant="enclosed">
                                <TabList >
                                    <Tab fontSize="lg"><Link to="/">Home</Link></Tab>
                                    {/* <Tab fontSize="lg"><Link to="/contact">Contact</Link></Tab> */}
                                    <Tab fontSize="lg"><Link to="/about">About</Link></Tab>
                                    <Tab fontSize="lg"><Link to="/register">Login</Link></Tab>
                                </TabList>
                            </Tabs>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <ColorModeSwitcher/>
                        </BreadcrumbItem>
                        
                    </Breadcrumb>
            </Flex>
            <Stack width="100%" height="100vh" justifyContent="center" alignItems="center">
                <Box>
                    <Text fontSize="50px">Hello World, This is the About Page🚀</Text>
                </Box>
            </Stack>
        </ChakraProvider>
    );
}

export default AboutPage;