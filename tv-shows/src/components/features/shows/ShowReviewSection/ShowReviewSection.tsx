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
    const variant = window.innerWidth < 800 ? 'mobile' : 'regular';
    const isRegular = variant ==='regular';

    return (
        <Flex
            width='100%'
            gap={isRegular ? '60px' : '10px'}
            direction={isRegular ? 'row' : 'column'}
        >
            <Heading color='white' size='lg' fontWeight='400' marginBottom={2}>Reviews</Heading>
            <Flex direction='column' width='100%'>
                <ReviewForm onAddReview={onAddReview} />
                <ReviewList reviewList={reviewList} onDeleteReview={onDeleteReview} />
            </Flex>
        </Flex>
    );
};