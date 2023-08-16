// step-1 add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address from the email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // verify email and password
    if(email === 'zahid@gmail.com' && password === '51095'){
        console.log('Valid user');

    }
    else {
        console.log('Invalid user');
    }
})