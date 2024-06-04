const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numChars = "0123456789";
const symbolChars = "/!@$%&+";



function getRandomChar(chars){
    const index = Math.floor(Math.random() * chars.length);
    return chars[index];
}


function generatePassword(){
    const passwordInput = document.getElementById("password");
    const lowercaseCheckbox = document.getElementById("lowercase");
    const uppercaseCheckbox = document.getElementById("uppercase");
    const numberCheckbox = document.getElementById("numbers");
    const symbolsCheckbox = document.getElementById("symbols");
    const excludeDuplicateCheckbox = document.getElementById("exc-duplicate");


let characters = "";
if(lowercaseCheckbox.checked) characters += lowercaseChars;
if(uppercaseCheckbox.checked) characters += uppercaseChars;
if(numberCheckbox.checked) characters  += numChars;
if(symbolsCheckbox.checked) characters += symbolChars;

if(characters === ""){
    passwordInput.value = "";
    return;
}

let password = "";
const length = 12;

while (password.length < length){
    let char = getRandomChar(characters);
    if (excludeDuplicateCheakbox.checked && password.includes(char)) continue;
    password += char;
}
passwordInput.value = password;

}

function copyPassword(){
    const passwordInput = document.getElementById('password');
    const copyButton = document.getElementById('copy');

    passwordInput.disabled = false;

    passwordInput.select();
    document.execCommand('copy');
    passwordInput.disabled = true;

    copyButton.textContent = 'Copied';
    setTimeout(() => {
        
        copyButton.textContent = 'Copy';
    }, 2000);
}

