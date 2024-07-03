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
let starsSelected = 0;

function createReviewItem(review) {
    const reviewItemElement = document.createElement('div');
    reviewItemElement.classList = ['review-item'];

    const reviewTextItemElement = document.createElement('div');
    reviewTextItemElement.classList = ['review-text-item'];
    reviewTextItemElement.textContent = review.text;
    reviewItemElement.appendChild(reviewTextItemElement);

    const reviewFoterItemElement = document.createElement('div');
    reviewFoterItemElement.classList = ['review-footer-item'];
    reviewItemElement.appendChild(reviewFoterItemElement);

    const reviewRatingItemElement = document.createElement('div');
    reviewRatingItemElement.classList = ['review-rating-item'];
    const rating = review.rating;
    for (let index = 0; index < rating; index++) {
        const filledStar = createFilledStarElement();
        reviewRatingItemElement.appendChild(filledStar);
    };
    for (let index = 0; index < 5 - rating; index++) {
        const emptyStar = createEmptyStarElement();
        reviewRatingItemElement.appendChild(emptyStar);
    };
    const reviewRatingValue = document.createElement('div');
    reviewRatingValue.classList = ['review-rating-value'];
    reviewRatingValue.textContent = rating.toString().concat('/5');
    reviewRatingItemElement.appendChild(reviewRatingValue);
    reviewFoterItemElement.appendChild(reviewRatingItemElement);

    const deleteReviewButtonElement = document.createElement('button');
    deleteReviewButtonElement.classList = ['delete-review-button'];
    deleteReviewButtonElement.textContent = 'Delete';
    deleteReviewButtonElement.onclick = () => {
        mockReviews = mockReviews.filter((r) => {
            return r !== review;
        });
        renderReviewList();
    };
    reviewFoterItemElement.appendChild(deleteReviewButtonElement);

    return reviewItemElement
}

function createFilledStarElement() {
    const filledStarElement = document.createElement('img');
    filledStarElement.classList = ['filled-star'];
    filledStarElement.src = "images/full_star.png";
    filledStarElement.alt = 'filled-star';
    
    return filledStarElement;
}

function createEmptyStarElement() {
    const emptyStarElement = document.createElement('img');
    emptyStarElement.classList = ['empty-star'];
    emptyStarElement.src = "images/empty_star.png";
    emptyStarElement.alt = 'empty-star';
    
    return emptyStarElement;
}

function renderReviewList() {
    const reviewListElement = document.getElementById('review-list');
    reviewListElement.innerHTML = '';

    mockReviews.forEach((review) => {
        reviewListElement.appendChild(createReviewItem(review));
    });

    renderAverageRating();

    saveToLocalStorage(mockReviews);
}

function postReview() {
    const reviewTextArea = document.getElementById('review-text');
    const reviewTextValue = reviewTextArea.value;

    if (!reviewTextValue || starsSelected <= 0) {
        return;
    };

    const newReview = {
        text: reviewTextValue,
        rating: starsSelected,
    };
    mockReviews.push(newReview);
    renderReviewList();
    
    reviewTextArea.value = '';
    starsSelected = 0;
    unhoverStars();
}

function renderAverageRating() {
    const averageRatingItem = document.getElementById('average-rating');
    let ratingsSum = 0;
    const reviewNumber = mockReviews.length;

    mockReviews.forEach((review) => {
        ratingsSum += review.rating;
    });

    const averageRating = (ratingsSum/reviewNumber).toFixed(2);
    averageRatingItem.textContent = averageRating.toString().concat('/5.00');
}

function saveToLocalStorage(reviewList) {
    const reviewListString = JSON.stringify(reviewList);
    localStorage.setItem('review-list', reviewListString);
}

function loadFromLocalStorage() {
    const reviewListString = localStorage.getItem('review-list');
    const reviewList = JSON.parse(reviewListString);
    return reviewList;
}

function selectStars(number, clicked) {
    for (let index = 1; index <= number; index++) {
        const emptyStarElement = document.getElementById('star-'.concat(index.toString()));
        emptyStarElement.src = "images/full_star.png"
    };
    for (let index = number + 1; index <= 5; index++) {
        const emptyStarElement = document.getElementById('star-'.concat(index.toString()));
        emptyStarElement.src = "images/empty_star.png"
    };
    if(clicked) {
        starsSelected = number;
    };
}

function unhoverStars() {
    for (let index = 1; index <= starsSelected; index++) {
        const emptyStarElement = document.getElementById('star-'.concat(index.toString()));
        emptyStarElement.src = "images/full_star.png"
    };
    for (let index = starsSelected + 1; index <= 5; index++) {
        const emptyStarElement = document.getElementById('star-'.concat(index.toString()));
        emptyStarElement.src = "images/empty_star.png"
    };
}

mockReviews = loadFromLocalStorage();
renderReviewList();