import ItemList from '../itemListConatainer/ItemList'


function itemListContainer(greeting) {
 
 return( 
    <div>
       {/*  <h1>{props.greeting}</h1>  */}
        <div className='main-container'>
        <ItemList title= "Mangaca de devilMan" descripcion= "lorem lipsum" precio="1500"/>
        <ItemList title= "Naruto Gaiden"/>
        <ItemList title= "Dr Slump"/> 
       {/*  <ItemList/>  */}
        
        </div>
      </div>
  )
}

export default itemListContainer;