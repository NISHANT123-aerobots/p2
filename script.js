let generateMeme = document.querySelector('.generateMeme');
let titleVal = document.querySelector('.title');
let author = document.querySelector('.author');
let memeImg = document.querySelector('.memeImg');
let downloadButton = document.querySelector('.downloadButton');

const updateData = (url, title, authorName) => {
    memeImg.setAttribute('src', url);
    titleVal.textContent = title;
    author.textContent = "By: " + authorName;
}

const downloadMeme = () => {
    const imgURL = memeImg.getAttribute('src');
    const imgTitle = titleVal.textContent;

    // Create an anchor element
    const link = document.createElement('a');
    link.href = imgURL;
    link.download = imgTitle; // Set the download attribute to the image title
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const getMeme = () => {
    fetch("https://meme-api.com/gimme").then(res => res.json().then(data => {
        updateData(data.url, data.title, data.author);
    })).catch(error => {
        console.error('Error fetching meme:', error);
    });
}

generateMeme.addEventListener('click', getMeme);
downloadButton.addEventListener('click', downloadMeme);
