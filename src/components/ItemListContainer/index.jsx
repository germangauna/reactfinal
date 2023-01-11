import React, {useState, useEffect } from "react"
import ItemCount from "../ItemCount"
import Title from '../Title'
import ItemList from '../ItemList'
import alexazabache from "../../assets/images/alexazabache.jpg"
import lightscape from "../../assets/images/lightscape.jpg"
import logan from "../../assets/images/logan.jpg"


const relojes = [
  { id: 1, image: { alexazabache }, title: "Alex Azabache" },
  { id: 2, image: { lightscape }, title: "Lightscape" },
  { id: 3, image: { logan }, title: " Logan" },
];



//en el itemCount colocamos hasta donde puede ir el contador, con el onAdd mostramos lo que compra el cliente
export const ItemListContainer = ({ texto }) => {
  
//cargar la data en el ItemListContainer con el useState
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(relojes);
      }, 2000);
    });

    getData.then(res => setData(res));

  }, [])

  const onAdd = (quantity) => {
    console.log(`compraste ${quantity} unidades`);
  }

  return (
    <>
      <Title greeting={texto} />
      <ItemCount initial={3} stock={5} onAdd={onAdd} />
      <ItemList data={data } />
    </>
    
  )
}
export default ItemListContainer