import {Input, Stack, Text, Button, FormControl, InputGroup, InputRightElement,InputLeftElement} from "@chakra-ui/react";
import { VscMail, VscLock, VscSignIn } from "react-icons/vsc";
import React from 'react';

const LogOnForm = () =>{
    return(
        <form action="submit">
        <Stack spacing={2} boxShadow="xl" borderWidth="2px" padding="10" borderRadius="40px">
        <Text fontSize="3xl">Login</Text>
        {/* Input to say email */}
        <FormControl isRequired> 
            <InputGroup>
                <InputLeftElement children={<VscMail/>}/>
                  <Input  type="email" placeholder="Say your e-mail"/>
            </InputGroup>
        </FormControl>
        {/* First input to say your password */}
        <FormControl isRequired> 
            <InputGroup>
                <InputLeftElement children={<VscLock/>}/>
                    <Input type="password"  placeholder="Tell me your password here"/>
            </InputGroup>
        </FormControl>
        <FormControl> 
            <InputGroup>
                <InputRightElement children={<VscSignIn />}/>
                <Button color="black" type="submit" bg="yellow.300" size="lg">Login</Button>
            </InputGroup>
        </FormControl>
        </Stack>
    </form>
    );
}
export default LogOnForm;