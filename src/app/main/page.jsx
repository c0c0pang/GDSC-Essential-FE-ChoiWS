"use client";
import { Link } from "@chakra-ui/next-js";
import { Box, Container, Flex, Grid, GridItem, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import { monthDate, seminar, seminarList } from "./_data/data";
import Check from '@public/icons/check.svg';
export default function Page() {
  const [text, icon] = monthDate();
  return (
    <Container maxW="container.sm" bg={"#4285F4"} h="100%" padding={0} overflow='hidden'>
      <Flex direction='column' padding='54px 34px 54px 34px'>
        <Text color='#E6E6E6' fontSize='18px'>{'Lead'}</Text>
        <Heading color='#ffffff' fontSize='28px'>{'정상현님'} 안녕하세요</Heading>
      </Flex>
      <Flex flexDir='column' borderRadius='30px 30px 0px 0px' bg='#ffffff' height='100%' padding={0}>
        <Flex direction='column' padding='34px 34px 0px 34px' >
          <Box>
            <Heading color='#000000' fontSize='3xl'>{'세미나'}</Heading>
            <Text color='#A1A1A1' fontSize='12px'>{'세미나와 관련된 기능들입니다.'}</Text>
          </Box>
          <Grid templateColumns='repeat(4, 1fr)' gap={2} marginTop='15px'>
            {seminar.map((e) => {
              return (
                <Flex
                  key={e.id}
                  bg={e.color}
                  alignItems='center'
                  justifyContent='center'
                  flexDirection='column'
                  padding={2}
                  borderRadius={10}
                  h='8dvh'
                  w='100%'
                  shadow='0px 4px 4px 0px #00000040'
                  cursor='pointer'
                  gap={2}
                >
                  {e.icon}

                  <Text color='#FFFFFF' fontSize='9px'>{e.text}</Text>
                </Flex>)
            })}
          </Grid>
        </Flex>
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
                padding='10px 10px 0px 18px'
                gap={2}
              >
                <Flex flexDirection='column' gap={1}>
                  <Heading fontSize='lg' color='#ffffff'>{text}월 세미나</Heading>
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
        </Flex>
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
            <Heading color='#ffffff' fontSize='lg'>{text}월 세미나 투표</Heading>
            <Box cursor='pointer'>
              {icon}
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}
