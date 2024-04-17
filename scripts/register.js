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

function register(){
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputService = document.getElementById("txtService").value;
    let inputType = document.getElementById("txtType").value;

    let newPet = new Pet(inputName,inputAge,inputGender,inputService,inputType);
    console.log(newPet)

    clearForm();
}
let pet1 = new Pet("Scooby",99,"Male","Grooming","Dog")

console.log(pet1)


function clearForm() {
    // Get references to the form elements
document.getElementById("txtName").value = "";
document.getElementById("txtAge").value = "";
document.getElementById("txtGender").value = "";
document.getElementById("txtService").value = "";
document.getElementById("txtType").value = "";

}