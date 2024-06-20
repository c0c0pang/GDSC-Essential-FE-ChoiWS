"use client"

import React from 'react'
import BackArrow from '@public/icons/back-arrow.svg';
import { Box, Button, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
const BackNavigation = () => {

    const router = useRouter()
    return (
        <Flex alignItems='flex-start' p={5}>
            <Box onClick={() => router.back()} cursor='pointer'>
                <BackArrow />
            </Box>
        </Flex>
    )
}

export default BackNavigation