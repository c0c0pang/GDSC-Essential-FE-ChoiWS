"use client"
import React from 'react'
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import Camera from '@public/icons/camera.svg';
import Link from 'next/link';
const Page = () => {
    return (
        <Flex h='100%' flexDirection='column' >
            <Flex flexDirection='column' pl={7}>
                <Text color='#A1A1A1' fontSize='10px'>세미나</Text>
                <Heading color='#000000' fontSize='32px'>세미나 출석체크</Heading>
            </Flex>
            <Flex alignItems='center' h='100%' flexDirection='column' gap={10} pt='60px'>
                <Link href='/main/qrRead'>
                    <Button w='40lvh' h='40lvh' bg='#D9D9D9' borderRadius='200px' alignItems='center' justifyContent='center'>
                        <Camera />
                    </Button>
                </Link>
                <Text color='#A1A1A1' textAlign='center' fontSize='2lvh'>
                    위 로고를 누른후<br />
                    세미나에서 띄운  QR코드를<br />
                    인식 시켜주세요
                </Text>
            </Flex>
        </Flex>
    )
}

export default Page