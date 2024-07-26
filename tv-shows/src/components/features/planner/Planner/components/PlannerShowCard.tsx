import { IShow } from "@/typings/Show";
import { Card, CardBody, CardHeader, Heading, Hide, Image } from "@chakra-ui/react";

interface IPlannerShowCardProps {
    isSelected: boolean;
    show: IShow;
    onClick?: () => void;
}

export const PlannerShowCard = ({isSelected, show, onClick} : IPlannerShowCardProps) => {
    return (
        <Card
            height={{base: '50px', md: '200px'}}
            width='100%'
            backgroundColor={isSelected ? 'magenta' : 'purple'}
            borderRadius='common'
            onClick={onClick}
            padding={0}
            boxShadow='modalShadow'
            marginBottom={4}
        >
            <CardHeader padding={0}>
                <Hide breakpoint="(max-width: 800px)">
                    <Image
                        src={show.imageUrl}
                        alt={show.title}
                        objectFit='cover'
                        width='100%'
                        height='150px'
                        borderTopRadius='common'
                    />
                </Hide>
            </CardHeader>
            <CardBody padding='12px'>
                <Heading size='md' color='white'>{show.title}</Heading>
            </CardBody>
        </Card>
    );
};