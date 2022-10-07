const items=[
  {
  "id": 1,
  "title": "dragon ball",
  "category": "aventura",
  "img": "/assets/dragon-ball.jpg",
  "detail": "Manga de 200 paginas",
  "price": "2000", 
}, {
  "id": 2,
  "title": "Naruto",
  "category": "aventura",
  "img": "/assets/naruto.jpg",
  "detail": "Manga de 150 paginas",
  "price": "3000", 
}, {
  "id": 3,
  "title": "bleach",
  "category": "batalla",
  "img": "/assets/bleach.webp",
  "detail": "Manga de 100 paginas",
  "price": "2000", 
}, {
  "id": 1,
  "title": "attack titan",
  "category": "batalla",
  "img": "/assets/atack-titan.webp",
  "detail": "Manga de 200 paginas",
  "price": "2000", 
}, {
  "id": 5,
  "title": "One piece",
  "category": "aventura",
  "img": "/assets/one-piece.webp",
  "detail": "Manga de 500 paginas",
  "price": "2000", 
}, {
  "id": 6,
  "title": "DR slump",
  "category": "narrativa",
  "img": "/assets/dr-slump.webp",
  "detail": "Manga de 40 paginas",
  "price": "1000", 
}]

function getItems(){
return new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve(items)
  },2000)
})
}
export default getItems;  

export function getSingleItem(IdItem){
return new Promise((resolve, reject)=>{
  let itemFind= items.find((item)=>{
    return item.category=== IdItem
  })
  if(itemFind) resolve(itemFind);
  else reject (new Error("item no encontrado"))
})
 
}


export function getItemsByCategory(cat){
return new Promise ((resolve, reject)=>{
  let itemFind= items.filter((item)=>{
    return item.category=== cat
  })
  if(itemFind) resolve(itemFind);
  else reject (new Error("item no encontrado"))
})
}