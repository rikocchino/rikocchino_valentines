function selectoption(option) {
    if (option === 'yes') {
        document.getElementById('question').style.display = 'none';
        displaycatheart();
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'you sure?';

        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('invalid option!');
    }
}

function displaycat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();

    catImage.src = 'cat.gif';
    catImage.alt = 'cat';

    catImage.onload = function () {
        imageContainer.appendChild(catImage);
    };
}

function displaycatheart() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';
    var catHeartImage = new Image();

    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'cat heart';

    catHeartImage.onload = function () {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none';
    };
}

displaycat();
