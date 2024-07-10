import { Button, Card, CardBody, CardFooter, CardHeader, Heading } from "@chakra-ui/react";
import NextLink from 'next/link';

export const SidebarNavigation = () => {
    return (
        <Card height='100%' width='300px' position='fixed' backgroundColor='#2e0033' color='white' border='none' left='0' borderRadius={0}>
            <CardHeader>
                <Heading>TV Show App</Heading>
            </CardHeader>
            <CardBody display='flex' flexDirection='column'>
                <Button color='white' variant='ghost' as={NextLink} href='/all-shows/'>All shows</Button>
                <Button color='white' variant='ghost' as={NextLink} href='/top-rated/'>Top rated</Button>
                <Button color='white' variant='ghost'>My profile</Button>
            </CardBody>
            <CardFooter>
                <Button color='white' variant='ghost'>Log out</Button>
            </CardFooter>
        </Card>
    );
}