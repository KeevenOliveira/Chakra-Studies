import React from 'react';
import {ChakraProvider, Stack, Box, Text, Flex, Breadcrumb, BreadcrumbItem, Tab, Tabs, TabList, Image, Button} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {ColorModeSwitcher} from '../ColorModeSwitcher';
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import Bottom from '../components/Bottom';
import logo from '../assets/logo.png';
import me from '../assets/kenny.png';

const AboutPage= () =>{
    
    return(
        <ChakraProvider>
            <Flex
                color="black"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                height="8vh"
                bg="blue.200"
                padding="10px"
            >
                
                    <Image
                        width="40px"
                        alt="logo"
                        src={logo}
                    ></Image>                
                <Box>
                    <Breadcrumb Index separator="">
                        <BreadcrumbItem>
                            <Tabs colorScheme="black" defaultIndex={1} variant="enclosed">
                                <TabList>
                                    <Tab fontSize="lg">
                                        <Link to="/">Home</Link>
                                    </Tab>
                                    {/* <Tab fontSize="lg"><Link to="/contact">Contact</Link></Tab> */}
                                    <Tab fontSize="lg">
                                        <Link to="/about">Sobre</Link>
                                    </Tab>
                                    <Tab fontSize="lg">
                                        <Link to="/contact">Contato</Link>
                                    </Tab>
                                    <Tab>
                                        <Link to="/register">Login</Link>
                                    </Tab>
                                </TabList>
                            </Tabs>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Box>
                <Box>
                    <ColorModeSwitcher />
                </Box>
            </Flex>
            <Box>
                <Box d="flex" justifyContent="center" marginTop="35px" marginBottom="0" height="2vh" alignItems="center">
                    <Text fontSize="30px">Sobre mim</Text>
                </Box>
                <Stack marginTop="-50px" width="100%" height="100vh" justifyContent="center" alignItems="center">
                    <Box bg="blue.300" borderRadius="30px" d="flex" flexDirection="column" justifyContent="center" boxShadow="dark-lg" alignItems="center">
                        <Image color="gray.200" marginTop="20px" width="300px" borderRadius="40px" src={me}></Image>
                        <Box d="flex" justifyContent="center" alignItems="center">
                            <Text padding="10px" color="white" margin="5px" marginTop="10px" textAlign="center">Meu nome é Kennedy Adelson Lopes, sou corretor crediciado na <a href="https://direcional.com.br/">Direcional.</a></Text>
                            <Text padding="10px" color="white" margin="5px" marginTop="10px" textAlign="center"></Text>
                        </Box>
                        <Box d="flex" marginBottom="20px">
                            <Button size="sm" leftIcon={<FaInstagram />}><a href="https://www.instagram.com/lopesconsultor123/">Instagram</a></Button>
                            <Button size="sm" leftIcon={<FaWhatsapp />} marginLeft="5px"><a href="https://api.whatsapp.com/send?phone=5581982687667&text=Oi%20Kennedy%2C%20tudo%20bem%3F%20Queria%20saber%20mais%20sobre%20algum%20im%C3%B3vel.">Whatsapp</a></Button>
                            <Button size="sm" leftIcon={<FaFacebook />} marginLeft="5px"><a href="https://www.facebook.com/kennedy.adelson">Facebook</a></Button>
                        </Box>
                    </Box>
                </Stack>
            </Box>
            <Bottom/>
        </ChakraProvider>
    );
}

export default AboutPage;