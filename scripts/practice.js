// JS
document.getElementById("sub1")


document.getElementsByTagName("p")
for(let i=0;i<p.length;i++) {
    p[i].style.display = "none"
}

document.getElementsByClassName("bg-black")
//jQuery
//$("#sub1").hide(); //by id


//$("p").hide(); // by tag


//$(".bg-black").hide(); //by class

// create a function that hides the last div
// trigger the function when you click the button

function hideTXT(){
    $(".txt-hide").hide();
}







let petSalon = {

    name:"the fashion pet",
    phone:"999-999-9999",
    address:{
        country:"US",
        city:"San Francisco",
        ZipCode:"12345",
    },
    pets:[]
}

//constructor
function Pet(name,age,gender,service,type){
    //attributes=parameter;
    this.name=name
    this.age=age
    this.gender=gender
    this.service=service
    this.type=type
}
function isValid(pet){
    let validation=true

    if(pet.name==""){
        validation=false;
        alert("please add a name");
    }
    if(pet.service==""){
        validation=false;
        alert("please add a service");
    }
    return validation //returning the results
}

function register(){
    let inputName = document.getElementById("txtName").value;
    let inputPrice = document.getElementById("txtPrice").value;
    let inputType = document.getElementById("txtType").value;

    let newPet = new Pet(inputName,inputPrice,inputService,inputType);
    console.log(newPet)

    if(isValid(newPet)==true){
        petSalon.pets.push(newPet);
        displayRow();
        console.log(petSalon.pets);
    }
    totalCount()
    displayRow();
    displayServiceCount();
    clearForm();
}

function deletePet(id){
    
    console.log("Deleting pet..." + id)
    document.getElementById(id).remove();
    petSalon.pets.splice(id, 1)
    displayRow();
    displayServiceCount();
}

function init(){
    let pet1 = new Pet("Scooby",99,"Male","Grooming","Dog")
    let pet2 = new Pet("Scappy",79,"Male","Vaccines","Dog")
    petSalon.pets.push(pet1,pet2);
    displayRow();
    displayServiceCount()
    totalCount()
}


function clearForm() {
document.getElementById("txtName").value = "";
document.getElementById("txtPrice").value = "";
document.getElementById("txtType").value = "";
}

window.onload=init;// wait to render HTML then load the init