import { Flex, Image, Text } from "@chakra-ui/react";

export const ProfileContainer = () => {
    const userDataString = localStorage.getItem('userData') as string;
    const loggedInUserEmail = JSON.parse(userDataString).email;
    const variant = window.innerWidth < 800 ? 'mobile' : 'regular';
    const isRegular = variant ==='regular';

    return (
        // probat s maxWidth
        <Flex direction='column' alignSelf='center' alignItems='center' width='100%' gap='40px'>
            <Flex direction='column' alignItems='center' color='white'>
                <Text fontSize='14px'>
                    EMAIL
                </Text>
                <Text fontSize='20px' fontWeight='500'>
                    {loggedInUserEmail}
                </Text>
            </Flex>
            <Flex
                padding={isRegular ? '80px 230px' : '50px'}
                direction='column'
                alignItems='center' 
                backgroundColor='purple'
                color='lightPurple'
                border='purple'
                borderStyle='dashed'
                borderRadius='25px'
            >
                <Image src='/no_image.svg' alt='empty-profile-image' height='150px' width='140px' />
                <Text align='center' width='140px' fontWeight='700' fontSize='24px'>Drop your photo here</Text>
            </Flex>
        </Flex>
    );
};