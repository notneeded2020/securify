const signUpForm = document.getElementById('signupform');
const signInForm = document.getElementById('signinform');

signUpForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email = document.getElementById('semail').value;
    const password = document.getElementById('spassword').value;
    const name = document.getElementById("sname").value;

    auth.createUserWithEmailAndPassword(email,password).then(cred =>{
        console.log(cred.user)
        var uid = cred.user.uid;
        console.log(uid)
        document.location.href="../material-dashboard-master/examples/user.html"
    })
    
    .catch((error)=>{
        var errorMsg = error.message;
        console.log(errorMsg)
    })

})

signInForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.getElementById("lemail").value;
    const password = document.getElementById("lpassword").value;

    auth.signInWithEmailAndPassword(email,password).then(cred=>{
        console.log(cred.user)
        document.location.href="../material-dashboard-master/examples/user.html"
    })
    .catch((error)=>{
        var errorMsg = error.message;
        console.log(errorMsg)
    })
})


