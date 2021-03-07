import {
  Box,
  Tabs,
  TabList,
  TabPanel,
  Tab,
  TabPanels,
  ChakraProvider,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import LogOnForm from "../components/LogOnForm";
import SignUpForm from "../components/SignUpForm";
import Header from '../components/Header';

const SignAndLoginPage = () => {
  return (
    <ChakraProvider>
        <Header/>
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
