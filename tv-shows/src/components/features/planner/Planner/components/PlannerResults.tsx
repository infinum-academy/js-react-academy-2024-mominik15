import { useContext } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { PlannerContext } from './PlannerContextProvider';
import { PlannerShowCard } from './PlannerShowCard';

export const PlannerResults = () => {
	const { selectedShows } = useContext(PlannerContext);

	return (
		<Flex direction="column">
			{ selectedShows.map((show, index) => {
                    return <PlannerShowCard
                        show={show}
                        isSelected={false}
                        key={index}
                    />;
                })
            }
		</Flex>
	);
};
