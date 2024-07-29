import { IReviewItem } from "@/typings/Review";
import { Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { DeleteIcon } from '@chakra-ui/icons';
import useSWRMutation from "swr/mutation";
import { swrKeys } from "@/fetchers/swrKeys";
import { authenticatedDeleter } from "@/fetchers/authenticatedMutators";
import { UserImage } from "@/components/core/UserImage/UserImage";
import { mutate } from "swr";

interface IReviewItemProps {
    reviewItem: IReviewItem;
}

export const ReviewItem = ({ reviewItem }: IReviewItemProps) => {
    const { trigger } = useSWRMutation(swrKeys.review(reviewItem.id.toString()), authenticatedDeleter, {
        onSuccess: () => {
            mutate(`/reviews/${reviewItem.showId.toString()}`);
        }
    });

    const onDeleteAction = async (reviewItem : IReviewItem) => {
        await trigger(reviewItem.id);
    };

    const userDataString = localStorage.getItem('userData') as string;
    const loggedInUserEmail = JSON.parse(userDataString).email;
    const reviewerEmail = reviewItem.user.email;
    const isByCurrentUser = reviewerEmail === loggedInUserEmail;

    return (
        <Flex
            direction='row'
            background='purple'
            width='100%'
            borderRadius='common'
            color='white'
            padding={5}
            gap={3}
            justifyContent='space-between'
        >
            <Flex direction={{base: 'column', md: 'row'}} gap={4}>
                <Flex display='flex' margin='0' direction='row'>
                    <UserImage url={reviewItem.user.avatarUrl}/>
                    <Flex direction='column' gap={2} marginLeft={2}>
                        <Text as='b'>{reviewItem.user.email}</Text>
                        <Flex gap={2}>
                            <Text>{reviewItem.rating}/5</Text>
                            <Flex>
                                { Array(reviewItem.rating).fill(1).map((_n, index) => {
                                    return <Image alt='full_star' key={index} src='/full_star.svg' width={5} height={5} />
                                })}
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex padding={1.5} align='left'>
                    <Text align='start'>{reviewItem.comment}</Text>
                </Flex>
            </Flex>
            <Flex alignItems='center' padding={1.5}>
                { isByCurrentUser && <IconButton borderRadius='full' aria-label="Delete todo" colorScheme="red" icon={<DeleteIcon />} onClick={() => onDeleteAction(reviewItem)} w="40px" h="40px" /> }
            </Flex>
        </Flex>
    );
}