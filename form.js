var email=document.getElementById('feild1');
var err1=document.getElementById('err1');
var pwd=document.getElementById('feild2');
var err2=document.getElementById('err2');
var phn=document.getElementById('feild3');
var err3=document.getElementById('err3');
// sAmple1.3@domain.co.in
var regex =/^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3}).([a-z]{2,3})?$/
function validateEMAIL(){
    //alert("hi")
    if (email.value.trim()==''){
        err1.innerText="Feild cannot be empty";
        email.style.border='1px solid red';
        return false
    }
    else if(!email.value.match(regex)){
        err1.innerText="Email is not in correct format";
        email.style.border = '2px solid red';
        return false
    }
    else{
        err1.innerText="";
        email.style.border='2px solid green';
        return true
    }

}


function validatePASS(){
    if(pwd.value.trim()==''){
        pwd.style.border="2px solid red";
        err2.innerText="feild cannot be empty";
        return false
    }
    else if(pwd.value.length<3){
    pwd.style.border="1px solid red";
    err2.innerText="minimum 8 characters";
    err2.innerText="at least one uppercase";
    err2.innerText="must contain at least one number";
    return false

    

    }
    else{
        pwd.style.border="1px solid green";
        err2.innerText="";
        return true
    }
}
var regex=/^\d{10}$/;
function validatePHONENUMBER (){
    if(phn.value.trim()==''){
        phn.style.border="2px solid red";
        err3.innerText="feild cannot be empty";
        return false
    }
    else if(phn.value.match(regex)){
    phn.style.border="1px solid red";
    err3.innerText="accept numbers only";
    err3.innerText="accept numbers only";
    return false
     }
    else{
        phn.style.border="1px solid green";
        err3.innerText="";
        return true
    }
}



