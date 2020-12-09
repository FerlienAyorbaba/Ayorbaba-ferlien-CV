let semuaTagH1 = document.getElementsByTagName("h1");
console.log(semuaTagH1);
console.log(semuaTagH1)[0];
console.log(semuaTagH1[1]);

let Name = document.getElementById("Name").nodeValue;
console.log(Name);

let Email = document.getElementById("Email").nodeValue;
console.log(Email);

let Submit = document.getElementById("Submit").nodeValue;
console.log(Submit);

/*let test = document.getElementById("test");
test.onclick = showMessage;

function showMessage(){
    alert("Hello,Unklabers!");
}*/

function changeText(id){
    id.innerHTML = "Hi,Thankyou for saw my CV!";
}

function mOver(obj){
    obj.innerHTML ="HOPE YOU ENJOY!"
}
function mOut(obj){
    obj.innerHTML ="Put Ur Mouse/Hand Here!"
}

function mOver(obj){
    obj.innerHTML ="HOPE YOU ENJOY!"
}
function mOut(obj){
    obj.innerHTML ="Put Ur Mouse/Hand Here!"
}

function mOver(obj){
    obj.innerHTML ="HOPE YOU ENJOY!"
}
function mOut(obj){
    obj.innerHTML ="Put Ur Mouse/Hand Here!"
}

document.getElementById("myBtn").addEventListener("click", function(){
    alert("Hello Unklabers!");
});

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }

let demo = document.getElementById("demo");
demo.onclick = showMessage;

function showMessage(){
    alert("Hello, World!");
}