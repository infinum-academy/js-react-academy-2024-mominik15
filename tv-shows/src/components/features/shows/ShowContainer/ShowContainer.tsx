import { ShowDetails } from "@/components/features/shows/ShowDetails/ShowDetails";
import { ShowReviewSection } from "@/components/features/shows/ShowReviewSection/ShowReviewSection";
import { IReviewItem, IReviewList } from "@/typings/Review";
import { Fragment, useEffect, useState } from "react";
import { IShow } from "@/typings/Show";
import { Flex } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { getShowReviews } from "@/fetchers/review";
import { IUser } from "@/typings/User";

interface IShowContainerProps {
    showProp: IShow;
}

export default function ShowContainer({ showProp } : IShowContainerProps) {
    const params = useParams();
    const [reviewList, setReviewList] = useState({ reviews: []} as IReviewList);
    const { data: reviewsResponse } = useSWR(`/reviews/${params.id}`, () => getShowReviews(params.id as string));
    const variant = window.innerWidth < 800 ? 'mobile' : 'regular';
    const isRegular = variant ==='regular';

    useEffect(() => {
        const showReviewList = reviewsResponse ? {
            reviews: reviewsResponse.reviews.map((review) => {
                return {
                    id: parseInt(review.id),
                    comment: review.comment,
                    rating: review.rating,
                    showId: review.show_id,
                    user: {
                        id: parseInt(review.user.id),
                        email: review.user.email,
                        avatarUrl: review.user.image_url,
                    } as IUser,
                } as IReviewItem
            })
        } as IReviewList : { reviews: [] };
        
        setReviewList(showReviewList);
    }, [reviewsResponse]);


    const calcAverageRating = () => {
        const ratingSum = reviewList.reviews.reduce((sum, review) => sum + review.rating, 0);
        const numberOfRatings = reviewList.reviews.length;
        return numberOfRatings > 0 ? parseFloat((ratingSum / numberOfRatings).toFixed(2)) : 0;
    };

    const myNewShow : IShow = {
        title: showProp.title,
        description: showProp.description,
        averageRating: calcAverageRating(),
        imageUrl: showProp.imageUrl,
        id: showProp.id,
    };

    const onAddReview = (newReviewItem: IReviewItem) => {
        const newReviewList = {
            reviews: [newReviewItem, ...reviewList.reviews]
        };

        setReviewList(newReviewList);
    }

    const onDeleteReview = ( reviewToDelete: IReviewItem ) => {
        const newReviewList = {
            reviews: reviewList.reviews.filter((review) => review !== reviewToDelete ),
        };
        setReviewList(newReviewList);
    };

    const hasReviews = reviewList.reviews.length > 0;

    return (
        <Flex direction='column' backgroundColor='darkPurple' position='sticky' flexGrow={1} padding={isRegular ? 10 : 3}>
            <ShowDetails show={myNewShow} hasReviews={hasReviews} />
            <ShowReviewSection reviewList={reviewList} onDeleteReview={onDeleteReview} onAddReview={onAddReview} />
        </Flex>
    );
}
