/*INPUTS*/ 
const nameInput=document.getElementById('name-input');
const cnumberInput=document.getElementById('cnumber-input');
const monthInput=document.getElementById('month-input');
const yearInput=document.getElementById('year-input');
const cvcInput=document.getElementById('cvc-input');
const button=document.getElementById('btn-submit');

/*CARD SCREEN*/
const nameCard=document.getElementById('name');
const cnumberCard=document.getElementById('card-number');
const monthCard=document.getElementById('month');
const yearCard=document.getElementById('year');
const cvcCard=document.getElementById('cvc');


let myArray=[];
let checkName;
let checkNumber;
let checkCvc;
let checkDate;

nameInput.addEventListener('click',()=>{
    document.addEventListener('keyup',(e)=>{
        nameCard.textContent=nameInput.value;       
    });
});

cnumberInput.addEventListener('click',()=>{
   document.addEventListener('keyup',(e)=>{
        myArray.push(cnumberInput.value);
        myArray.splice(0,myArray.length-1);
        let myString=myArray.toString();
        const result = myString.match(/.{1,4}/g).join(" ");
        cnumberCard.textContent=result;
   });
});

cvcInput.addEventListener('click',()=>{
    document.addEventListener('keyup',(e)=>{
        cvcCard.textContent=cvcInput.value;
    });
});

monthInput.addEventListener('click',()=>{
    document.addEventListener('keyup',(e)=>{
        monthCard.textContent=monthInput.value;
    });
});

yearInput.addEventListener('click',()=>{
    document.addEventListener('keyup',(e)=>{
        yearCard.textContent=yearInput.value;
    });
});

button.addEventListener('click',(e)=>{
    e.preventDefault();
    validateName(nameInput.value);
    validateNumber();
    validateCvc(cvcInput.value);
    validateDate(monthInput.value,yearInput.value);

    if(checkName==true && checkNumber==true && checkCvc==true && checkDate==true){
        document.querySelector('form').style.display="none";
        document.querySelector('.complete').style.display="flex";
    }
});

document.querySelector('.complete button').addEventListener('click',()=>{
    location.reload();
});


const validateName = (name)=>{

    let nameRegEx=/[0-9]/;
    if(name==''){
        nameInput.classList.add('active-msg');
        document.getElementById('msg-name').style.opacity="1";
        document.getElementById('msg-name').textContent="Enter a name";
        checkName=false;
    }else if(name.match(nameRegEx)){
        nameInput.classList.add('active-msg');
        document.getElementById('msg-name').style.opacity="1";
        document.getElementById('msg-name').textContent="Error, enter a real name";
        checkName=false;
    }else{
        nameInput.classList.remove('active-msg');
        document.getElementById('msg-name').style.opacity="0";
        checkName=true;
    }
}

const validateNumber = ()=>{
    const regEx=/^[0-9]+$/;
    let numberValue=cnumberInput.value;
    
    if(numberValue.match(regEx)){
        document.getElementById('msg-number').style.opacity="0";
        cnumberInput.classList.remove('active-msg');
        checkNumber=true;
    }else{
        document.getElementById('msg-number').style.opacity="1";
        cnumberInput.classList.add('active-msg');
        checkNumber=false;
    }
}

const validateCvc = (cvc)=>{

    let myCvc=cvc;
    let cvcRegEx=/[a-zA-Z]/;


    if(cvcInput.value==''){
        cvcInput.classList.add('active-msg');
        document.getElementById('msg-cvc').style.opacity="1";
        document.getElementById('msg-cvc').textContent="Can't be blank";
        checkCvc=false;
    }else if(cvc.match(cvcRegEx)){
        cvcInput.classList.add('active-msg');
        document.getElementById('msg-cvc').style.opacity="1";
        document.getElementById('msg-cvc').textContent="Wrong format, numbers only";
        checkCvc=false;
    }else if(myCvc.length<3){
        cvcInput.classList.add('active-msg');
        document.getElementById('msg-cvc').style.opacity="1";
        document.getElementById('msg-cvc').textContent="Error, enter 3 numbers";
        checkCvc=false;
    }else{
        cvcInput.classList.remove('active-msg');
        document.getElementById('msg-cvc').style.opacity="0";
        checkCvc=true;
    }
}

const validateDate = (month,year)=>{

    let myMonth=Number(month);
    let myYear=Number(year);
    let dateRegEx=/[a-zA-Z]/;


    if(monthInput.value=='' && yearInput.value==''){
        monthInput.classList.add('active-msg');
        yearInput.classList.add('active-msg');
        document.getElementById('msg-date').style.opacity="1";
        checkDate=false
    }else if(monthInput.value=='' || myMonth>12 || monthInput.value.match(dateRegEx)){
        monthInput.classList.add('active-msg');
        document.getElementById('msg-date').style.opacity="1";
        checkDate=false
    }else if(yearInput.value=='' || myYear<23 || yearInput.value.match(dateRegEx)){
        yearInput.classList.add('active-msg');
        document.getElementById('msg-date').style.opacity="1";
        checkDate=false
    }else{
        monthInput.classList.remove('active-msg');
        yearInput.classList.remove('active-msg');
        document.getElementById('msg-date').style.opacity="0";
        checkDate=true;
    }
}