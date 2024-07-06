import { Fragment } from "react";
import { ReviewList } from "../../review/ReviewList/ReviewList";
import { ReviewForm } from "../ReviewForm/ReviewForm";

const mockReviewItems = {
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
    return (
        <Fragment>
            <ReviewForm />
            <ReviewList reviewList={mockReviewItems} />
        </Fragment>
    );
};