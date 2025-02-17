function fn(message, Aneesh_Loves_Himesh_And_Himesh_Loves_Aneesh){
    console.log(message);
    Aneesh_Loves_Himesh_And_Himesh_Loves_Aneesh();
}

function callbackfn(){
    console.log("Welcome back");
}

fn("welcome", callbackfn);