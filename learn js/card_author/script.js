const authorContainer = document.getElementById("author-container");
const loadMoreBtn = document.getElementById("load-more-btn");

let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];

fetch("https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json")
    .then((res) => res.json())
    .then((data) => {
        authorDataArr = data;
        displayAuthors(authorDataArr.slice(startingIndex, endingIndex))
    }). catch(() => {
        authorContainer.innerHTML += `<p class="error-msg">There was an error loading the authors</p>`
    });

const displayAuthors = (authors) => {
    authors.forEach(({author, image, url, bio}, index) => {
        authorContainer.innerHTML += `<div id="${index}" class="user-card">
            <h2 class="author-name">${author}</h2>
            <img class="user-img" alt="${author} avatar" src="${image}"/>
            <div class="purple-divider"></div>
            <p class="bio">${bio.length > 50 ? bio.slice(0,50)+'...' : bio}</p>
            <a class="author-link" href="${url}" target="_blank">${author}'s author page</a>
        </div>`;
    });
};

const fetchMoreAuthors = () => {
    startingIndex += 8;
    endingIndex += 8;
    displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
    if(authorDataArr.length <= endingIndex) {
        loadMoreBtn.disabled = true;
        loadMoreBtn.textContent = "You've reached the end";
        loadMoreBtn.style.cursor = "not-allowed";
    }
}

loadMoreBtn.addEventListener("click", fetchMoreAuthors)