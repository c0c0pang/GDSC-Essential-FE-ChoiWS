'use client';
import { Box, Flex } from '@chakra-ui/react';
import Seminar from './_components/layout/Seminar';
import Calendar from './_components/layout/Calendar';
import SeminarVote from './_components/layout/SeminarVote';
import UserInfo from './_components/layout/UserInfo';
import React from 'react';

export default function Page() {
    return (
        <Box bg="#4285F4" h="100%">
            <UserInfo />

            <Flex
                justifyContent="center"
                bg="white"
                roundedTopLeft={30}
                roundedTopRight={30}
                paddingTop={4}
                height="5%"
            >
                <Box
                    bg="lightgray"
                    h="7px"
                    w="400px"
                    maxWidth="22%"
                    borderRadius={30}
                />
            </Flex>
            <Flex
                flexDirection="column"
                bg="white"
                height="100%"
                padding={0}
                gap={3}
            >
                <Seminar />
                <Calendar />
                <SeminarVote />
            </Flex>
        </Box>
    );
}
