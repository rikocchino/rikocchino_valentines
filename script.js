function selectoption(option) {
    if (option === 'yes') {
        document.getelementbyid('question').style.display = 'none';
        displaycatheart();
    } 
    else if (option === 'no') {
        document.getelementbyid('no-button').innertext = 'you sure?';

        var yesbutton = document.getelementbyid('yes-button');
        var currentfontsize = window.getcomputedstyle(yesbutton).getpropertyvalue('font-size');
        var newsize = parsefloat(currentfontsize) * 2;
        yesbutton.style.fontsize = newsize + 'px';
    } 
    else {
        alert('invalid option!');
    }
}

function displaycat() {
    var imagecontainer = document.getelementbyid('image-container');
    var catimage = new image();

    catimage.src = 'cat.gif';
    catimage.alt = 'cat';

    catimage.onload = function () {
        imagecontainer.appendchild(catimage);
    };
}

function displaycatheart() {
    document.getelementbyid('image-container').innerhtml = '';
    var imagecontainer = document.getelementbyid('image-container');
    var catheartimage = new image();

    catheartimage.src = 'cat-heart.gif';
    catheartimage.alt = 'cat heart';

    catheartimage.onload = function () {
        imagecontainer.appendchild(catheartimage);
        document.getelementbyid('options').style.display = 'none';
    };
}

displaycat();
