let services=[];

//constructor
function Pet(name,price,type){
    //attributes=parameter;
    this.name=name
    this.price=price
    this.type=type
}
// validations
function isValid(pet){
    let validation=true

    if(pet.name==""){
        validation=false;
        alert("please add a name");
    }
    if(pet.price==""){
        validation=false;
        alert("please add a service");
    }
    if(pet.type==""){
        validation=false;
        alert("please add your animal type");
    }
    return validation //returning the results
}
//register function
function register(){
    let inputName = document.getElementById("txtName").value;
    let inputPrice = document.getElementById("txtPrice").value;
    let inputType = document.getElementById("txtType").value;

    let newPet = new Pet(inputName,inputPrice,inputType);
    console.log(newPet)

    if(isValid(newPet)==true){
        services.push(newPet);
        console.log(services);
    }
    showNotification("A new Service has been added", "success");
    clearForm();
}
function clearForm() {
    document.getElementById("txtName").value = "";
    document.getElementById("txtPrice").value = "";
    document.getElementById("txtType").value = "";
    }
//use notification
function showNotification(msg,style){
    console.log("showNotification");
    $("#notification").show();
    $("#notificationText").text(msg);
    $("#notification").addClass(style);
    setTimeout( hideNotification, 3000);
}
function hideNotification(){
    console.log("hideNotification");
    $("#notification").hide();
}
