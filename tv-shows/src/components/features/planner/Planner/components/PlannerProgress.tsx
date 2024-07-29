import { Progress } from '@chakra-ui/react';
import { useContext } from 'react';
import { PlannerContext } from './PlannerContextProvider';

export const PlannerProgress = () => {
	const { stepsToTake, currentStep } = useContext(PlannerContext);

	const progress = (currentStep / stepsToTake) * 100;
	return <Progress value={progress} hasStripe={true} borderRadius='full' colorScheme='blackAlpha' backgroundColor='lightPurple' />;
};
