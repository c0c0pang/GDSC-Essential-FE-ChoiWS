import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const UserInfo = () => {
    return (
        <Flex
            direction="column"
            marginBottom={30}
            padding="50px 34px 15px 34px"
            bg="transparent"
        >
            <Text color="#E6E6E6" fontSize="18px">
                {'Lead'}
            </Text>
            <Heading color="#ffffff" fontSize="28px">
                {'정상현'}님 안녕하세요
            </Heading>
        </Flex>
    );
};

export default UserInfo;
