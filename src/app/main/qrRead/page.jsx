"use client"
import { Box, Flex, background } from '@chakra-ui/react';
import React, { useState } from 'react'
import { QrReader } from 'react-qr-reader';
const Page = () => {
    const [data, setData] = useState('No result');
    return (
        <Flex alignItems='center' justifyContent='center' height='100%' >
            <Box width='80%' >
                <QrReader
                    onResult={(result, error) => {
                        if (!!result) {
                            setData(result?.text);
                        }

                        if (!!error) {
                            console.info(error);
                        }
                    }}
                    videoStyle={{ border: '5px solid #00FF0A' }}
                />
            </Box>
        </Flex>
    )
}

export default Page