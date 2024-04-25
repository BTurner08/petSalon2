function save(item){
    let list = readItem();
    list.push(item)
    let val = JSON.stringify(list);
    localStorage.setItem("services",val)
}

function readItem(){
    let data = localStorage.getItem("services");
    if(!data){ // no data
        return []; //creating the array
    }else{
        let list =JSON.parse(data);
        return list; //returning the array
    }
}