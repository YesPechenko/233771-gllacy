
var openContact = document.querySelector('.openContact');

var feedbackForm = document.querySelector('.feedback-form');

var feedbackClose = document.querySelector('.feedback-form-close');

var shadow = document.querySelector('.shadow');

openContact.addEventListener('click', function(event) {
    event.preventDefault();
    feedbackForm.classList.add('feedback-form-show');
    shadow.classList.add('shadow-show');
});

feedbackClose.addEventListener('click', function(event) {
    event.preventDefault();
    feedbackForm.classList.remove('feedback-form-show');
    shadow.classList.remove('shadow-show');
});

shadow.addEventListener('click', function(event) {
    event.preventDefault();
    feedbackForm.classList.remove('feedback-form-show');
    shadow.classList.remove('shadow-show');
});