const signUpForm = document.getElementById('signUpForm');

const FnField = document.getElementById('First-Name');
const FnFieldErr = document.getElementById('First-Name-Err');
const FnIconErr = document.getElementById('err-icon-FN');

const LnField = document.getElementById('Last-Name');
const LnFieldErr = document.getElementById('Last-Name-Err');
const LnIconErr = document.getElementById('err-icon-LN');

const emailField = document.getElementById('Email-Address');
const emailFieldErr = document.getElementById('Email-Err');
const emailIconErr = document.getElementById('err-icon-Email');

const PassField = document.getElementById('Password');
const PassFieldErr = document.getElementById('Password-Err');
const PassIconErr = document.getElementById('err-icon-PW');

const okButton = document.getElementById('Send-Form');

signUpForm.addEventListener('submit', (e) => {
    let messages_FN = []
    if (FnField.value === '' || FnField.value == null){
        messages_FN.push("First Name cannot be empty")
    }
    if (messages_FN.length > 0){
        e.preventDefault()
        FnFieldErr.innerText =  messages_FN.join(', ')
        FnField.style.border = "1px solid hsl(0, 100%, 74%)"
        FnIconErr.style.height = "auto"
        FnIconErr.style.visibility = "visible"
    }

    let messages_LN = []
    if (LnField.value === '' || LnField.value == null){
        messages_LN.push("Last Name cannot be empty")
    }
    if (messages_LN.length > 0){
        e.preventDefault()
        LnFieldErr.innerText =  messages_LN.join(', ')
        LnField.style.border = "1px solid hsl(0, 100%, 74%)"
        LnIconErr.style.height = "auto"
        LnIconErr.style.visibility = "visible"
    }
    let messages_Email = []
    if (emailField.value === '' || emailField.value == null){
        messages_Email.push("Password cannot be empty")
    }
    if (messages_Email.length > 0){
        e.preventDefault()
        emailFieldErr.innerText =  messages_Email.join(', ')
        emailField.style.border = "1px solid hsl(0, 100%, 74%)"
        emailIconErr.style.height = "auto"
        emailIconErr.style.visibility = "visible"
    }

    let messages_Pass = []
    var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/;
    if(inputtxt.match(paswd)){
        return true;
    }
    else{ 
        messages_Pass.push("A password which contain at least one numeric digit and a special character is needed");
        return false;
    }
    
    if (CheckPassword(PassField.value)){
        messages_Pass.push("A password which contain at least one numeric digit and a special character is needed")
    }
    if (messages_Pass.length > 0){
        e.preventDefault()
        PassFieldErr.innerText =  messages_Pass.join(', ')
        PassField.style.border = "1px solid hsl(0, 100%, 74%)"
        PassIconErr.style.height = "auto"
        PassIconErr.style.visibility = "visible"
    }
})

function CheckPassword(inputtxt) 
{ 
    var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/;
    if(inputtxt.match(paswd)){
        alert('Correct, try another...') 
        return true;
    }
    else{ 
        messages_Pass.push("A password which contain at least one numeric digit and a special character is needed")
        return false;
    }
}