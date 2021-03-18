import React from "react";
import {
    ChakraProvider,
    Badge,
    Stack,
    Box,
    Text,
    Flex,
    Breadcrumb,
    BreadcrumbItem,
    Tab,
    Tabs,
    TabList,
    Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import Bottom from "../components/Bottom";
import logo from '../assets/logo.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

const HomePage = () => {
    const property = {
        // imageUrl:"https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1c9acfca-0667-45e3-a585-47616c3ff710%2FUntitled.png?table=block&id=223f15f4-75e5-4a02-ade8-92f6603fb0ac&width=3200&userId=3286d9fc-f488-4b46-88e5-40497632400d&cache=v2",
        imageUrl: image1,
        imageUrl1: image2,
        imageUrl2: image3,
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 1,
        title:
            "Apartamentos modernos e cheios de conforto para sua família",
        formattedPrice: "Entrada a partir de R$100,00",
        reviewCount: 34,
        rating: 4,
    };

    return (
        <ChakraProvider>
            <Flex
                color="black"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                height="8vh"
                bg="blue.200"
                padding="10px"
            >
                
                    <Image
                        width="40px"
                        alt="logo"
                        src={logo}
                    ></Image>                
                <Box>
                    <Breadcrumb separator="">
                        <BreadcrumbItem>
                            <Tabs colorScheme="black" defaultIndex={0} variant="enclosed">
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
                                    <Tab>
                                        <Link to="/register">Login</Link>
                                    </Tab>
                                </TabList>
                            </Tabs>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Box>
                <Box>
                    <ColorModeSwitcher />
                </Box>
            </Flex>

        <Box  flexDirection="column">
        
        <Box d="flex" justifyContent="center" height="10vh" alignItems="center" marginBottom="-50px">
            <Text height="1vh" alignSelf="center" fontSize="30px">Informações</Text>
        </Box>

        <Stack flexDirection="row"
                width="100%"
                height="100vh"
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    maxW="sm"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    margin="0.5em"
                >
                    <Image src={property.imageUrl2} alt={property.imageAlt} />

                    <Box p="6">
                        <Box d="flex" alignItems="baseline">
                            <Badge
                                borderRadius="full"
                                px="2"
                                colorScheme="teal"
                            >
                                New
                            </Badge>
                            <Box
                                color="gray.500"
                                fontWeight="semibold"
                                letterSpacing="wide"
                                fontSize="xs"
                                textTransform="uppercase"
                                ml="2"
                            >
                            </Box>
                        </Box>

                        <Box
                            mt="1"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated
                        >
                            {property.title}
                        </Box>

                        <Box>
                            {property.formattedPrice}
                            <Box as="span" color="gray.600" fontSize="sm">
                            </Box>
                        </Box>

                        <Box d="flex" mt="2" alignItems="center">
                            <Box
                                as="span"
                                ml="2"
                                color="gray.600"
                                fontSize="sm"
                            >
                                {property.reviewCount} visulizações
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box
                    maxW="sm"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    margin="1em"
                >
                    <Image src={property.imageUrl1} alt={property.imageAlt} />

                    <Box p="6">
                        <Box d="flex" alignItems="baseline">
                            <Badge
                                borderRadius="full"
                                px="2"
                                colorScheme="teal"
                            >
                                New
                            </Badge>
                            <Box
                                color="gray.500"
                                fontWeight="semibold"
                                letterSpacing="wide"
                                fontSize="xs"
                                textTransform="uppercase"
                                ml="2"
                            >                   
                            </Box>
                        </Box>

                        <Box
                            mt="1"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated
                        >
                            {property.title}
                        </Box>

                        <Box>
                            {property.formattedPrice}
                            <Box as="span" color="gray.600" fontSize="sm">
                            </Box>
                        </Box>

                        <Box d="flex" mt="2" alignItems="center">
                            <Box
                                as="span"
                                ml="2"
                                color="gray.600"
                                fontSize="sm"
                            >
                                {property.reviewCount} visulizações
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" margin="1em">
      <Image width="100%" src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
          </Box>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} visulizações
          </Box>
        </Box>
      </Box>
    </Box>
 </Stack>
        </Box>
        <Bottom />
        </ChakraProvider>
    );
};

export default HomePage;
