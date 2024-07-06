import { Heading } from "@chakra-ui/react";
import styles from "../../index.module.css";
import { ShowDetails } from "@/components/features/shows/ShowDetails/ShowDetails";
import { ReviewForm } from "@/components/features/shows/ReviewForm/ReviewForm";
import { ReviewItem } from "@/components/features/review/ReviewItem/ReviewItem";
import { ReviewList } from "@/components/features/review/ReviewList/ReviewList";

const mockShow =
    {
        title: 'Dark',
        description: 'My description',
        averageRating: 4
    };

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

export default function Show() {
  return (
    <main className={styles.main}>
        <ShowDetails show={mockShow}></ShowDetails>
        <ReviewForm></ReviewForm>
        <ReviewList reviewList={mockReviewItems} />
    </main>
  );
}
