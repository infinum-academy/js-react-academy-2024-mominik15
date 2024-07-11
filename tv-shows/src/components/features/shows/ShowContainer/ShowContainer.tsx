import { ShowDetails } from "@/components/features/shows/ShowDetails/ShowDetails";
import { ShowReviewSection } from "@/components/features/shows/ShowReviewSection/ShowReviewSection";
import { IReviewItem, IReviewList } from "@/typings/Review";
import { Fragment, useEffect, useState } from "react";
import { IShow } from "@/typings/Show";
import { Flex } from "@chakra-ui/react";

const allReviewList : IReviewList = {
    reviews: []
};

interface IShowContainerProps {
    showProp: IShow;
}

export default function ShowContainer({ showProp } : IShowContainerProps) {
    useEffect(() => {
        const loadedList = loadFromLocalStorage();
        updateAverageRating(loadedList);
        setReviewList(loadedList);
    }, []);

    const [reviewList, setReviewList] = useState(allReviewList);
    const [show, setShow] = useState(showProp);

    const saveToLocalStorage = (reviewList: IReviewList) => {
        localStorage.setItem('reviewList', JSON.stringify(reviewList));
    };

    const loadFromLocalStorage = () => {
        const reviewListString = localStorage.getItem('reviewList');
        if(!reviewListString) {
            return allReviewList;
        }
        return JSON.parse(reviewListString);
    };

    const updateAverageRating = (newReviewList : IReviewList) => {
        const ratingSum = newReviewList.reviews.reduce((sum, review) => sum + review.rating, 0);
        const numberOfRatings = newReviewList.reviews.length;
        const newAverageRating = numberOfRatings > 0 ? parseFloat((ratingSum / numberOfRatings).toFixed(2)) : 0;
        const newShow : IShow = {
            title: show.title,
            description: show.description,
            averageRating: newAverageRating,
            imageUrl: show.imageUrl,
            id: 1,
        };
        setShow(newShow);
    };

    const onAddReview = ( review: IReviewItem ) => {
        const newReviewList = {
            reviews: [...reviewList.reviews, review]
        };
        setReviewList(newReviewList);
        updateAverageRating(newReviewList);
        saveToLocalStorage(newReviewList);
    };

    const onDeleteReview = ( reviewToDelete: IReviewItem ) => {
        const newReviewList = {
            reviews: reviewList.reviews.filter((review) => review !== reviewToDelete ),
        };
        setReviewList(newReviewList);
        updateAverageRating(newReviewList);
        saveToLocalStorage(newReviewList);
    };

    const hasReviews = reviewList.reviews.length > 0;

    return (
        <Flex direction='column' backgroundColor='#2e0033' position='absolute' marginLeft='300px' padding={10} width={`${window.innerWidth - 300}px`}>
            <ShowDetails show={show} hasReviews={hasReviews} />
            <ShowReviewSection reviewList={reviewList} onAddReview={onAddReview} onDeleteReview={onDeleteReview} />
        </Flex>
    );
}
