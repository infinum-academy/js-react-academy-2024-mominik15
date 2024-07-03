let mockReviews = [
    {
        text: "This is the best show I've ever seen. Everything is connected!",
        rating: 5
    },
    {
        text: "This is so dark, I love it!",
        rating: 5
    },
]

function createReviewItem(review) {
    const reviewItemElement = document.createElement('div');
    reviewItemElement.classList = ['review-item'];

    const reviewTextItemElement = document.createElement('div');
    reviewTextItemElement.classList = ['review-text-item'];
    reviewTextItemElement.textContent = review.text;
    reviewItemElement.appendChild(reviewTextItemElement);

    const reviewRatingItemElement = document.createElement('div');
    reviewRatingItemElement.classList = ['review-rating-item'];
    reviewRatingItemElement.textContent = review.rating.toString().concat('/5');
    reviewItemElement.appendChild(reviewRatingItemElement);

    return reviewItemElement
}

function renderReviewList() {
    const reviewListElement = document.getElementById('review-list');
    // reviewListElement.innerHTML = '';

    mockReviews.forEach((review) => {
        reviewListElement.appendChild(createReviewItem(review));
    });
}

renderReviewList();