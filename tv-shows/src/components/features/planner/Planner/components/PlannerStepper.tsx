import { useContext } from 'react';
import { PlannerContext } from './PlannerContextProvider';
import { PlannerShowListStep } from './PlannerShowListStep';
import { PlannerResults } from './PlannerResults';

export const PlannerStepper = () => {
	const { stepsToTake, currentStep, showsLists } = useContext(PlannerContext);

	if (!showsLists) {
		return null;
	}

	if (currentStep < stepsToTake) {
		return <PlannerShowListStep />;
	} else {
		return <PlannerResults />;
	}
};
