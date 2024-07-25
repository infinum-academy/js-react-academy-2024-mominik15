import { Card, CardBody, CardHeader, CardFooter, Heading, Image, Flex, Text } from "@chakra-ui/react";
import NextLink from 'next/link';

interface IShowCard {
    imageUrl?: string;
    title: string;
    rating: number;
    id: number;
}

export const ShowCard = ({ imageUrl, title, rating, id } : IShowCard) => {
    return (
        <Card
            width='240px'
            height='375px'
            backgroundColor='white'
            color='purple'
            borderRadius='common'
            boxShadow='0px 0px 9px rgba(0, 0, 0, 0.7)'
            _hover={{cursor: 'pointer'}}
            onClick={() => {}}
            as={NextLink}
            href={`/all-shows/${id}`}
            display='inline-grid'
        >
            <CardHeader padding={0}>
                <Image
                    src={imageUrl}
                    alt={title}
                    objectFit='cover'
                    width='240px'
                    height='300px'
                    borderTopRadius='25px'
                />
            </CardHeader>
            <CardBody flexDirection='column' paddingTop='18px' paddingLeft='18px'>
                <Heading size='md'>{title}</Heading>
                { rating && <Flex alignItems='center'>
                    <Image src='rating_symbol.svg' width={4} height={4} alt='star' marginRight={1}/>
                    <Text>{rating}/5</Text>
                </Flex> }
            </CardBody>
        </Card>
    );
};