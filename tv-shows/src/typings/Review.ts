export interface IReviewItem {
    text: string;
    rating: number;
}

export interface IReviewList {
    reviews: Array<IReviewItem>
}