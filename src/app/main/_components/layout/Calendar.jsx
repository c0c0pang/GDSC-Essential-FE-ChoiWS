"use client"
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { monthDate, seminarList } from '../../_data/data'
import AbsenceModal from '../modal/AbsenceModal';

const Calendar = () => {
    const month = monthDate('month');
    const [isOpen, setOpen] = useState(false);
    return (
        <React.Fragment>
            {isOpen ? (<AbsenceModal setOpen={setOpen} month={month} />) : (null)}
            <Flex direction='column' padding='30px 34px 0px 34px' gap={2}>
                <Box>
                    <Heading color='#000000' fontSize='3xl'>{'일정 확인'}</Heading>
                    <Text color='#A1A1A1' fontSize='12px'>{'확인해야할 일정 목록입니다.'}</Text>
                </Box>
                {seminarList.map((e) => {
                    return (
                        <Flex
                            key={e.id}
                            bg={e.color}
                            alignItems='center'
                            justifyContent='space-between'
                            borderRadius={10}
                            h='10dvh'
                            w='100%'
                            shadow='0px 4px 4px 0px #00000040'
                            cursor='pointer'
                            padding='0px 25px 0px 18px'
                            gap={2}
                            onClick={() => setOpen(true)}
                        >
                            <Flex flexDirection='column' gap={3}>
                                <Heading fontSize='lg' color='#ffffff'>{month}월 세미나</Heading>
                                <Flex flexDirection='column' alignItems='flex-start'>
                                    <Flex alignItems='center' justifyContent='center'>
                                        {e.time_icon}
                                        <Text color='#ffffff' fontSize='8px'>{e.time}</Text>
                                    </Flex>
                                    <Flex alignItems='center' justifyContent='center'>
                                        {e.place_icon}
                                        <Text color='#ffffff' fontSize='8px'>{e.place}</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Flex h='100%' alignItems='flex-end'>
                                {e.icon}
                            </Flex>
                        </Flex>)
                })}
            </Flex >
        </React.Fragment>
    )
}

export default Calendar