import React from 'react';
import {ChakraProvider, Stack, Box, Text, Flex, Breadcrumb, BreadcrumbItem, Tab, Tabs, TabList, Image, Button} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {ColorModeSwitcher} from '../ColorModeSwitcher';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Bottom from '../components/Bottom';

const AboutPage= () =>{
    
    return(
        <ChakraProvider>
            <Flex color="black" justifyContent="space-between" alignItems="center" width="100%" bg="blue.200" padding="10px">    
                    <Box d="flex" alignItems="center">
                        <Image width="40px" alt="logo" src="https://lh3.googleusercontent.com/03vLfAOMrOIvFrf_zqAhEG8VdOLix8EArHV4d0P9myV8I-Iy_lSRniwbKiL83UCbCcewHtaBlPE7md_laoT2MG6SSkvUBgd3BvkqZgFWM0eAbJZsUZaUPPYZE_PnPfnrVi-nN1R8Xzna8NLxodXMKeMTcqAb2_Nbpthbj7ZZ0INHkIkzB2jPCWZ5ry4_Q3PGvaGGgBppNKv8eB4FdMG4CiIzZP5ChStbvWQnQ25h258W6A-m8ooKM2rWTN7L_OGfJH6zLNDjubooe4czcazO1UvX4goQHlGOhzYezHa_YkgFrEN4I4A8eAZxYLVPNzxQEYG_yPu8Xhvx63LiINpVi_yj0-sxYoFqCVJY-ts5V0P2N6WEkdw8eMKmW5Q8YkndwIitbgk763rjJWRHosdDLKOcP05Xv1cUrJ4nSMA74g02WBm81GJvUN15LqeWfWMyjoZslppNN091BYArpZ3S0UJP9ZQxrPw4Kxy_W-vbJnJmTmo8PQMwSyiyhUl2tfWSNkmE7G8ZxVwKz7tvEJjr2GEjm74u34qxK30LxOAHYcpQlVhTcT48zydueestR85WgDGTc0C2JI7GN6opIxiOs87a81qwN6uHZ9MZ1hEWcw4dFL9wwOgGHlyt6KZnFggh7wiuCwgnDiGP0muNuM3QbNUqpufJE5gsnj1aEAD8IskeBeLeBJufhUJ-28Z3eGRpso-mtQ0PbUpz8jfl-xxqFTur=s789-no?authuser=0"></Image>
                    </Box>

                    <Box>
                        <Breadcrumb separator="">
                            <BreadcrumbItem>
                                <Tabs colorScheme="black" defaultIndex={1} variant="enclosed">
                                    <TabList >
                                        <Tab fontSize="lg"><Link to="/">Home</Link></Tab>
                                        {/* <Tab fontSize="lg"><Link to="/contact">Contact</Link></Tab> */}
                                        <Tab fontSize="lg"><Link to="/about">Sobre</Link></Tab>
                                        <Tab fontSize="lg"><Link to="/contact">Contato</Link></Tab>
                                    </TabList>
                                </Tabs>
                            </BreadcrumbItem>                 
                        </Breadcrumb>
                    </Box>

                    <ColorModeSwitcher/>
            </Flex>
            <Box>
                <Box d="flex" justifyContent="center" marginTop="35px" marginBottom="0" height="2vh" alignItems="center">
                    <Text fontSize="30px">Sobre mim</Text>
                </Box>
                <Stack marginTop="-50px" width="100%" height="100vh" justifyContent="center" alignItems="center">
                    <Box bg="blue.300" borderRadius="30px" d="flex" flexDirection="column" justifyContent="center" boxShadow="dark-lg" alignItems="center">
                        <Image color="gray.200" marginTop="20px" width="300px" borderRadius="40px" src="https://lh3.googleusercontent.com/kVq3MBo87_zvoKzcNlC0smV6W7bL2ivWEk6TcGZ-7RXoS6RJSHv83oOrplebJUHU-mjmf2MlOKoe4piIVqq9h_P4Xkn6TF6QlCVxpPv1ORILTuvH9rZlO90pWDXE8rr7IIchW2lQoej42-t155u163UIJC39Rrw7l0U2qh3ivHOJWiNReeHdMAFqisJfgzMKGQIuvf6kOsCLKKPGlVhmA8fjdvW_fCwKi1VN-swyllBDCEzD6D4IpPnkBfeb2-jCYfQOP7ytsaMNoNAgGscvTMAcRJ-k50FnNL3S99DuzHZQUDPzH8efEt1GEx813qq4r3abUvstGdH97GlqvSufgj6lXXaVpTHASW0TrdPYz38M88WZnXRAsrN00fcSZKa9J3ytT4G3gRsGvAEAVFYQ_odwGO96-pHtjZkzdvvTj6Cc1_wMDLtNOFyWKskn6L5IdxZyIEyntVdK-0-CjrknODwyN4BeZdzLateBJJ9ktcF_MHRecgRTMhFZG1320qBgBR6LbkAEgn0WxRclOKxVu-fpreW0b4Vb0CE02Omm1ihT3JF7i38G_Clh6NyBGGQ8QkRX-TT0UFYYg2EYDEqsGu6_nEcf3khhgD12bnimIPe7eTxhmN30coMOEZo0sIyIWT1hC_Q-PgBVhaQHTOyrByjasTXAIoV4rx-mm14fP5HJEmQw2-yQ_Fm051bFhFBRmFSCGS52rvCqO0quUtDnFx-n=s789-no?authuser=0"></Image>
                        <Box d="flex" justifyContent="center" alignItems="center">
                            <Text padding="10px" color="white" margin="5px" marginTop="10px" textAlign="center">Meu nome é Kennedy Adelson Lopes, sou corretor crediciado na <a href="https://direcional.com.br/">Direcional.</a> Moro na cidade de Camaragibe.</Text>
                        </Box>
                        <Box marginBottom="10px">
                            <Button leftIcon={<FaInstagram />}><a href="https://www.instagram.com/lopesconsultor123/">Instagram</a></Button>
                            <Button leftIcon={<FaWhatsapp />} marginLeft="5px"><a href="https://api.whatsapp.com/send?phone=5581982687667&text=Oi%20Kennedy%2C%20tudo%20bem%3F%20Queria%20saber%20mais%20sobre%20algum%20im%C3%B3vel.">Whatsapp</a></Button>
                        </Box>
                    </Box>
                </Stack>
            </Box>
            <Bottom/>
        </ChakraProvider>
    );
}

export default AboutPage;