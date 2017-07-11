const apiKey = "PgziBtnj2LEZGou6lypjVQ";
const api = "https://www.goodreads.com";

const headers = {
  'Accept': 'application/json'
}

export const getReviews = (bookISBN) =>
  fetch(`${api}/book/review_counts.json?key=${apiKey}&isbns=${bookISBN}`, { headers })
    .then(res => res.json())
    .then(data => data.books[0])

