"use client"
import { Box, Flex, background } from '@chakra-ui/react';
import React, { useState } from 'react'
import { QrReader } from 'react-qr-reader';
const Page = () => {
    const [data, setData] = useState('No result');
    return (
        <QrReader
            onResult={(result, error) => {
                if (!!result) {
                    setData(result?.text);
                }

                if (!!error) {
                    console.info(error);
                }
            }}
            style={{ width: '100%' }}
            videoStyle={{ border: '5px solid #00FF0A' }}
        />
    )
}

export default Page