const name = document.getElementById('name');
const email = document.getElementById('email');
const form = document.getElementById('form');
const error = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let message = [];
    if (!isEmail(email.value)) {
     message.push('Email is not valid');
    }
    if (message.length > 0) {
    e.preventDefault();
    error.innerText = message.join(',');
    document.getElementById('span').style.display= 'inline-block';
    }
});

function isEmail(email) {
    return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)
}