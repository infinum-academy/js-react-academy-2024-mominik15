import { fetcher } from '@/fetchers/fetcher';

interface IShowResponse {
    title: string,
    no_of_reviews: number,
    image_url: string,
    average_rating: number,
    description: string,
    id: string,
}

interface IShowsResponse {
	shows: Array<IShowResponse>;
}

export function getAllShows() {
	return fetcher<IShowsResponse>('/api/shows');
}

export function getTopRatedShows() {
	return fetcher<IShowsResponse>('/api/shows/top-rated');
}

export function getShow(id: string) {
	return fetcher<IShowResponse>(`/api/shows/${id}`);
}