function check(){
    let x = document.getElementById("NameT");
    let vk = document.getElementById("VK");
    let vkval = vk.value;
    let svk = "https://vk.com"
    let y = x.value;
    if (y == ""){
        alert("Поле имя не заполнено");
    }
    if (vkval.includes(svk) == true){
        return true;
    }else{alert("Не указан VK")}

}
