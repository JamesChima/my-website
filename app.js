const firstName = document.getElementById('firstname');
const email = document.getElementById('email');
const sendBtn = document.getElementById('send');

sendBtn.addEventListener('click', submitForm);

function submitForm(){
	if(firstName.value === '' || email.value === ''){
        error('fields cannot be empty!', 'red');
    }
}

function error(message, color){
    const error = document.getElementById('error-message')
    let para = document.createElement('p');
    error.appendChild(para);
    para.textContent = message;
    para.style.color = color;
}
