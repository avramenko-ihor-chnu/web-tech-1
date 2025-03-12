// result = prompt("Insert your numbers");
// alert(`You inserted ${result}`);

let UserInput;
UserInput = document.getElementById("in_num").value;
alert(`You inserted ${result}`);

result_div_2 = result % 2;
result_div_3 = result%3;
result_div_5 = result%5;
result_div_9 = result%9;
result_div_10 = result%10;


if (result_div_2 == 0){
    alert(`Number ${result} is devidable by 2`);
    if (result_div_10 == 0){
        alert(`Number ${result} is devidable by 10`);}
}
if (result_div_3 == 0){
    alert(`Number ${result} is devidable by 3`);
    if (result_div_9 == 0){
        alert(`Number ${result} is devidable by 9`);}
}
if (result_div_5 == 0){
    alert(`Number ${result} is devidable by 5`);
}
