import React from "react";
import {
    ChakraProvider,
    Stack,
    Box,
    Flex,
    Breadcrumb,
    BreadcrumbItem,
    Tab,
    Tabs,
    TabList,
    Image,
    Input, FormControl, InputGroup, InputLeftElement, Textarea, Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { VscMail, VscAccount } from "react-icons/vsc";
import Bottom from "../components/Bottom";
import email from '../assets/email.svg';


const ContactPage = () => {

    return (
        <ChakraProvider>
            <Flex
                fontStyle="oblique"
                color="black"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                bg="blue.200"
                padding="10px"
            >
                <Box>
                    <Image
                        width="40px"
                        alt="logo"
                        src="https://lh3.googleusercontent.com/03vLfAOMrOIvFrf_zqAhEG8VdOLix8EArHV4d0P9myV8I-Iy_lSRniwbKiL83UCbCcewHtaBlPE7md_laoT2MG6SSkvUBgd3BvkqZgFWM0eAbJZsUZaUPPYZE_PnPfnrVi-nN1R8Xzna8NLxodXMKeMTcqAb2_Nbpthbj7ZZ0INHkIkzB2jPCWZ5ry4_Q3PGvaGGgBppNKv8eB4FdMG4CiIzZP5ChStbvWQnQ25h258W6A-m8ooKM2rWTN7L_OGfJH6zLNDjubooe4czcazO1UvX4goQHlGOhzYezHa_YkgFrEN4I4A8eAZxYLVPNzxQEYG_yPu8Xhvx63LiINpVi_yj0-sxYoFqCVJY-ts5V0P2N6WEkdw8eMKmW5Q8YkndwIitbgk763rjJWRHosdDLKOcP05Xv1cUrJ4nSMA74g02WBm81GJvUN15LqeWfWMyjoZslppNN091BYArpZ3S0UJP9ZQxrPw4Kxy_W-vbJnJmTmo8PQMwSyiyhUl2tfWSNkmE7G8ZxVwKz7tvEJjr2GEjm74u34qxK30LxOAHYcpQlVhTcT48zydueestR85WgDGTc0C2JI7GN6opIxiOs87a81qwN6uHZ9MZ1hEWcw4dFL9wwOgGHlyt6KZnFggh7wiuCwgnDiGP0muNuM3QbNUqpufJE5gsnj1aEAD8IskeBeLeBJufhUJ-28Z3eGRpso-mtQ0PbUpz8jfl-xxqFTur=s789-no?authuser=0"
                    ></Image>
                </Box>
                <Breadcrumb separator="">
                    <BreadcrumbItem>
                        <Tabs
                            colorScheme="black"
                            defaultIndex={2}
                            variant="enclosed"
                        >
                            <TabList>
                                <Tab fontSize="lg">
                                    <Link to="/">Home</Link>
                                </Tab>
                                {/* <Tab fontSize="lg"><Link to="/contact">Contact</Link></Tab> */}
                                <Tab fontSize="lg">
                                    <Link to="/about">Sobre</Link>
                                </Tab>
                                <Tab fontSize="lg">
                                    <Link to="/contact">Contato</Link>
                                </Tab>
                            </TabList>
                        </Tabs>
                    </BreadcrumbItem>
                </Breadcrumb>
                <ColorModeSwitcher />
            </Flex>
            <Box>
                <Stack
                    width="100%"
                    height="100vh"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box borderRadius="20px" padding="30px" boxShadow="dark-lg">
                        <Image
                            width="300px"
                            src={email}
                        ></Image>
                        <FormControl isRequired>
                            <InputGroup>
                                <InputLeftElement children={<VscAccount />} />
                                <Input
                                    type="name"
                                    placeholder="Nome"
                                />
                            </InputGroup>
                        </FormControl>
                        <FormControl isRequired>
                            <InputGroup>
                                <InputLeftElement children={<VscMail />} />
                                <Input
                                    type="email"
                                    placeholder="Email"
                                />
                            </InputGroup>
                        </FormControl>
                        <Textarea placeholder="Digite sua mensagem" marginTop="10px"></Textarea>
                        <Box width="10px">
                            <Button type="submit">Enviar</Button>
                            </Box>
                        </Box>
                    </Stack>
            </Box>
            <Bottom />
        </ChakraProvider>
    );
};

export default ContactPage;
