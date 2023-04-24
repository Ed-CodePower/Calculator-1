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