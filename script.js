const result = document.getElementById("result_Text");
const calculation = document.getElementById("screen_Text");

function insert(num){
    calculation.textContent += num;
    console.log(num);
}

document.getElementById("clear").addEventListener("click", function(){
    calculation.textContent = "";
    result.textContent = 0;
});

document.getElementById("back").addEventListener("click", function(){
    let exp = calculation.textContent;
    calculation.textContent = exp.substring(0, exp.length -1);
});