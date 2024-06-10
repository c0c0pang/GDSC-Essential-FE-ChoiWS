import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { monthDate } from '../../_data/data';

const SeminarVote = () => {
    const [month, icon] = monthDate('both');
    return (
        <Flex direction='column' padding='30px 34px 0px 34px' gap={2}>
            <Box>
                <Heading color='#000000' fontSize='3xl'>{'세미나 날짜 투표'}</Heading>
                <Text color='#A1A1A1' fontSize='12px'>{'다음 세미나 날짜를 투표해주세요.'}</Text>
            </Box>
            <Flex
                bg='#FAAB00'
                borderRadius='10px'
                h='47px'
                w='100%'
                alignItems='center'
                justifyContent='space-between'
                padding='0px 20px 0px 20px'
                shadow='0px 4px 4px 0px #00000040'
            >
                <Heading color='#ffffff' fontSize='lg'>{month}월 세미나 투표</Heading>
                <Box cursor='pointer'>
                    {icon}
                </Box>
            </Flex>
        </Flex>
    )
}

export default SeminarVote