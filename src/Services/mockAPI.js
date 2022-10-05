const items=[
    {
    "id": "1",
    "title": "Naruto",
    "detail": "Manga de 50 paginas",
    "price": 2000,
    "img": "/assets/public/naruto.jpg"
  }, {
    "id": "2",
    "title": "Naruto",
    "detail": "Manga de 50 paginas",
    "price": 2000,
    "img": "/assets/public/naruto.jpg"
  }, {
    "id": "3",
    "title": "Naruto",
    "detail": "Manga de 50 paginas",
    "price": 2000,
    "img": "/assets/public/naruto.jpg"
  }, {
    "id": "4",
    "title": "Naruto",
    "detail": "Manga de 50 paginas",
    "price": 2000,
    "img": "/assets/public/naruto.jpg"
  }, {
    "id": "5",
    "title": "Naruto",
    "detail": "Manga de 50 paginas",
    "price": 2000,
    "img": "/assets/public/naruto.jpg"
  }, {
    "id": 6,
    "title": "Naruto",
    "detail": "Manga de 50 paginas",
    "price": 2000,
    "img": "/assets/public/naruto.jpg"
  }]

function getItems(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(items)
    },2000)
  })
}
export default getItems; 

export function getSingleItem(idItem){
 /*  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(items[3])
    },2000)
  }) */
  return new Promise ((resolve, reject)=>{
    let itemFind= items.find((item)=>{
      console.log("find" , item.id, idItem);
      
      return item.id === parseInt(idItem)
    })
    if(itemFind) resolve(itemFind);
    else reject (new Error("item no encontrado"))
  })
}


 