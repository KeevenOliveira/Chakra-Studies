import React from 'react';
import { Box, Stack, Table, Thead, Text} from '@chakra-ui/react';

const Bottom = ()=>{
    return(
        <Box>
            <Stack>
                <Table>
                    <Thead>
                        <Text marginBottom="20px" textAlign="center">© Todos os direitos reservados ao dono dessa página: Kennedy Adelson</Text>
                    </Thead>
                </Table>
            </Stack>
        </Box>
    );
}

export default Bottom;
