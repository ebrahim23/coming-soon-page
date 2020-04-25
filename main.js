let form = document.getElementById("myForm");
let input = document.getElementById("myInput").value;
let pattern = /^[^]+@[^]+\.[A-Z]{2,3}$/;



function validation(){
    if (input.match(pattern)){
        form.classList.remove("form-err");
    } else{
        form.classList.add("form-err");
    }
}
