const btn = document.getElementById('inputbtn');


const firstName = document.getElementById('nameInput');
const lastName = document.getElementById('lastNameInput');
const email = document.getElementById('emailInput');
const password = document.getElementById('passwordInput');

const errorName = document.getElementById('nameError');
const errorLastName = document.getElementById('lastNameError');
const errorEmail = document.getElementById('emailError');
const errorPassword = document.getElementById('passwordError')

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    validateEmpty(firstName.value, firstName, errorName, 'First Name');
    validateEmpty(lastName.value, lastName, errorLastName, 'Last Name');
    validateEmail(email.value, email, errorEmail);
    validateEmpty(password.value, password, errorPassword, 'Password')  

});

function validateEmail(valueInput, divInput, divError){
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(regExp.test(valueInput) == true){
        hideError(divInput, divError);
    }else{
        showError(divInput, divError, 'Looks like this is not an email');
    }
}

function validateEmpty(valueInput, divInput,divError,nameInput){
    if(valueInput.length == 0){
        showError(divInput,divError, `${nameInput} cannot be empty`);
    }else{
        hideError(divInput,divError);        
    }
    
}

function showError(divInput,divError,error){
    divInput.style.border = '1px solid #FF7A7A'
    divError.innerHTML= `
        <img class="icon-error" src="./images/icon-error.svg"  alt="">
        <p class="error">${error}</p>
    `;
 
}
function hideError(divInput, divError){
    divInput.style.border = '1px solid #3D3B48';
    divError.innerHTML =``;
}
