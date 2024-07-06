import { IReviewItem } from "@/typings/Review";
import { Button, Flex, Text } from "@chakra-ui/react";

interface IReviewItemProps {
    reviewItem: IReviewItem;
}

export const ReviewItem = ({ reviewItem }: IReviewItemProps) => {
    return (
        <Flex
            background='#3d363d'
            width='100%'
            padding={2}
            borderRadius={10}
            direction='column'
            color='white'
        >
            <Text>{reviewItem.text}</Text>
            <Flex marginTop={2}
                direction='row'
                justifyContent='space-between'
                alignItems='center'
            >
                <Text>{reviewItem.rating}/5</Text>
                <Button colorScheme="red">Delete</Button>
            </Flex>
        </Flex>
    );
}