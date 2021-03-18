import {Input, Stack, Text, Button, FormControl, InputGroup, InputRightElement,InputLeftElement} from "@chakra-ui/react";
import { VscAccount, VscMail, VscLock, VscSignIn } from "react-icons/vsc";
import React from "react";

const SignUpForm = () =>{
    return(
            <Stack spacing={1} boxShadow="xl" borderWidth="2px" padding="10" borderRadius="40px">
            <Text fontSize="3xl">Crie sua conta aqui</Text>
            {/* Input to say first and second name */}
            <FormControl isRequired> 
                <InputGroup>
                    <InputLeftElement children={<VscAccount/>}/>
                        <Input  type="name" placeholder="Nome completo" aria-label="name"/>                                    
                </InputGroup>
            </FormControl>
            {/* Input to say email */}
            <FormControl isRequired> 
                <InputGroup>
                    <InputLeftElement children={<VscMail/>}/>
                      <Input  type="email" placeholder="E-mail"/>
                </InputGroup>
            </FormControl>
            {/* First input to say your password */}
            <FormControl isRequired> 
                <InputGroup>
                    <InputLeftElement children={<VscLock/>}/>
                        <Input type="password"  placeholder="Senha"/>
                </InputGroup>
            </FormControl>
                    {/* Second input to confirm your password */}
            <FormControl isRequired> 
                <InputGroup>
                    <InputLeftElement children={<VscLock />}/>
                        <Input type="password" placeholder="Sua senha novamente"/>
                </InputGroup>
            </FormControl>            
                <FormControl> 
                <InputGroup>
                    <InputRightElement children={<VscSignIn />}/>
                    <Button color="black" type="submit" bg="blue.300" size="lg">Registrar</Button>
                </InputGroup>
            </FormControl>
            </Stack>
    ); 
}
export default SignUpForm;