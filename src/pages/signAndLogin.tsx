import {
  Box,
  Tabs,
  TabList,
  TabPanel,
  Tab,
  TabPanels,
  ChakraProvider,
  Flex, Breadcrumb, BreadcrumbItem, Image,
} from "@chakra-ui/react";
import React from "react";
import LogOnForm from "../components/LogOnForm";
import SignUpForm from "../components/SignUpForm";
import {Link} from 'react-router-dom';
import {ColorModeSwitcher} from '../ColorModeSwitcher';
import logo from '../assets/logo.png';

const SignAndLoginPage = () => {
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
                            <Tabs colorScheme="black" defaultIndex={3} variant="enclosed">
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
            <Flex w="100%" h="100vh" alignItems="center" justifyContent="center">
            <Box>
                <Tabs isFitted variant="enclosed">
                <TabList>
                    <Tab color="dark.400">Registrar</Tab>
                    <Tab color="dark.400">Login</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                    <SignUpForm />
                    </TabPanel>
                    <TabPanel>
                    <LogOnForm />
                    </TabPanel>
                </TabPanels>
                </Tabs>
            </Box>

            </Flex>
    </ChakraProvider>
  );
};
export default SignAndLoginPage;
