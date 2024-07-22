import { InputStar } from "@/components/core/InputStar/InputStar";
import { authenticatedCreator } from "@/fetchers/authenticatedMutators";
import { swrKeys } from "@/fetchers/swrKeys";
import { IReviewItem } from "@/typings/Review";
import { IUser } from "@/typings/User";
import { Button, Flex, FormControl, FormLabel, Input, Textarea, chakra } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";

const mockUser = {
    email: 'mock.user@mail.com',
    avatarUrl: 'https://fakeimg.pl/30x30/854d85/909090?text=User',
};

interface IReviewFormProps {
    onAddReview: (review : IReviewItem) => void;
}

interface IReviewFormInputs {
    comment: string,
    rating: number,
}

export const ReviewForm = ({onAddReview} : IReviewFormProps) => {
    const params = useParams();
    const [hoveredStars, setHoveredStars] = useState(0);
    const { register, unregister, handleSubmit, formState, getValues, reset } = useForm<IReviewFormInputs>();
    const { trigger } = useSWRMutation(swrKeys.reviews, authenticatedCreator);
    const variant = window.innerWidth < 800 ? 'mobile' : 'regular';
    const isRegular = variant ==='regular';

    const onSubmitReview = async (data: IReviewFormInputs) => {
        if(!data.comment || !data.rating) {
            alert('Both comment and rating need to be filled!');
            return;
        };

        const response = await trigger({...data, show_id: params.id });
        const reviewBody = response.review;
        const newReviewItem = {
            id: parseInt(reviewBody.id),
            comment: reviewBody.comment,
            rating: reviewBody.rating,
            showId: reviewBody.show_id,
            user: {
                id: parseInt(reviewBody.user.id),
                email: reviewBody.user.email,
                avatarUrl: reviewBody.user.image_url,
            } as IUser,
        } as IReviewItem
        onAddReview(newReviewItem);
        reset();
    };

    return (
        <chakra.form
            background='darkPurple'
            width='100%'
            padding={2}
            flexDirection='column'
            marginBottom={6}
            onSubmit={handleSubmit(onSubmitReview)}
        >
            <FormControl isRequired={true} >
                <Textarea
                    background='white'
                    color='black'
                    resize='none'
                    placeholder='Review'
                    borderRadius='26px'
                    padding='28px 40px'
                    {...register('comment')}
                />
            </FormControl>
            <Flex marginTop={2}
                direction='row'
                justifyContent='space-between'
                paddingTop='23px'
                paddingLeft={isRegular ? '39px' : '0'}
            >
                <FormControl display='flex' flexDirection='row' verticalAlign='center' alignItems='center' isRequired={true}>
                    <FormLabel color='white' marginTop={2}>Rating</FormLabel>
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
                <Button variant={(getValues('comment') && getValues('rating')) ? 'solid' : 'disabled'} colorScheme="purple" type='submit'>POST</Button>
            </Flex>
        </chakra.form>
    );
}