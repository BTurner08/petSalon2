

let petSalon = {
    name:"the fashion pet",
    phone:"999-999-9999",
    address:{
        country:"US",
        city:"San Francisco",
        ZipCode:"12345",
    },
    pets:[
        {
            name:"Scooby",
            age:80,
            gender:"Male",
            Service:"Yes",
            Breed:"Great Dane",
        },
        {
            name:"Cujo",
            age:60,
            gender:"Male",
            Service:"No",
            Breed:"Pitbull",
        },
        {
            name:"Buddy",
            age:85,
            gender:"Male",
            Service:"Yes",
            Breed:"Golden Retriever",
        },
    ]
}
function petSalonDatabase() {
    let option = prompt("Enter 'Name' to find all pets names, enter 'Clients' to find how many pets we have, or enter'Age' to get the average age");
    let totalCount = petSalon.pets.length;
    let totalAge = 0;
    let petNames = "";

    for (let i = 0; i < petSalon.pets.length; i++) {
        petNames += petSalon.pets[i].name + "<br>";
        totalAge=totalAge+petSalon.pets[i].age;
    }
    if (option.toUpperCase() === 'CLIENTS') {
        document.getElementById("display").innerHTML = "Total number of pets: " + totalCount;
    } else if (option.toUpperCase() === 'NAME') {
        document.getElementById("display").innerHTML = "Clients names:<br>" + petNames;
    }   else if (option.toUpperCase() === 'AGE'){
        document.getElementById("display").innerHTML = "Average age:<br>" + totalAge/petSalon.pets.length;
    }
    else {
        document.getElementById("display").innerHTML = "Invalid option. Please enter 'Name' or 'Clients'.";
    }
}

petSalonDatabase();