import { Button, Flex, Input, Textarea } from "@chakra-ui/react";

export const ReviewForm = () => {
    return (
        <Flex
            background='#3d363d'
            width='100%'
            padding={2}
            borderRadius={10}
            direction='column'
            marginBottom={6}
        >
            <Textarea
                background='#7c727d'
                color='black'
                resize='vertical'
                placeholder='Add review...'
                borderColor='#352a36'
                focusBorderColor='#554157'
            />
            <Flex marginTop={2}
                direction='row'
                justifyContent='space-between'
            >
                <Input
                    maxWidth='20%'
                    background='#7c727d'
                    color='black'
                    placeholder='Add rating...'
                    borderColor='#352a36'
                    focusBorderColor='#554157'
                ></Input>
                <Button colorScheme="purple">Post</Button>
            </Flex>
        </Flex>
    );
}