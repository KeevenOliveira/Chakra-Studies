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

const SignAndLoginPage = () => {
  return (
    <ChakraProvider>
        <Flex color="black" justifyContent="space-between" alignItems="center" width="100%" bg="yellow" padding="10px">
                <Box>
                    <Image width="40px" alt="logo" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1401cf96-8bed-4694-af4e-73de104c6cab/logo.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210314T205341Z&X-Amz-Expires=86400&X-Amz-Signature=62d3f5053c4086ad7350abfd21d716dd3c5edc42a5e042809db89534fcde2e96&X-Amz-SignedHeaders=host"></Image>
                </Box>
                    <Breadcrumb separator="">
                        <BreadcrumbItem>
                            <Tabs defaultIndex={2} variant="enclosed">
                                <TabList>
                                    <Tab fontSize="lg"><Link to="/">Home</Link></Tab>
                                    {/* <Tab fontSize="lg"><Link to="/contact">Contact</Link></Tab> */}
                                    <Tab fontSize="lg"><Link to="/about">About</Link></Tab>
                                    <Tab fontSize="lg"><Link to="/register">Login</Link></Tab>
                                </TabList>
                            </Tabs>
                        </BreadcrumbItem>                       
                    </Breadcrumb>
                    
                    <ColorModeSwitcher/>
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
