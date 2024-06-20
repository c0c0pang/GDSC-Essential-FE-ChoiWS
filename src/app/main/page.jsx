"use client";
import { Container, Flex } from '@chakra-ui/react'
import Seminar from "./_components/layout/Seminar";
import Calendar from "./_components/layout/Calendar";
import SeminarVote from "./_components/layout/SeminarVote";
import UserInfo from "./_components/layout/UserInfo";
export default function Page() {
  return (
    <Container maxW="container.sm" bg={"#4285F4"} h="100%" padding={0} overflow='hidden'>
      <UserInfo />
      <Flex flexDir='column' borderRadius='30px 30px 0px 0px' bg='#ffffff' height='100%' padding={0} gap={3}>
        <Seminar />
        <Calendar />
        <SeminarVote />
      </Flex>
    </Container>
  );
}
