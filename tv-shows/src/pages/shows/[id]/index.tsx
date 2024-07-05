import { Heading } from "@chakra-ui/react";
import styles from "../../index.module.css";
import { ShowDetails } from "@/components/features/shows/ShowDetails/ShowDetails";

const mockShows = [
    {
        title: 'Dark',
        description: 'My description',
        imageUrl: 'https://dark.netflix.io/share/global.png',
        averageRating: 4
    }
];

export default function Show() {
  return (
    <main className={styles.main}>
        <ShowDetails show={mockShows[0]}></ShowDetails>
    </main>
  );
}
