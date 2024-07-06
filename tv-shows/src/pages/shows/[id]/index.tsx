import { Heading } from "@chakra-ui/react";
import styles from "../../index.module.css";
import { ShowDetails } from "@/components/features/shows/ShowDetails/ShowDetails";
import { ShowReviewSection } from "@/components/features/shows/ShowReviewSection/ShowReviewSection";
import { IReviewItem, IReviewList } from "@/typings/Review";
import { useEffect, useState } from "react";
import { IShow } from "@/typings/Show";

const mockShow =
    {
        title: 'Dark',
        description: 'My description',
        averageRating: 5,
        imageUrl: 'https://dark.netflix.io/share/global.png'
    };

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

export default function Show() {
    const [reviewList, setReviewList] = useState(mockReviewList);
    const [show, setShow] = useState(mockShow);

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
        console.log(ratingSum);
        console.log(numberOfRatings);
        console.log(newAverageRating);
        console.log(newShow);
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
        saveToLocalStorage(newReviewList);
    };

    const hasReviews = reviewList.reviews.length > 0;

    return (
        <main className={styles.main}>
            <ShowDetails show={show} hasReviews={hasReviews}></ShowDetails>
            <ShowReviewSection reviewList={reviewList} onAddReview={onAddReview} onDeleteReview={onDeleteReview} />
        </main>
    );
}
