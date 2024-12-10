

const firstName = document.getElementById('fName');
const lastName = document.getElementById('lName');
const email = document.getElementById('mail');
const password = document.getElementById('pWord');

//validates input
document.getElementById('form').addEventListener('submit', (e) => {
    let messages = [];
    if(firstName.value === '' || firstName.value == null){
        messages.push('Name is Required')
        document.getElementById('fNameSpan').classList.add('unHideSpan')
    }

    if(lastName.value === '' || lastName.value == null){
        messages.push('Name is Required')
        document.getElementById('lNameSpan').classList.add('unHideSpan')
    }

    if(email.value === '' || email.value == null){
        messages.push('email is Required')
        document.getElementById('emailSpan').classList.add('unHideSpan')
        email.setAttribute('placeholder',"example@email.com")
    }

    if(password.value === '' || password.value == null){
        messages.push('password is Required')
        document.getElementById('passwordSpan').classList.add('unHideSpan')
    }
    // prevents form from submitting
    if(messages.length > 0){
        e.preventDefault();
    }
})



//hide error message on focus
document.getElementById('fName').addEventListener('click' , () => {
    document.getElementById('fNameSpan').classList.remove('unHideSpan')
})
document.getElementById('lName').addEventListener('click' , () => {
    document.getElementById('lNameSpan').classList.remove('unHideSpan')
})
document.getElementById('mail').addEventListener('click' , () => {
    document.getElementById('emailSpan').classList.remove('unHideSpan')
    email.removeAttribute('placeholder')
    email.setAttribute('placeholder', 'Email Address')
    //changes error messages to default which may have been altered by mail validation regex
    document.getElementById('emailSpan').innerText = "Email cannot be empty";
})
document.getElementById('pWord').addEventListener('click' , () => {
    document.getElementById('passwordSpan').classList.remove('unHideSpan')
})




document.getElementById('btn').addEventListener('click' ,validateEmail)
function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email.value) && email.value !== '' ){
    //    alert('hello world')
       document.getElementById('emailSpan').innerText = " please make sure email is correct";
       document.getElementById('emailSpan').classList.add('unHideSpan')
       document.getElementById('form').addEventListener('submit', (el) =>{
        el.preventDefault();
       })
  
    }
    else{
        // document.body.removeEventListener("click", el);
    }
   
    
  
  }

//add and remove  error-shake animation on mousedown and mouseout respectively
document.getElementById('btn').addEventListener('mousedown', myFunction);
function myFunction(){
    document.getElementById('fName').classList.add('input');
    document.getElementById('lName').classList.add('input');
    document.getElementById('mail').classList.add('input');
    document.getElementById('pWord').classList.add('input');
   
    document.getElementById('btn').addEventListener('mouseout', myFunction2);
function myFunction2(){
    document.getElementById('fName').classList.remove('input');
    document.getElementById('lName').classList.remove('input');
    document.getElementById('mail').classList.remove('input');
    document.getElementById('pWord').classList.remove('input');

    }
}
