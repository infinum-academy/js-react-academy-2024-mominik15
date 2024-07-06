import { Fragment, useEffect, useState } from "react";
import { ReviewList } from "../../review/ReviewList/ReviewList";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { IReviewItem, IReviewList } from "@/typings/Review";

const mockReviewList : IReviewList = {
    reviews: [
        {
            text: 'This is the best show I\'ve ever seen!',
            rating: 5,
        },
        {
            text: 'Wow! Everything is connected, indeed!',
            rating: 5,
        },
    ]
};

export const ShowReviewSection = () => {
    const [reviewList, setReviewList] = useState(mockReviewList);

    const saveToLocalStorage = (reviewList: IReviewList) => {
        localStorage.setItem('reviewList', JSON.stringify(reviewList));
    };

    const loadFromLocalStorage = () => {
        const reviewListString = localStorage.getItem('reviewList');
        if(!reviewListString) {
            return mockReviewList;
        }
        return JSON.parse(reviewListString);
    };

    useEffect(() => {
        const loadedList = loadFromLocalStorage();
        setReviewList(loadedList);
    }, []);

    const onAddReview = ( review: IReviewItem ) => {
        const newReviewList = {
            reviews: [...reviewList.reviews, review]
        };
        setReviewList(newReviewList);
        saveToLocalStorage(newReviewList);
    };

    return (
        <Fragment>
            <ReviewForm onAddReview={onAddReview}/>
            <ReviewList reviewList={reviewList} />
        </Fragment>
    );
};