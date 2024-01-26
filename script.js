const btn = document.getElementById("btn");
const birthdate = document.getElementById("birthday");


function calculateAge(){
    const birthValue = birthdate.value;
    if (birthValue === ""){
        window.alert("please select your date of birth");
    }
    else{
        const age = getAge(birthValue);
        //console.log(age);
        answer.innerText = `Your age is ${age} years old`;
    
    }

    
}

function getAge(birthValue){
    const currentDate = new Date();
    const birthdate = new Date(birthValue);
    let age = currentDate.getFullYear() - birthdate.getFullYear(birthValue);
    const month = currentDate.getMonth() - birthdate.getMonth(birthValue);
    if(month < 0 || (month === 0 && currentDate.getDate() < birthdate.getDate() ) ){
        age--;
    }
    
    return age;
}

btn.addEventListener("click", calculateAge);



