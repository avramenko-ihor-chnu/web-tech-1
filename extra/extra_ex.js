let Data_from_backend;

async function getData() {
    const url = "https://chnu-student-interview-preparation.netlify.app/.netlify/functions/listItems";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
        Data_from_backend = json;
    } catch (error) {
        console.error(error.message);
    }
}

function turnIntoTable(local_Data){
    let Data = local_Data;
    let out = "";
    for (let i = 0; i < Data.length; i++){
        out = `${out}<tr>\n`
        for (key in Data[i]){
            out = `${out}<th>${Data[i][key]}</th>`
        }
        out = `${out}</tr>`
    }

    document.getElementById("DataTable").innerHTML = "<table>"+out+"</table>";
}

function BetterTable(){
    let userInput = {};
    userInput["_id"] = document.getElementById("ForDataID").checked;
    userInput["name"] = document.getElementById("ForDataName").checked;
    userInput["description"] = document.getElementById("ForDataDescription").checked;
    userInput["price"] = document.getElementById("ForDataPrice").checked;
    userInput["category"] = document.getElementById("ForDataCategory").checked;
    userInput["src"] = document.getElementById("ForDataSrc").checked;
    userInput["image"] = document.getElementById("ForDataImage").checked;
    userInput["whatever"] = document.getElementById("ForDataWhatever").checked;
    let ListOfFilters;
    console.log(userInput);
    let BetterData = structuredClone(Data_from_backend);

    BetterData.forEach(item => {
        for ([key,value] of Object.entries(userInput)){
            if (value == true && !item.key)
                item.key = 0;
        }
    });
    // BetterData.forEach(item =>{
    //     if (!item["description"]){
    //         item["description"]="No data"
    //     }
    // });
    
    BetterData.forEach(item => {
        for (const [key, value] of Object.entries(userInput)) {
            if (value === false) {
                delete item[key];
            }
        }
    });

    return BetterData;
}



function GetImportant(){
    let Data = Data_from_backend;
    let ClearData = [];

    let l = 0;
    for (let i = 0; i < Data.length; i++){
        if (Data[i].name == "important item"){
            console.log(Data[i]);
            ClearData.push(Data[i]);
        }
    }
    return ClearData;
}

function RemoveUnimportant(){
    let Data = Data_from_backend;
    let ClearData = [];

    let l = 0;
    for (let i = 0; i < Data.length; i++){
        if (Data[i].name !== "whatever item"){
            console.log(Data[i]);
            ClearData.push(Data[i]);
        }
    }
    return ClearData;
}

