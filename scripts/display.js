// function displayCards(){
//     //get the html div to display the cards\
//     const DIV = document.getElementById("pets");
//     let card="";
//     //travel the array (for loop)
//     for(let i=0;i<petSalon.pets.length;i++){
//         let pet=petSalon.pets[i]
//         card+=`
//         <div class="pet">
//             <p>${pet.name}</p>
//             <p>${pet.service}</p>
//             </div>
//         `;
//     }
//     //HTML template for the cards

//     //insert the card into the HTML div
//     DIV.innerHTML= card;
// }

    function displayRow(){                              
        // Get the table body element
        const DIV = document.getElementById("petRows");
        let rows = "";
    
        // Loop through the pets array and create a row for each pet
        for(let i = 0;i< petSalon.pets.length;i++){
            let pet = petSalon.pets[i];
            rows+= `
                <tr id="${i}">
                    <td>${pet.name}</td>
                    <td>${pet.age}</td>
                    <td>${pet.gender}</td>
                    <td>${pet.service}</td>
                    <td>${pet.type}</td>
                    <td><button class="delete-btn" onclick="deletePet(${i});"><i class="fa-solid fa-trash"></i></button></td>
                </tr>
            `;
        }
    
        // Set the innerHTML of the table body to the generated rows
        DIV.innerHTML = rows;
    }
function totalCount(){
    let totalCount = petSalon.pets.length;
        document.getElementById("totalCount").innerHTML =totalCount
            }


function displayServiceCount(){
    let grooming=0;
    let vaccines=0;
    let nails=0;
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i]
        if(pet.service.toLowerCase()=="grooming"){
            grooming++;
        }
        if(pet.service.toLowerCase()=="vaccines"){
            vaccines++;
        }
        if(pet.service.toLowerCase()=="nails"){
            nails++;
        }
        document.getElementById("totalGroomings").innerHTML=grooming
        document.getElementById("totalVaccines").innerHTML=vaccines
        document.getElementById("totalNails").innerHTML=nails
    }

    //if statements

    //increase the number of grooming
    //increace the number of nails
    //increace the number of Vaccines


    
}