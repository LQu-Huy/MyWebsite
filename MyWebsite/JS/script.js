function toggleAdditionalContent(element) {
    var additionalContent = element.nextElementSibling;
    additionalContent.style.display = additionalContent.style.display === "none" ? "block" : "none";
}


var inf = document.querySelector('.inf');
var movingIn = false; 

function moveRectangle() {
    if (!movingIn) {
        inf.style.left = '0.1%'; 
    } else {
        inf.style.left = '-20%';
    }
    movingIn = !movingIn; 
}

document.getElementById('openPopup').addEventListener('click', function() {
    document.getElementById('popup').classList.add('active');
    document.body.style.overflow = 'hidden'; 
});

document.getElementById('popup').addEventListener('click', function(event) {
    if (event.target === this) {
        document.getElementById('popup').classList.remove('active');
        document.body.style.overflow = 'auto'; 
    }
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').classList.remove('active');
    document.body.style.overflow = 'auto'; 
});

function navigateToDetailsPage(pageUrl) {
window.location.href = pageUrl;
}
