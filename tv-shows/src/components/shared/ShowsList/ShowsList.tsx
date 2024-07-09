import { Flex } from "@chakra-ui/react";
import { ShowCard } from "../ShowCard/ShowCard";

const mockShows = [
    {
        title: 'Dark',
        imageUrl: "https://dark.netflix.io/share/global.png",
        rating: 5,
        id: 1,
    },
    {
        title: 'You',
        imageUrl: "https://miro.medium.com/v2/resize:fit:800/1*Q3eJSbAYxYfWITbBVioxeA.jpeg",
        rating: 4.5,
        id: 2,
    }
]


export const ShowsList = () => {
    return (
        <Flex display='inline-grid' gridAutoColumns='300px' gridAutoFlow='column' gap={5}>
            {mockShows.map((mockShow, index) => {
                return <ShowCard key={index} title={mockShow.title} imageUrl={mockShow.imageUrl} rating={mockShow.rating} id={mockShow.id} />;
            })}
        </Flex>
    );
}