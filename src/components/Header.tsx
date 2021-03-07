import { Link } from 'react-router-dom';
import {
    Breadcrumb,
    BreadcrumbItem,
    Flex, Tabs, TabList, Tab,
  } from "@chakra-ui/react";
  import React from 'react';
  import { ColorModeSwitcher } from "../ColorModeSwitcher"
const Header = ()=>{
    
    return(
        <>

            <Flex fontStyle="oblique" color="black" justifyContent="center" alignItems="center" width="100%" bg="yellow" padding="10px">
                <Breadcrumb separator="">
                
                    <BreadcrumbItem>
                        <Tabs variant="enclosed">
                            <TabList >
                                <Tab><Link to="/">Home</Link></Tab>
                                <Tab><Link to="/contact">Contact</Link></Tab>
                                <Tab><Link to="/about">About</Link></Tab>
                                <Tab><Link to="/register">Sign up / Login</Link></Tab>
                            </TabList>
                        </Tabs>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <ColorModeSwitcher/>
                    </BreadcrumbItem>
                    
                </Breadcrumb>
           </Flex>
        </>         
    );
}

export default Header;