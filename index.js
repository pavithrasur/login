function validateLogin()
{
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const correctUsername = 'Entri Elevate';
    const correctPassword = 'admin123';

   


    if (username == correctUsername && password == correctPassword) 
        {
        window.location.href = 'https://pavithrasur.github.io/world/';
    } 
    else 
    {
        alert(`invaild`);
        
    }
}






function forgetpassword()
{
    let =prompt(`Enter the email`)
    
    alert(`Verification code sent to your email`)
}
