
const resultBlock = document.getElementById('result');
const pageNumberEl = document.getElementById('page-number');
const clickMeButton = document.getElementById('click-me');
clickMeButton.addEventListener('click', makeRequest);

function makeRequest() {
    fetch(`https://jsonplaceholder.typicode.com/todos/${pageNumberEl.value}`)
        .then(response => response.json())
        .then(commits => resultBlock.innerHTML = commits.title)

}




/*
success: function (data) {
    data.forEach(el => {
        const name = document.createElement('name');
        name.src = el.thumbnailUrl;
        document.getElementById('result').appendChild(name)
    });
}*/