import { InputStar } from "@/components/core/InputStar/InputStar";
import { authenticatedCreator } from "@/fetchers/authenticatedMutators";
import { swrKeys } from "@/fetchers/swrKeys";
import { IReviewItem } from "@/typings/Review";
import { IUser } from "@/typings/User";
import { Button, Flex, FormControl, FormLabel, Input, Textarea, chakra } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { mutate } from "swr";
import useSWRMutation from "swr/mutation";

interface IReviewFormInputs {
    comment: string,
    rating: number,
}

export const ReviewForm = () => {
    const params = useParams();
    const [hoveredStars, setHoveredStars] = useState(0);
    const { register, unregister, handleSubmit, getValues, reset } = useForm<IReviewFormInputs>();
    const { trigger } = useSWRMutation(swrKeys.reviews, authenticatedCreator, {
        onSuccess: (data) => {
            mutate(`/reviews/${data.review.show_id}`);
        }
    });

    const onSubmitReview = async (data: IReviewFormInputs) => {
        if(!data.comment || !data.rating) {
            alert('Both comment and rating need to be filled!');
            return;
        };

        await trigger({...data, show_id: params.id });
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
                    borderRadius='common'
                    padding='28px 40px'
                    {...register('comment')}
                />
            </FormControl>
            <Flex marginTop={2}
                direction='row'
                justifyContent='space-between'
                paddingTop='23px'
                paddingLeft={{base: '0', md: '39px'}}
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