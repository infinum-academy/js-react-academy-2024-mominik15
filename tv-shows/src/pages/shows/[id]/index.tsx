import { Heading } from "@chakra-ui/react";
import styles from "../../index.module.css";
import { ShowDetails } from "@/components/features/shows/ShowDetails/ShowDetails";
import { ShowReviewSection } from "@/components/features/shows/ShowReviewSection/ShowReviewSection";

const mockShow =
    {
        title: 'Dark',
        description: 'My description',
        averageRating: 4,
        imageUrl: 'https://dark.netflix.io/share/global.png'
    };

export default function Show() {
  return (
    <main className={styles.main}>
        <ShowDetails show={mockShow}></ShowDetails>
        <ShowReviewSection />
    </main>
  );
}
