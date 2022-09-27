import '../../Services/mockAPI'

function itemDetail({items}) {
    return(
        <div>
        <h2>{items.id}</h2>
        <p>{items.title}</p>
        <p>{items.detail}</p>
        <p>{items.price}</p>
        </div>
    )
}
    

export default itemDetail;