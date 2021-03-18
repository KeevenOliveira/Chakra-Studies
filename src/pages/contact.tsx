import React from "react";
import {
    ChakraProvider,
    Stack,
    Box,
    Flex,
    Breadcrumb,
    BreadcrumbItem,
    Tab,
    Tabs,
    TabList,
    Image,
    Input, FormControl, InputGroup, InputLeftElement, Textarea, Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { VscMail, VscAccount } from "react-icons/vsc";
import Bottom from "../components/Bottom";
import email from '../assets/email.svg';
import logo from '../assets/logo.png';


const ContactPage = () => {

    return (
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
                    <Breadcrumb separator="">
                        <BreadcrumbItem>
                            <Tabs colorScheme="black" defaultIndex={2} variant="enclosed">
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
                <Stack
                    width="100%"
                    height="100vh"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box borderRadius="20px" padding="30px" boxShadow="dark-lg">
                        <Image
                            width="300px"
                            src={email}
                        ></Image>
                        <FormControl isRequired>
                            <InputGroup>
                                <InputLeftElement children={<VscAccount />} />
                                <Input
                                    type="name"
                                    placeholder="Nome"
                                />
                            </InputGroup>
                        </FormControl>
                        <FormControl isRequired>
                            <InputGroup>
                                <InputLeftElement children={<VscMail />} />
                                <Input
                                    type="email"
                                    placeholder="Email"
                                />
                            </InputGroup>
                        </FormControl>
                        <Textarea placeholder="Digite sua mensagem" marginTop="10px"></Textarea>
                        <Box width="10px">
                            <Button type="submit">Enviar</Button>
                            </Box>
                        </Box>
                    </Stack>
            </Box>
            <Bottom />
        </ChakraProvider>
    );
};

export default ContactPage;
