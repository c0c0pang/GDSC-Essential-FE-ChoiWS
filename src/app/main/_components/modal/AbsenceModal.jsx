import { Box, Container, Flex, Grid, Heading, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { seminarInfoList, seminarList } from '../../_data/data'

const AbsenceModal = ({ setOpen, month }) => {
    console.log(setOpen)
    return (
        <Container maxW="container.sm" bg={"#5C5C5C33"} h="100%" position={'absolute'} padding={0} top={0} >
            <Container maxW="container.sm" h="100%" position={'absolute'} padding={0} top={0} onClick={() => setOpen(false)}>
            </Container>
            <Flex direction='column' padding='30px 34px 0px 34px' position={'relative'} top='33%'>
                <Grid shadow='0px 4px 4px 0px #00000040' borderRadius={10} bg={'#33A853'} gap={8} padding={6}>
                    {seminarList.map((e) => {
                        return (
                            <Flex
                                key={e.id}
                                alignItems='center'
                                justifyContent='space-between'
                                borderRadius='10px 10px 0px 0px'
                                h='10dvh'
                                w='100%'
                                cursor='pointer'
                                padding='0px 25px 0px 18px'
                                gap={2}
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
                            </Flex>
                        )
                    })}
                    <Flex
                        bg={'#33A853'}
                        alignItems='flex-start'
                        justifyContent='space-between'
                        borderRadius='0px 0px 10px 10px'
                        w='100%'
                        padding='0px 25px 0px 18px'
                        gap={2}
                        flexDirection='column'
                    >
                        {seminarInfoList.map((e) => {
                            return (
                                <Flex flexDirection='column' gap={1} key={e.info.id} >
                                    <Heading fontSize='sm' color='#ffffff'>{e.info.title}</Heading>
                                    <Text color='#ffffff' fontSize='8px'>{e.info.presenter}</Text>
                                </Flex>
                            )
                        })}
                    </Flex>
                </Grid>
            </Flex >
        </Container >
    )
}

export default AbsenceModal