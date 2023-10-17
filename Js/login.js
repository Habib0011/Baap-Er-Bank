document.getElementById('btn-submit').addEventListener('click',function(){
    console.log('submit')
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    const userPw = document.getElementById('user-pw')
    const passWord = userPw.value;
    if(email === 'normal@gmail.com'&& passWord ==='111'){
        window.location.href='bank.html';
    }
    else{
        alert('Forgot Gmail or Password')
    }
    

})