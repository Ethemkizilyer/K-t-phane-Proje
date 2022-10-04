class Storage{

    static addkitapToStorage(newkitap){
    let kitaps = this.getkitapsFromStorage();

    kitaps.push(newkitap);
    /*
    [
        {title:"asdas",director:"asdasfc",url:"wefwef"}
        {title:"asdas",director:"asdasfc",url:"wefwef"}

    ]
    */ 

        localStorage.setItem("kitaps",JSON.stringify(kitaps))
        
  
}
static getkitapsFromStorage(){
    let kitaps;
  if (localStorage.getItem("kitaps") === null) {
    kitaps = [];
  } else {
    kitaps = JSON.parse(localStorage.getItem("kitaps"));
  }

  return kitaps;
}

static deletekitapFromStorage(kitapTitle){
    let kitaps = this.getkitapsFromStorage();
// splice arrayden silmek için kullanıcaz
    kitaps.forEach( function(Kitap,index){
if(Kitap.title === kitapTitle){
    kitaps.splice(index,1)
}
    });
    localStorage.setItem("kitaps",JSON.stringify(kitaps));
}

static clearAllkitapsFromStorage(){
    localStorage.removeItem("kitaps");
}
}
