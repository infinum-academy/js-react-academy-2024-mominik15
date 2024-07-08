import { ShowDetails } from "@/components/features/shows/ShowDetails/ShowDetails";
import { ShowReviewSection } from "@/components/features/shows/ShowReviewSection/ShowReviewSection";
import { IReviewItem, IReviewList } from "@/typings/Review";
import { Fragment, useEffect, useState } from "react";
import { IShow } from "@/typings/Show";

const mockShow = {
    title: 'Dark',
    description: 'A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.',
    averageRating: 5,
    imageUrl: 'https://dark.netflix.io/share/global.png'
};

const allReviewList : IReviewList = {
    reviews: [
        {
            text: 'This is the best show I\'ve ever seen!',
            rating: 5,
            user: {
                email: 'user1@mail.com',
                avatarUrl: 'https://fakeimg.pl/30x30/854d85/909090?text=User',
            },
        },
        {
            text: 'Wow! Everything is connected, indeed!',
            rating: 5,
            user: {
                email: 'user2@mail.com',
                avatarUrl: 'https://fakeimg.pl/30x30/854d85/909090?text=User',
            },
        },
    ]
};

export default function ShowContainer() {
    useEffect(() => {
        const loadedList = loadFromLocalStorage();
        updateAverageRating(loadedList);
        setReviewList(loadedList);
    }, []);

    const [reviewList, setReviewList] = useState(allReviewList);
    const [show, setShow] = useState(mockShow);

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
            imageUrl: show.imageUrl
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
        <Fragment>
            <ShowDetails show={show} hasReviews={hasReviews} />
            <ShowReviewSection reviewList={reviewList} onAddReview={onAddReview} onDeleteReview={onDeleteReview} />
        </Fragment>
    );
}
