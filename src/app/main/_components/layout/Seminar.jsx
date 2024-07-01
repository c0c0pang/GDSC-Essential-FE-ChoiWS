import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { seminar } from '../../_data/data';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Seminar = () => {
    const nowPath = usePathname();
    return (
        <Flex direction="column" padding="34px 34px 0px 34px">
            <Box>
                <Heading color="#000000" fontSize="2xl">
                    세미나
                </Heading>
                <Text color="#A1A1A1" fontSize="10px">
                    세미나와 관련된 기능들입니다.
                </Text>
            </Box>
            <Grid templateColumns="repeat(4, 1fr)" gap={2} marginTop="15px">
                {seminar.map((e) => {
                    return (
                        <Link href={`${nowPath}/${e.path}`} key={e.id}>
                            <Flex
                                bg={e.color}
                                alignItems="center"
                                justifyContent="space-around"
                                flexDirection="column"
                                padding={2}
                                borderRadius={10}
                                h="9.5lvh"
                                w="100%"
                                shadow="0px 4px 4px 0px #00000040"
                                cursor="pointer"
                            >
                                <Box>{e.icon}</Box>
                                <Text color="#FFFFFF" fontSize="7px">
                                    {e.text}
                                </Text>
                            </Flex>
                        </Link>
                    );
                })}
            </Grid>
        </Flex>
    );
};

export default Seminar;
