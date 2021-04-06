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
    // Firstname field ---------------------------------------------------
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
    }else{
        e.preventDefault()
        FnFieldErr.innerText =  messages_FN.join(', ')
        FnField.style.border = "none"
        FnIconErr.style.height = "0"
        FnIconErr.style.visibility = "hiden"
    }

    // Lastname field ---------------------------------------------------
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
    }else{
        e.preventDefault()
        LnFieldErr.innerText =  messages_LN.join(', ')
        LnField.style.border = "none"
        LnIconErr.style.height = "0"
        LnIconErr.style.visibility = "hiden"
    }

    // Email field ---------------------------------------------------
    let messages_Email = []
    if (emailField.value === '' || emailField.value == null){
        messages_Email.push("Email cannot be empty")
    }else if (!validateEmail(emailField.value)){
        messages_Email.push("Looks like this is not an email")
    }
    if (messages_Email.length > 0){
        e.preventDefault()
        emailFieldErr.innerText =  messages_Email.join(', ')
        emailField.style.border = "1px solid hsl(0, 100%, 74%)"
        emailIconErr.style.height = "auto"
        emailIconErr.style.visibility = "visible"
    }else{
        e.preventDefault()
        emailFieldErr.innerText =  messages_Email.join(', ')
        emailField.style.border = "none"
        emailIconErr.style.height = "0"
        emailIconErr.style.visibility = "hiden"
    }

    // Password field ---------------------------------------------------
    let messages_Pass = []
    if (PassField.value === '' || PassField.value == null){
        messages_Pass.push("Password cannot be empty")
    }else if (!CheckPassword(PassField.value)){
        messages_Pass.push("A password which contain at least one numeric digit and a special character is needed")
    }
    if (messages_Pass.length > 0){
        e.preventDefault()
        PassFieldErr.innerText =  messages_Pass.join(', ')
        PassField.style.border = "1px solid hsl(0, 100%, 74%)"
        PassIconErr.style.height = "auto"
        PassIconErr.style.visibility = "visible"
    }else{
        e.preventDefault()
        PassFieldErr.innerText =  messages_Pass.join(', ')
        PassField.style.border = "none"
        PassIconErr.style.height = "0"
        PassIconErr.style.visibility = "hiden"
    }
})

function CheckPassword(inputtxt) 
{ 
    var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/;
    console.log(inputtxt + ': ' + paswd.test(inputtxt));
    if(paswd.test(inputtxt)){
        return true;
    }
    else{ 
        return false;
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }