import React from "react"
import ItemCount from "../ItemCount"
import Title from '../Title'


const ItemListContainer = (props) => {
  return (
    <>
      <Title greeting={props.texto} />
      <ItemCount/>
    </>
    
  )
}
export default ItemListContainer