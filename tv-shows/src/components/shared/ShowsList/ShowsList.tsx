import { Flex, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { ShowCard } from "../ShowCard/ShowCard";
import useSWR from "swr";
import { getAllShows, getTopRatedShows } from "@/fetchers/show";
import { IShow } from "@/typings/Show";

interface IShowsList {
    topRated: boolean;
}

export const ShowsList = ({ topRated } : IShowsList) => {
    const cacheUrl = topRated ? '/top-rated' : '/shows';
    const getter = topRated ? getTopRatedShows : getAllShows;
    const { data: showsResponse, error, isLoading } = useSWR(cacheUrl, getter);
    
    if (isLoading) {
        return <div>Loading...</div>;
	}
    
	if (error) {
        return <div>Ups something went wrong...</div>;
	}
    
    if(!showsResponse) {
        return <div>No shows found!</div>;
    };

	const shows = showsResponse.shows.map((showResponse) => {
        return (
            {
                title: showResponse.title,
                imageUrl: showResponse.image_url,
                averageRating: showResponse.average_rating,
                description: showResponse.description,
                id: parseInt(showResponse.id)
            } as IShow
        );
    });

    return (
        <SimpleGrid
            padding='31px'
            backgroundColor='darkPurple'
            gap='31px'
            border='none'
            height='100vh'
            width='100vw'
            overflow='auto'
            columns={Math.floor((window.innerWidth-300)/255)}
            autoFlow='row'
        >
            {shows.map((show, index) => {
                return <ShowCard key={index} title={show.title} imageUrl={show.imageUrl} rating={show.averageRating} id={show.id} />;
            })}
        </SimpleGrid>
    );
}