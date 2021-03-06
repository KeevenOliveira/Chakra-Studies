import {Box, Tabs, TabList, TabPanel, Tab, TabPanels} from "@chakra-ui/react";
import React from "react";
import LogOnForm from "./LogOnForm";
import SignUpForm from "./SignUpForm";

const form = () =>{
    return(
        <Box>
            <Tabs>
                <TabList>
                    <Tab>Sign Up</Tab>
                    <Tab>Login</Tab>
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