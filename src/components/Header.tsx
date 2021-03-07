import { Link } from 'react-router-dom';
import {
    Breadcrumb,
    BreadcrumbItem,
    Flex,
  } from "@chakra-ui/react";
  import React from 'react';
  import { ColorModeSwitcher } from "../ColorModeSwitcher"
const Header = ()=>{
    
    return(
        <>

            <Flex fontStyle="oblique" color="black" justifyContent="center" alignItems="center" width="100%" bg="yellow" padding="10px">
                <Breadcrumb separator="">
                
                    <BreadcrumbItem>
                        <Link to="/">Home</Link>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <Link to="/contact">Contact</Link>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <Link to="/about">About</Link>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <Link to="/register">Sign up / Login</Link>
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