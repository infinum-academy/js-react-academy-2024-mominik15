import { Button, Flex, IconButton } from '@chakra-ui/react';
import { useContext } from 'react';
import { PlannerContext } from './PlannerContextProvider';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

export const PlannerButtons = () => {
	const { currentStep, setCurrentStep, stepsToTake } = useContext(PlannerContext);

	return (
		<Flex width="100%" justifyContent="space-between">
			{ currentStep !== stepsToTake && <><IconButton
                onClick={() => setCurrentStep(currentStep - 1)}
                icon={<ChevronLeftIcon />}
                aria-label="Previous"
                color='white'
                variant='ghost'
                isDisabled={currentStep === 0}
            />
			<IconButton
                onClick={() => setCurrentStep(currentStep + 1)}
                icon={<ChevronRightIcon />}
                aria-label="Next" 
                color='white'
                variant='ghost'
                isDisabled={currentStep === stepsToTake}
            /></> }
		</Flex>
	);
};
