import React from "react"
import ItemCount from "../ItemCount"
import Title from '../Title'







//en el itemCount colocamos hasta donde puede ir el contador, con el onAdd mostramos lo que compra el cliente
const ItemListContainer = ({texto}) => {

  const onAdd = (quantity) => {
    console.log(`compraste ${quantity} unidades`);
  }

  return (
    <>
      <Title greeting={texto} />
      <ItemCount initial={3} stock={5} onAdd={onAdd} />
    </>
    
  )
}
export default ItemListContainer