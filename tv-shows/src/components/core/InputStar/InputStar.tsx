import { Image } from "@chakra-ui/react";

interface IInputStar {
    filled: boolean;
    onHovered: () => void;
    onUnhovered: () => void;
    onClicked: () => void;
}

export const InputStar = ({ filled, onHovered, onUnhovered, onClicked }: IInputStar) => {
    const imageSrc = filled ? '/full_star.svg' : '/empty_star.svg';
    return (
        <Image
            src={imageSrc}
            alt='star'
            width={6}
            height={6}
            onMouseOver={onHovered}
            onMouseLeave={onUnhovered}
            onClick={onClicked}
        />
    );
}