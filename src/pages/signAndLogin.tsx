import {
  Box,
  Tabs,
  TabList,
  TabPanel,
  Tab,
  TabPanels,
  ChakraProvider,
  Flex, Breadcrumb, BreadcrumbItem,
} from "@chakra-ui/react";
import React from "react";
import LogOnForm from "../components/LogOnForm";
import SignUpForm from "../components/SignUpForm";
import {Link} from 'react-router-dom';
import {ColorModeSwitcher} from '../ColorModeSwitcher';

const SignAndLoginPage = () => {
  return (
    <ChakraProvider>
        <Flex fontStyle="oblique" color="black" justifyContent="center" alignItems="center" width="100%" bg="yellow" padding="10px">
                    <Breadcrumb separator="">
                    
                        <BreadcrumbItem>
                            <Tabs defaultIndex={3} variant="enclosed">
                                <TabList>
                                    <Tab fontSize="lg"><Link to="/">Home</Link></Tab>
                                    <Tab fontSize="lg"><Link to="/contact">Contact</Link></Tab>
                                    <Tab fontSize="lg"><Link to="/about">About</Link></Tab>
                                    <Tab fontSize="lg"><Link to="/register">Sign up / Login</Link></Tab>
                                </TabList>
                            </Tabs>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <ColorModeSwitcher/>
                        </BreadcrumbItem>
                        
                    </Breadcrumb>
            </Flex>
            <Flex w="100%" h="100vh" alignItems="center" justifyContent="center">
            <Box>
                <Tabs isFitted variant="enclosed">
                <TabList>
                    <Tab color="yellow.400">Sign Up</Tab>
                    <Tab color="yellow.400">Login</Tab>
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
