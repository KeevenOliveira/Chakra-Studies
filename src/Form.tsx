import {Box, Tabs, TabList, TabPanel, Tab, TabPanels, useColorMode, useColorModeValue} from "@chakra-ui/react";
import React from "react";
import LogOnForm from "./LogOnForm";
import SignUpForm from "./SignUpForm";

const form = () =>{
 
    return(
        <Box>
            <Tabs isFitted variant="enclosed">
                <TabList>
                    <Tab color="yellow.400">Sign Up</Tab>
                    <Tab color="yellow.400">Login</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <SignUpForm/>
                    </TabPanel>
                    <TabPanel>
                        <LogOnForm/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    ); 
}
export default form;