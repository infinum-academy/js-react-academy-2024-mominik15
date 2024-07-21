import { Image } from "@chakra-ui/react";

interface IUserImage {
    url?: string;
}

export const UserImage = ({ url }: IUserImage) => {
    const defaultImageUrl = 'https://fakeimg.pl/40x40/3d363d/909090?text=USER';
    const imageUrl = url ?? defaultImageUrl;
    return (
        <Image
            src={imageUrl}
            alt='User image'
            border='none'
            borderRadius='full'
            height='40px'
            width='40px'
        />
    );
}