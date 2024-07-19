import { IReviewItem } from "@/typings/Review";
import { Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { DeleteIcon } from '@chakra-ui/icons';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import useSWRMutation from "swr/mutation";
import { swrKeys } from "@/fetchers/swrKeys";
import { authenticatedDeleter } from "@/fetchers/authenticatedMutators";

interface IReviewItemProps {
    reviewItem: IReviewItem;
    onDeleteReview: (review : IReviewItem) => void;
}

export const ReviewItem = ({ reviewItem, onDeleteReview }: IReviewItemProps) => {
    const { trigger } = useSWRMutation(swrKeys.review(reviewItem.id.toString()), authenticatedDeleter);

    const onClickAction = async (reviewItem : IReviewItem) => {
        await trigger(reviewItem.id);
        onDeleteReview(reviewItem);
    };

    const userDataString = localStorage.getItem('userData') as string;
    const loggedInUserEmail = JSON.parse(userDataString).email;
    const currentUserEmail = reviewItem.user.email;
    const isByCurrentUser = currentUserEmail === loggedInUserEmail;

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
                <Text>{reviewItem.comment}</Text>
            </CardBody>
            <CardFooter justifyContent='space-between' alignItems='center' padding={1.5}>
                <Flex>
                    { Array(reviewItem.rating).fill(1).map((_n, index) => {
                        return <Image alt='full_star' key={index} src='/full_star.png' width={5} />
                    })}
                    { Array(5 - reviewItem.rating).fill(1).map((_n, index) => {
                        return <Image alt='empty_star' key={index} src='/empty_star.png' width={5} />
                    })}
                </Flex>
                { isByCurrentUser && <IconButton aria-label="Delete todo" colorScheme="red" icon={<DeleteIcon />} onClick={() => onClickAction(reviewItem)} w="48px" /> }
            </CardFooter>
        </Card>
    );
}