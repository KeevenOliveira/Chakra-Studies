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

const HomePage = () => {
    const property = {
        // imageUrl:"https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1c9acfca-0667-45e3-a585-47616c3ff710%2FUntitled.png?table=block&id=223f15f4-75e5-4a02-ade8-92f6603fb0ac&width=3200&userId=3286d9fc-f488-4b46-88e5-40497632400d&cache=v2",
        imageUrl: "https://lh3.googleusercontent.com/8qsRNjtWv9p6AONURfrp4HXSDZaLwUAHR8i8lPJ0w_h6sjclzznQoa0WuiHDDCyy0hfWTimKcecB2Gq1rmUEwCb7-TZV6XnzvJjBTJesxfk1ui4HGknqHTttXLRR7A960If7G94fiW2kyd41f8ptlbduUNZX4BuM7_lduW8ttbulioXjDl91m1RGgPRyxG114AJ9TDuSrEtPqsSew8wPmsXv8WpJKaT4lz7yqT4j1dFZCqpY1pV2xYLubxeE6g-B3qV8l8m-fZwG031acx5Xj1t07vB_iwc0JYQ_5XG8t3d7r4pXpHAJ73X98olmf_-zSjpgj4idDnp-Uyezxggxdsk3CBeZqo1xIE9hiAmN0uEtrC9zE1BfawfA2ea2q3yjBw65SzkUa0OwUglqrl3Vo5d_g30HIPw7CvXrxzGeSnjVDgE5xSqttwQXTSEb-i0Wfl8DtdO9QWrbuj_uwLvVmfxXNIJD3K8fzzYchEZgaGPe0Fkjc9MVtHEcQ25HvW3xxvc9qY4BLqdYcTpp_bZksT7vSN5W1k5Uuo41nEdq4STUfWP63K_qirRcZOaVgbbSpwS4YQJ0f9LB5OA8ou_JxfFoaqWS1LdQmcawGwkHjWkfFVtqGHYhUJqeRakYL-wWpTeVzhvlvvCSJYPdtpyaE3JM9KWllPd1E5SrAVPVDsjoO_34uHmPWcMwL5eTMyEGSrYLb3OKXhw0MbsrOmPLtQp2=s328-no?authuser=0",
        imageUrl1:"https://lh3.googleusercontent.com/V2wU0GJ4_OQR9rJDQI36P0F0VpKpw9vKvjeqMhsRK62-h_l5mgmVNl7LzPKqQnJw_txEtSzWzJsD4CVkDP79MPSyqM6BBiZVY08jjcpX8ox9DiUxdAIarSxBK9TyXoNmPyQwRQQN2CpfldMVxNdkCBVuOHrrH1A7RH58G0BAF76o0LaLYGWq6DjcXxhF-hha1P0YLPPDRy0qPJWouNKvC4PvIhNayPHPLX5f5KPjbz3L7ZJ-BdKX7BlIv5W2oFwVsYboCE040PUGstogWzZN1_syVZ-ubg3zYlt-srJ39YxtyU1mUpJX-bSoH8tZBTFv-flvS_JvxBkEYegPJ9Zzna6xVJ-1uYkOvWJ4nkX55F_YpS1i39xUqeRkMFrgO8gWnZoKnpbAgu1hWJJZWfpw6htGC-k04AL2Dxw-BNEYvcpzb0fQizbN8Yx75H34VnYDtrHQySPu8XpSGwrjidYjnZCwd-Cy52_wvely-wX_Q4PN2e2zKp886JrFwPS8bAzJbIwfQcSOODT2_FWfP1kb0xjOC5A7lakP0sPbDIJBWnh3JN8BIc5NBw5rSfGV57qlW8Y_vYMxH5-R6LVFUJpR0YYyMtffBE1__lYihskRsW6W8au1jtxV_SO36rKMFa-6mrrltOOIY1wDMOPwQJPlZNXVLghUMIHpD6GNmshkYHIjr2H30c3EDhwczcsjicDeoZDS6QChKPRhzAVOTXTdMWpv=s732-no?authuser=0",
        imageUrl2:"https://lh3.googleusercontent.com/4wpn9Mi4csphCMZpwgowr8lRmCSTY3EjGuYz9KHEcgOOLW2heZnFC32rn5bplgt33Xhf4XmZxQH80fSzIrX7gMIukapVYiiqfkru9tJbl355KHhjSxLx60WTponEAsefqkLFl4sr9Qa5RFMRGmBJ5_K9X9DHuOPSMK1vY1jLuBBiqRxY-471pgUFt4ohiop-FyXeG93wawGBSA-zuD4-l_1fs0sW2elpUMKcucRB7617mbkx4wOYGfDwFkJIiAjHRINuoWlWb_qlzMbqbaB4L2W6fNdC5YuZ3SByoPa3-B4tdD2SMmIFfGkqaXhjUYtqRd9r99l8LEnNDjOks5-LisvgadX4VYpIBHk7KhhrSU2_lCQoLpE1IJ94MpEXg5MoV6bmmcwl-3ztnXGDyGjjCKlkSwyn8oCMuarg3swas_WI3RoAQnEgCHBhHHVaV2gT1p0VN5-h1yd7oSygKY7PKH-cIUUtqAFBnasxlTZIYPVPbP-sVNgHLYyOlNJmmhs2sZJTw0oqDFNPX3-To9_4fRBeM2ZO5jS8yj68lo8ANoog7Xd8-fHhvTIyrrbGHpj0FOKbaLzKrdpVzU9a6kUJOtOvHRBGayKL6DlYPSBAF-ItARM1Otpn3yTicFpQlvXZtxl5OvbKEF-JxUc6XurFUqBviLXEMyt4FajSiUkR5PhQq5N1GrelU_78ivIMT3MJCsF8v2ATbu1aEqPWZVMUX9oL=s732-no?authuser=0",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 1,
        title:
            "Um apartamento moderno e cheio de conforto para sua família",
        formattedPrice: "R$100",
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
                        src="https://lh3.googleusercontent.com/03vLfAOMrOIvFrf_zqAhEG8VdOLix8EArHV4d0P9myV8I-Iy_lSRniwbKiL83UCbCcewHtaBlPE7md_laoT2MG6SSkvUBgd3BvkqZgFWM0eAbJZsUZaUPPYZE_PnPfnrVi-nN1R8Xzna8NLxodXMKeMTcqAb2_Nbpthbj7ZZ0INHkIkzB2jPCWZ5ry4_Q3PGvaGGgBppNKv8eB4FdMG4CiIzZP5ChStbvWQnQ25h258W6A-m8ooKM2rWTN7L_OGfJH6zLNDjubooe4czcazO1UvX4goQHlGOhzYezHa_YkgFrEN4I4A8eAZxYLVPNzxQEYG_yPu8Xhvx63LiINpVi_yj0-sxYoFqCVJY-ts5V0P2N6WEkdw8eMKmW5Q8YkndwIitbgk763rjJWRHosdDLKOcP05Xv1cUrJ4nSMA74g02WBm81GJvUN15LqeWfWMyjoZslppNN091BYArpZ3S0UJP9ZQxrPw4Kxy_W-vbJnJmTmo8PQMwSyiyhUl2tfWSNkmE7G8ZxVwKz7tvEJjr2GEjm74u34qxK30LxOAHYcpQlVhTcT48zydueestR85WgDGTc0C2JI7GN6opIxiOs87a81qwN6uHZ9MZ1hEWcw4dFL9wwOgGHlyt6KZnFggh7wiuCwgnDiGP0muNuM3QbNUqpufJE5gsnj1aEAD8IskeBeLeBJufhUJ-28Z3eGRpso-mtQ0PbUpz8jfl-xxqFTur=s789-no?authuser=0"
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
                                / mês
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
                                / mês
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
            / mês
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
