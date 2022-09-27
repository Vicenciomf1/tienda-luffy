const items=[
    {
    "id": 1,
    "title": "Namfix",
    "category": "Tracker",
    "price": 68
  }, {
    "id": 2,
    "title": "Cardguard",
    "category": "Land Cruiser",
    "price": 33
  }, {
    "id": 3,
    "title": "Temp",
    "category": "XC70",
    "price": 80
  }, {
    "id": 4,
    "title": "Domainer",
    "category": "Montero",
    "price": 96
  }, {
    "id": 5,
    "title": "Fintone",
    "category": "tC",
    "price": 5
  }, {
    "id": 6,
    "title": "Cardify",
    "category": "Pathfinder",
    "price": 36
  }]

/* function getItems(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(items)
    },2000)
  })
}
export default getItems;  */

export default function getSingleItem(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(items[3])
    },2000)
  })
}


 