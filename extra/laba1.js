function showUserInput() {
    let userInput = document.getElementById("InNum").value;
    document.getElementById("resultBox").innerHTML = "<b>"+userInput+"<\/b>";

    let result_div_2 =  userInput % 2;
    let result_div_3 =  userInput%3;
    let result_div_5 =  userInput%5;
    let result_div_9 =  userInput%9;
    let result_div_10 = userInput%10;

    let DoEx = `
${(result_div_2 == 0) ? "" : "не"} ділиться на 2   <br>
${(result_div_3 == 0) ? "" : "не"} ділиться на 3   <br>
${(result_div_5 == 0) ? "" : "не"} ділиться на 5   <br>
${(result_div_9 == 0) ? "" : "не"} ділиться на 9   <br>
${(result_div_10 == 0) ? "" : "не"} ділиться на 10 <br>
             `;

    document.getElementById("DivCheck").innerHTML = "<b>"+DoEx+"<\/b>";
}
