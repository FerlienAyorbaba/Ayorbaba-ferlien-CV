let semuaTagH1 = document.getElementsByTagName("h1");
console.log(semuaTagH1);
console.log(semuaTagH1)[0];
console.log(semuaTagH1[1]);

/*let test = document.getElementById("test");
test.onclick = showMessage;

function showMessage(){
    alert("Hello,Unklabers!");
}*/

function changeText(id){
    id.innerHTML = "Hi,Thankyou for saw my CV!";
}

function mOver(obj){
    obj.innerHTML ="This is My close profile"
}
function mOut(obj){
    obj.innerHTML ="See Me!"
}

document.getElementById("myBtn").addEventListener("click", function(){
    alert("Hello Unklabers!");
});

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }