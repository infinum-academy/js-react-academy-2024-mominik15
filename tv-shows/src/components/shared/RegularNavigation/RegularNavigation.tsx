import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@chakra-ui/react";
import NextLink from 'next/link';

interface IRegularNavigationProps {
    onLogOut: () => void;
}

export const RegularNavigation = ({onLogOut}: IRegularNavigationProps) => {
    return (
        <Card height='100%' width='100%' backgroundColor='darkPurple' color='white' border='none' borderRadius={0} padding={0}>
            <CardHeader>
                <Image src='/logo.svg' alt='TV show logo' />
            </CardHeader>
            <CardBody display='flex' flexDirection='column' padding='31px' gap='19px'>
                <Button variant='ghost' as={NextLink} href='/all-shows/'>All shows</Button>
                <Button variant='ghost' as={NextLink} href='/top-rated/'>Top rated</Button>
                <Button variant='ghost' as={NextLink} href='/my-profile/'>My profile</Button>
            </CardBody>
            <CardFooter>
                <Button variant='ghost' onClick={onLogOut}>Log out</Button>
            </CardFooter>
        </Card>
    );
};