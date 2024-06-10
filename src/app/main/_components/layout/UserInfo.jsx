import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const UserInfo = () => {
    return (
        <Flex direction='column' padding='54px 34px 54px 34px'>
            <Text color='#E6E6E6' fontSize='18px'>{'Lead'}</Text>
            <Heading color='#ffffff' fontSize='28px'>{'정상현님'} 안녕하세요</Heading>
        </Flex>
    )
}

export default UserInfo