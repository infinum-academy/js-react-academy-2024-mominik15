import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { PlannerContext } from "./PlannerContextProvider";
import { PlannerShowCard } from "./PlannerShowCard";
import { IShow } from "@/typings/Show";

export const PlannerShowListStep = () => {
    const { currentStep, showsLists, selectedShows, setSelectedShows } = useContext(PlannerContext);

    if (!showsLists) {
        return null;
    }

    const showList = showsLists[currentStep];

    const onClick = (show: IShow, isSelected: Boolean) => {
        isSelected
            ? setSelectedShows(selectedShows.filter((s) => s.id !== show.id))
            : setSelectedShows([...selectedShows, show]);
    };

    return (
        <Flex direction='column' padding='2'>
            {
                showList.map((show, index) => {
                    const isSelected = Boolean(selectedShows.find((selectedShow) => selectedShow.id === show.id));
                    return <PlannerShowCard
                        show={show}
                        isSelected={isSelected}
                        key={index}
                        onClick={() => onClick(show, isSelected)}
                    />;
                })
            }
        </Flex>
    );
};