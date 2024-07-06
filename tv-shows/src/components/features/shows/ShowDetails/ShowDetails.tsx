import { ShowImage } from "@/components/core/ShowImage/ShowImage";
import { IShow } from "@/typings/Show";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";

interface IShowDetails {
    show: IShow;
}

export const ShowDetails = ({ show }: IShowDetails) => {
    return (
        <Flex
            direction='column'
            background='#3d363d'
            color='white'
            border='none'
            borderRadius={10}
            marginBottom={7}
        >
            <ShowImage url={show.imageUrl} title={show.title} />
            <Flex direction='column' padding={5}>
                <Heading>{show.title}</Heading>
                <Text>{show.description}</Text>
                <Text>{show.averageRating}</Text>
            </Flex>
        </Flex>
    );
};