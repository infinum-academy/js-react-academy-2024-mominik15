import { Flex, Image, Text } from "@chakra-ui/react";

export const ProfileContainer = () => {
    const userDataString = localStorage.getItem('userData');
    if (!userDataString) {
        return null;
    }
    const loggedInUserEmail = JSON.parse(userDataString).email;

    return (
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
                padding={{base: '50px', md: '80px 230px'}}
                direction='column'
                alignItems='center' 
                backgroundColor='purple'
                color='lightPurple'
                border='purple'
                borderStyle='dashed'
                borderRadius='common'
            >
                <Image src='/no_image.svg' alt='empty-profile-image' height='150px' width='140px' />
                <Text align='center' width='140px' fontWeight='700' fontSize='24px'>Drop your photo here</Text>
            </Flex>
        </Flex>
    );
};