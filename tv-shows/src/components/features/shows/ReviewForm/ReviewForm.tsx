import { IReviewItem } from "@/typings/Review";
import { Button, Flex, Input, Textarea } from "@chakra-ui/react";

interface IReviewFormProps {
    onAddReview: (review: IReviewItem) => void;
};

export const ReviewForm = ({ onAddReview }: IReviewFormProps) => {
    const onClick = () => {
        const textareaElement = document.getElementById('review-textarea') as HTMLTextAreaElement;
        const reviewText = textareaElement.value;
        const inputElement = document.getElementById('rating-input') as HTMLInputElement;
        const ratingValue = parseInt(inputElement.value);
        const newReview: IReviewItem = {
            text: reviewText,
            rating: ratingValue,
        };
        onAddReview(newReview);
    };

    return (
        <Flex
            background='#3d363d'
            width='100%'
            padding={2}
            borderRadius={10}
            direction='column'
            marginBottom={6}
        >
            <Textarea
                background='#7c727d'
                color='black'
                resize='vertical'
                placeholder='Add review...'
                borderColor='#352a36'
                focusBorderColor='#554157'
                id='review-textarea'
            />
            <Flex marginTop={2}
                direction='row'
                justifyContent='space-between'
            >
                <Input
                    maxWidth='20%'
                    background='#7c727d'
                    color='black'
                    placeholder='Add rating...'
                    borderColor='#352a36'
                    focusBorderColor='#554157'
                    id='rating-input'
                ></Input>
                <Button colorScheme="purple" onClick={onClick}>Post</Button>
            </Flex>
        </Flex>
    );
}