import { getAllShows } from "@/fetchers/show";
import { swrKeys } from "@/fetchers/swrKeys";
import { IShow } from "@/typings/Show";
import { ReactNode, createContext, useState } from "react";
import useSWR from "swr";

interface IPlannerContext {
	stepsToTake: number;
	currentStep: number;
	setCurrentStep: (newStep: number) => void;
	showsLists?: Array<Array<IShow>>;
	selectedShows: Array<IShow>;
	setSelectedShows: (newShows: Array<IShow>) => void;
}

export const PlannerContext = createContext<IPlannerContext>({} as IPlannerContext);

interface IPlannerContextProviderProps {
	children: ReactNode;
}

export const PlannerContextProvider = ({ children }: IPlannerContextProviderProps) => {
	const [currentStep, setCurrentStep] = useState(0);
	const [selectedShows, setSelectedShows] = useState<Array<IShow>>([]);
	const stepsToTake = 3;
	const showsByStep = 4;
	const { data: showsResponse } = useSWR(swrKeys.allShows, getAllShows);
	let showsLists = [];
	if (showsResponse) {
		for (let index = 0; index < stepsToTake; index++) {
			const showsResponsesList = showsResponse.shows.slice(index * showsByStep, (index + 1) * showsByStep);
			const showsList = showsResponsesList.map((showResponse) => {
				return {
					title: showResponse.title,
					imageUrl: showResponse.image_url,
					averageRating: showResponse.average_rating,
					description: showResponse.description,
					id: parseInt(showResponse.id)
				} as IShow;
			});
			showsLists.push(showsList);
		}
	};

	return (
		<PlannerContext.Provider
			value={{
				stepsToTake,
				currentStep,
				setCurrentStep,
				showsLists,
				selectedShows,
				setSelectedShows,
			}}
		>
			{children}
		</PlannerContext.Provider>
	);
};