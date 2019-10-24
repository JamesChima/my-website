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

//Function to sort an Array
// const arr = [1, 9, 7, 5, 9];
// const sortedCopy = sortCopy(arr);
// function sortCopy(arr){
//   return console.log(`Sorted Array: ${arr.slice(0).sort()}`);
// }
// console.log (`Original Array: ${arr}` );