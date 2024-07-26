import { Button, Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Text, Show, Hide, IconButton } from "@chakra-ui/react";
import { PlannerProgress } from "./components/PlannerProgress";
import { PlannerStepper } from "./components/PlannerStepper";
import { PlannerButtons } from "./components/PlannerButtons";
import { PlannerHeader } from "./components/PlannerHeader";
import { CalendarIcon } from "@chakra-ui/icons";

export const Planner = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
            <Hide breakpoint="(max-width: 800px)">
			    <Button variant='ghost' onClick={onOpen}>Planner</Button>
            </Hide>
            <Show breakpoint="(max-width: 800px)">
                <IconButton
                    icon={<CalendarIcon />}
                    aria-label="Planner"
                    variant='ghost'
                    padding={2}
                    borderRadius='full'
                    width='45px'
                    height='45px'
                    onClick={onOpen}
                />
            </Show>
			<Modal isOpen={isOpen} onClose={onClose} >
				<ModalOverlay />
				<ModalContent backgroundColor='darkPurple' borderRadius='common'>
					<ModalHeader fontSize='3xl' color='white'>
                        <ModalCloseButton color='white' border='solid' borderColor='white' borderRadius='full' />
                        <PlannerHeader />
                    </ModalHeader>
					<ModalBody>
						<PlannerStepper />
					</ModalBody>
					<ModalFooter>
						<Flex direction="column" width="100%" gap={3}>
							<PlannerButtons />
							<PlannerProgress />
						</Flex>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
