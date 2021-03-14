import React from 'react';
import {ChakraProvider, Stack, Box, Text, Flex, Breadcrumb, BreadcrumbItem, Tab, Tabs, TabList, Image} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {ColorModeSwitcher} from '../ColorModeSwitcher';

const ContactPage= () =>{
    
    return(
        <ChakraProvider>
            <Flex fontStyle="oblique" color="black" justifyContent="space-between" alignItems="center" width="100%" bg="blue.200" padding="10px">
                <Box>
                    <Image width="50px" alt="logo" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F50ff5c5e-64d5-43c6-a04d-95b29e0007b6%2Flogo.png?table=block&id=e84a42e5-1647-4d58-a1f4-a294698c2468&width=1460&userId=3286d9fc-f488-4b46-88e5-40497632400d&cache=v2"></Image>
                </Box>
                    <Breadcrumb separator="">
                        <BreadcrumbItem>
                            <Tabs defaultIndex={2} variant="enclosed">
                                <TabList >
                                    <Tab fontSize="lg"><Link to="/">Home</Link></Tab>
                                    {/* <Tab fontSize="lg"><Link to="/contact">Contact</Link></Tab> */}
                                    <Tab fontSize="lg"><Link to="/about">Sobre</Link></Tab>
                                    <Tab fontSize="lg"><Link to="/contact">Contato</Link></Tab>
                                </TabList>
                            </Tabs>
                        </BreadcrumbItem>
                        
                    </Breadcrumb>  
                        <ColorModeSwitcher/>
            </Flex>
            <Stack width="100%" height="100vh" justifyContent="center" alignItems="center">
                <Box>
                    <Text fontSize="50px">Hello World, This is the Contact Page📞</Text>
                </Box>
            </Stack>
        </ChakraProvider>
    );
}

export default ContactPage;