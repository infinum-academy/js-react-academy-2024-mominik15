import { HamburgerIcon } from "@chakra-ui/icons";
import { Image, Flex, useDisclosure, Button } from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import NextLink from 'next/link';

interface IRegularNavigationProps {
    onLogOut: () => void;
}

export const MobileNavigation = ({onLogOut}: IRegularNavigationProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Flex
                width='100%' 
                height='100px'
                backgroundColor='darkPurple'
                color='white'
                justifyContent='space-between'
                verticalAlign='center'
                alignItems='center'
                direction='row'
                padding='12px 16px'
            >
                <Image src='/logo.svg' alt='TV show logo' width='200px' height='40px' />
                <Button onClick={onOpen} variant='ghost' width='30px' height='30px' padding={5}>
                    <HamburgerIcon />
                </Button>
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                    backgroundColor='purple'
                    height='90%'
                    right='0'
                    position='sticky'
                    padding='0'
                    marginBottom='none'
                    marginTop='none'
                    borderRadius='0'
                    borderTopLeftRadius='25px'
                >
                <ModalHeader color='white' />
                <ModalCloseButton color='white' border='solid' borderColor='white' borderRadius='full' />
                <ModalBody as={Flex} direction='column'>
                    <Button variant='ghost' as={NextLink} href='/all-shows/'>All shows</Button>
                    <Button variant='ghost' as={NextLink} href='/top-rated/'>Top rated</Button>
                    <Button variant='ghost' as={NextLink} href='/my-profile/'>My profile</Button>
                </ModalBody>
                <ModalFooter marginLeft='0'>
                    <Button variant='ghost' onClick={onLogOut}>Log out</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};