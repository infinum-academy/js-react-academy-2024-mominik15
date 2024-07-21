'use client'

import { Button, Card, CardBody, CardFooter, CardHeader, Flex, Image } from "@chakra-ui/react";
import NextLink from 'next/link';
import { useRouter } from "next/navigation";

export const SidebarNavigation = () => {
    const router = useRouter();
    const onLogOut = () => {
        localStorage.removeItem('userData');
        router.push('/login');
    };

    return (
        <Flex height='100vh' maxWidth='350px' minWidth='200px' position='sticky' top='0' padding={0}>
            <Card width='100%' backgroundColor='darkPurple' color='white' border='none' borderRadius={0} padding={0}>
                <CardHeader>
                    <Image src='/logo.svg' alt='TV show logo' />
                </CardHeader>
                <CardBody display='flex' flexDirection='column' padding='31px' gap='19px'>
                    <Button variant='ghost' as={NextLink} href='/all-shows/'>All shows</Button>
                    <Button variant='ghost' as={NextLink} href='/top-rated/'>Top rated</Button>
                    <Button variant='ghost'>My profile</Button>
                </CardBody>
                <CardFooter>
                    <Button variant='ghost' onClick={onLogOut}>Log out</Button>
                </CardFooter>
            </Card>
        </Flex>
    );
}