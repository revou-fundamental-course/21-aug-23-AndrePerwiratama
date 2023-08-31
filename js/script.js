function validateForm(){
    const nama = document.forms["name-form"]["name-input"].value;

    if (nama == ""){
        document.getElementById("error-name").innerHTML = "nama tidak boleh kosong"
        document.getElementById("name").innerHTML = "-"

        return false
    }
    else{
        document.getElementById("name").innerHTML = nama
        document.getElementById("error-name").innerHTML = ""

        return false
    }
}
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n)
}

function showDivs(n){
    var i;
    var x = document.getElementsByClassName("img-slideshow");
    if (n > x.length){slideIndex=1}
    if (n < 1){slideIndex = x.length}
    for (i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

setInterval(() => {
    plusDivs(1)
}, 3000);

function MessageForm(){
    var data = document.getElementsByName("gender");
    const namasender = document.forms["message-form"]["full-name"].value;
    const tanggalsender = document.forms["message-form"]["birth-name"].value;
    const messagesender = document.forms["message-form"]["messages"].value;
    document.getElementById("sender-full-name").innerHTML = namasender
    document.getElementById("sender-birth-date").innerHTML = tanggalsender
    document.getElementById("sender-message").innerHTML = messagesender

    if(data[0].checked){
         document.getElementById("sender-gender").innerHTML = data[0].value;
         return false
     }
    if(data[1].checked){
        document.getElementById("sender-gender").innerHTML = data[1].value;
        return false
    }
    
    return false

}

function updateDateTime() {
    const now = new Date();

    const currentDateTime = now.toLocaleString();

    document.querySelector('#datetime').textContent = currentDateTime;
  }

 setInterval(() => {
    updateDateTime();
 }, 1000);