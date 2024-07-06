import { Fragment, useEffect, useState } from "react";
import { ReviewList } from "../../review/ReviewList/ReviewList";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { IReviewItem, IReviewList } from "@/typings/Review";

interface IShowReviewSectionProps {
    reviewList: IReviewList;
    onAddReview: (review : IReviewItem) => void;
    onDeleteReview: (review : IReviewItem) => void;
};

export const ShowReviewSection = ({reviewList, onAddReview, onDeleteReview} : IShowReviewSectionProps) => {
    return (
        <Fragment>
            <ReviewForm onAddReview={onAddReview}/>
            <ReviewList reviewList={reviewList} onDeleteReview={onDeleteReview} />
        </Fragment>
    );
};