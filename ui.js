class UI {


   static addkitapToUI(newkitap){
 /*   
<tr>
<td><img src="" class="img-fluid img-thumbnail"></td>
<td></td>
<td></td>
<td><a href="#" id = "delete-kitap" class = "btn btn-danger">kitapi Sil</a></td>
</tr> 
 */   

const kitapList = document.getElementById("kitaps");

kitapList.innerHTML += `
<tr >
<td><img src="${newkitap.url}" width=150px  class="img-fluid img-thumbnail"></td>
<td>${newkitap.title}</td>
<td>${newkitap.director}</td>
<td><a href="#" id = "delete-kitap" class = "btn btn-danger">Kitabı Sil</a></td>
</tr> 

`;


}

static clearInputs(element1,element2,element3){
    element1.value= "";
    element2.value= "";
    element3.value= "";
}

static displayMessages(message,type){
    const cardBody = document.querySelectorAll(".card-body")[0];
    //Alert divini oluşturmamız gerekiyro

    const div = document.createElement("div");


    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardBody.appendChild(div);

    setTimeout(function(){
    div.remove();    
    },1000)
}

static loadAllkitaps(kitaps){
    const kitapList = document.getElementById("kitaps");

    kitaps.forEach(function(Kitap) {
        kitapList.innerHTML += `<tr>
<td><img src="${Kitap.url}" width=150px class="img-fluid img-thumbnail"></td>
<td>${Kitap.title}</td>
<td>${Kitap.director}</td>
<td><a href="#" id = "delete-kitap" class = "btn btn-danger">Kitabı Sil</a></td>
</tr> `;
    });
}

static deletekitapFromUI(element) {
    element.parentElement.parentElement.remove();
}

static clearAllkitapsFromUI(){
    const kitapList = document.getElementById("kitaps");

    // kitapList.innerHTML = ""; YAVAŞ ÇALIŞAN BİR YÖNTEM

    while(kitapList.firstElementChild !== null){ // CHİLD OLDUĞU SÜREECE
    kitapList.firstElementChild.remove()}
}
}

