import { Fragment, useEffect, useState } from "react";
import { ReviewList } from "../../review/ReviewList/ReviewList";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { IReviewItem, IReviewList } from "@/typings/Review";
import { Flex, Heading } from "@chakra-ui/react";

interface IShowReviewSectionProps {
    reviewList: IReviewList;
    onAddReview: (review : IReviewItem) => void;
    onDeleteReview: (review : IReviewItem) => void;
};

export const ShowReviewSection = ({reviewList, onAddReview, onDeleteReview} : IShowReviewSectionProps) => {
    return (
        <Flex
            width='100%'
            gap={{base: '10px', md: '60px'}}
            direction={{base: 'column', md: 'row'}}
        >
            <Heading color='white' size='lg' fontWeight='400' marginBottom={2}>Reviews</Heading>
            <Flex direction='column' width='100%'>
                <ReviewForm onAddReview={onAddReview} />
                <ReviewList reviewList={reviewList} onDeleteReview={onDeleteReview} />
            </Flex>
        </Flex>
    );
};