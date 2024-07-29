import { ReviewList } from "../../review/ReviewList/ReviewList";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { IReviewList } from "@/typings/Review";
import { Flex, Heading } from "@chakra-ui/react";

interface IShowReviewSectionProps {
    reviewList: IReviewList;
};

export const ShowReviewSection = ({reviewList} : IShowReviewSectionProps) => {
    return (
        <Flex
            width='100%'
            gap={{base: '10px', md: '60px'}}
            direction={{base: 'column', md: 'row'}}
        >
            <Heading color='white' size='lg' fontWeight='400' marginBottom={2}>Reviews</Heading>
            <Flex direction='column' width='100%'>
                <ReviewForm />
                <ReviewList reviewList={reviewList} />
            </Flex>
        </Flex>
    );
};