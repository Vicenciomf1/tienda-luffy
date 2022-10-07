import ItemList from '../itemListConatainer/ItemList'


function itemListContainer(greeting) {
 
 return( 
    <div>
       {/*  <h1>{props.greeting}</h1>  */}
        <div className='main-container'>
<<<<<<< HEAD
      {/*  <Item title= "Mangaca de devilMan" descripcion= "lorem lipsum" precio="1500"/>
        <Item title= "Naruto Gaiden"/>
        <Item title= "Dr Slump"/>  */}
        <ItemList/> 
        <ItemList/>
=======
        <ItemList title= "Mangaca de devilMan" descripcion= "lorem lipsum" precio="1500"/>
        <ItemList title= "Naruto Gaiden"/>
        <ItemList title= "Dr Slump"/> 
>>>>>>> a85f36e0a8c33533e85c40c49e32eb607b2a990e
       {/*  <ItemList/>  */}
        
        </div>
      </div>
  )
}

export default itemListContainer;
