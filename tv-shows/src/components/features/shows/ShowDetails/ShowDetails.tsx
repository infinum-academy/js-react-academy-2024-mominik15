import { ShowImage } from "@/components/core/ShowImage/ShowImage";
import { IShow } from "@/typings/Show";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";

interface IShowDetails {
    show: IShow;
    hasReviews: boolean;
}

export const ShowDetails = ({ show, hasReviews }: IShowDetails) => {
    const variant = window.innerWidth < 800 ? 'mobile' : 'regular';
    const isRegular = variant ==='regular';

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
            <Flex direction={isRegular ? 'row' : 'column'} padding={10} gap={3}>
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