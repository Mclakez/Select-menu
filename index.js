const selectField = document.getElementById("selectfield")
const selectText = document.getElementById("selecttext")
const options = document.getElementsByClassName("options")
const list = document.getElementById("list")
const arrow = document.getElementById("arrow")

for(option of options){
    option.addEventListener("click", function(){
        selectText.innerHTML = this.textContent
        list.classList.toggle("hide")
        arrow.classList.toggle("rotate")
    })
}


arrow.addEventListener("click",function() {
    list.classList.toggle("hide")
    arrow.classList.toggle("rotate")
})
