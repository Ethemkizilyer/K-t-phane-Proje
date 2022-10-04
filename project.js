const form = document.getElementById("kitap-form");
const titleElement = document.querySelector("#title")
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-kitaps");



//Tüm eventleri yükleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addkitap);
    document.addEventListener("DOMContentLoaded",function(){
        let kitaps = Storage.getkitapsFromStorage();
        UI.loadAllkitaps(kitaps);
    });

    cardbody.addEventListener("click",deletekitap);
    clear.addEventListener("click",clearAllkitaps);
}
function addkitap(e){
const title = titleElement.value;
const director = directorElement.value;
const url = urlElement.value;

if ( title === "" || director === "" || url === ""){
    // hata
    UI.displayMessages ("Tüm alanları doldurun...","danger");


}
else {
    // / yeni kitap
const newkitap = new Kitap(title,director,url)

    UI.addkitapToUI(newkitap); // Arayüze kitap ekleme
    Storage.addkitapToStorage(newkitap); // Storage a kitap ekleme
UI.displayMessages("kitap Başarıyla Eklendi...", "success");

}


UI.clearInputs(titleElement,urlElement,directorElement);
    e.preventDefault()
}

function deletekitap(e){
    if(e.target.id === "delete-kitap"){
        UI.deletekitapFromUI(e.target);
        Storage.deletekitapFromStorage(
          e.target.parentElement.previousElementSibling.previousElementSibling
            .textContent
        );
        // console.log(
        //   e.target.parentElement.previousElementSibling.previousElementSibling.textContent
        // );
        UI.displayMessages("Silme işlemi başarılı","success")
    }
}

function clearAllkitaps (){

    if(confirm("Emin misiniz ?")){

    UI.clearAllkitapsFromUI();
    Storage.clearAllkitapsFromStorage();}
}