import { InputStar } from "@/components/core/InputStar/InputStar";
import { IReviewItem } from "@/typings/Review";
import { Button, Flex, FormControl, Input, Textarea, chakra } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface IReviewFormProps {
    onAddReview: (review: IReviewItem) => void;
};

const mockUser = {
    email: 'mock.user@mail.com',
    avatarUrl: 'https://fakeimg.pl/30x30/854d85/909090?text=User',
};

interface IReviewFormInputs {
    comment: string,
    rating: number,
}

export const ReviewForm = ({ onAddReview }: IReviewFormProps) => {
    const [comment, setComment] = useState('');
    const [selectedStars, setSelectedStars] = useState(0);
    const [hoveredStars, setHoveredStars] = useState(0);
    const { register, unregister, handleSubmit, formState, getValues } = useForm<IReviewFormInputs>();

    const onSubmitReview = (data: IReviewFormInputs) => {
        if(!data.comment || !data.rating) {
            alert('Both comment and rating need to be filled!');
            return;
        };

        const newReview: IReviewItem = {
            text: data.comment,
            rating: data.rating,
            user: mockUser
        };
        onAddReview(newReview);
    };

    return (
        <chakra.form
            background='#3d363d'
            width='100%'
            padding={2}
            borderRadius={10}
            flexDirection='column'
            marginBottom={6}
            onSubmit={handleSubmit(onSubmitReview)}
        >
            <FormControl isRequired={true}>
                <Textarea
                    background='#7c727d'
                    color='black'
                    resize='vertical'
                    placeholder='Add review...'
                    borderColor='#352a36'
                    focusBorderColor='#554157'
                    id='review-textarea'
                    {...register('comment')}
                />
            </FormControl>
            <Flex marginTop={2}
                direction='row'
                justifyContent='space-between'
            >
                <FormControl display='flex' flexDirection='row' alignItems='center' isRequired={true}>
                    { Array(5).fill(1).map((_n, index) => {
                            let filledStars = getValues('rating');
                            if (hoveredStars) {
                                filledStars = hoveredStars;
                            }

                            return (
                                <InputStar
                                    key={index}
                                    filled={index < filledStars}
                                    onHovered={() => setHoveredStars(index + 1)}
                                    onUnhovered={() => setHoveredStars(0)}
                                    onClicked={() => {
                                        unregister('rating');
                                        register('rating', { value: index + 1 });
                                        }
                                    }
                                />
                            );
                        })}
                </FormControl>
                <Button colorScheme="purple" type='submit'>Post</Button>
            </Flex>
        </chakra.form>
    );
}