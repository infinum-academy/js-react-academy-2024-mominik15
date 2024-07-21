import { ShowImage } from "@/components/core/ShowImage/ShowImage";
import { IShow } from "@/typings/Show";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";

interface IShowDetails {
    show: IShow;
    hasReviews: boolean;
}

export const ShowDetails = ({ show, hasReviews }: IShowDetails) => {
    return (
        <Flex
            direction='column'
            background='white'
            color='purple'
            border='none'
            borderRadius='26px'
            marginBottom={7}
        >
            <ShowImage url={show.imageUrl} title={show.title} />
            <Flex direction='row' padding={10}>
                <Flex direction='column' flex='1'>
                    <Heading>{show.title}</Heading>
                    { hasReviews && <Flex>
                        <Image src='/rating_symbol.svg' alt='star' marginRight={1} />
                        <Text>{show.averageRating}/5</Text>
                    </Flex>
                    }
                    { !hasReviews && <Text as='i'>No ratings</Text> }
                </Flex>
                <Text flex='1'>{show.description}</Text>
            </Flex>
        </Flex>
    );
};