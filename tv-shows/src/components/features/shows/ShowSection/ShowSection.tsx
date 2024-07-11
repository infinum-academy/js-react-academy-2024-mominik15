import useSWR from "swr";
import ShowContainer from "../ShowContainer/ShowContainer";
import { useParams } from "next/navigation";
import { getShow } from "@/fetchers/show";
import { IShow } from "@/typings/Show";

export default function ShowSection() {
    const params = useParams();

	const {
		data: showResponse,
		error,
		isLoading,
	} = useSWR(`/shows/${params.id}`, () => getShow(params.id as string));

	if (isLoading) {
        return <div>Loading...</div>;
	};
    
	if (error) {
        return <div>Ups something went wrong...</div>;
	};

    if(!showResponse) {
        return <div>No show found!</div>;
    };

    const show = {
                title: showResponse.title,
                imageUrl: showResponse.image_url,
                averageRating: showResponse.average_rating,
                description: showResponse.description,
                id: parseInt(showResponse.id)
            } as IShow;

    return (
        <ShowContainer showProp={show} />
    )
}