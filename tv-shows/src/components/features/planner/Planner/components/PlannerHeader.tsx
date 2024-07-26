import { Heading, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { PlannerContext } from "./PlannerContextProvider";

export const PlannerHeader = () => {
    const {currentStep, stepsToTake} = useContext(PlannerContext);

    return (
        <>
            <Heading>Planner</Heading>
            { currentStep !== stepsToTake && <Text fontSize='md' fontWeight='500' as='i'>Choose shows to watch next</Text>}
            { currentStep === stepsToTake && <Text fontSize='md' fontWeight='700'>Congrats! Enjoy selected shows!</Text>}
        </>
    );
}