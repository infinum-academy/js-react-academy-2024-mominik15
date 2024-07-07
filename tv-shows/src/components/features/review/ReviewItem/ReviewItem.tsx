import { IReviewItem } from "@/typings/Review";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import fullStar from '../../../shared/images/full_star.png';

interface IReviewItemProps {
    reviewItem: IReviewItem;
    onDeleteReview: (review : IReviewItem) => void;
}

export const ReviewItem = ({ reviewItem, onDeleteReview }: IReviewItemProps) => {
    return (
        <Card
            direction='column'
            background='#3d363d'
            width='100%'
            borderRadius={10}
            color='white'
        >
            <CardHeader display='flex' margin='0' padding={1.5}>
                <Image alt='user' src={reviewItem.user.avatarUrl} borderRadius={4} marginRight={2} />
                <Text as='i'>{reviewItem.user.email}</Text>
            </CardHeader>
            <CardBody padding={1.5}>
                <Text>{reviewItem.text}</Text>
            </CardBody>
            <CardFooter justifyContent='space-between' alignItems='center' padding={1.5}>
                <Flex>
                    { Array.from(Array(reviewItem.rating).keys()).map((n) => {
                        return <Image alt='full_star' key={n} src='/full_star.png' width={5} />
                    })}
                    { Array.from(Array(5-reviewItem.rating).keys()).map((n) => {
                        return <Image alt='empty_star' key={n} src='/empty_star.png' width={5} />
                    })}
                </Flex>
                <Button colorScheme="red" onClick={() => onDeleteReview(reviewItem)}>Delete</Button>
            </CardFooter>
        </Card>
    );
}