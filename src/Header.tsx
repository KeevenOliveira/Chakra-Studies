import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Flex,
    Box,
    Button,
    Heading,
    Spacer,
  } from "@chakra-ui/react"
import React from 'react';
import { ColorModeSwitcher } from "./ColorModeSwitcher"

const Header =()=>{
    return(
        <Flex direction="row-reverse" fontStyle="oblique" color="black" justifyContent="center" alignItems="center" width="100%" bg="yellow.200" padding="10px">
            <Breadcrumb separator="">
            
            <BreadcrumbItem>
                <BreadcrumbLink>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink>Card</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink>Sign up / Login</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                    <ColorModeSwitcher/>
            </BreadcrumbItem>
                
            </Breadcrumb>
        </Flex>
            
            
    );
}

export default Header;