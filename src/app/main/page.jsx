'use client';
import { Box, Flex } from '@chakra-ui/react';
import Seminar from './_components/layout/Seminar';
import Calendar from './_components/layout/Calendar';
import SeminarVote from './_components/layout/SeminarVote';
import UserInfo from './_components/layout/UserInfo';
import React from 'react';
export default function Page() {
    return (
        <Box bg={'#4285F4'} h="100%">
            <UserInfo />
            <Flex
                flexDirection="column"
                borderRadius={10}
                bg="#ffffff"
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
