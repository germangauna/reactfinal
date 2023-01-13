import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount";
import ItemList from '../ItemList';
import Title from '../Title';
import { useParams } from "react-router-dom";
import alexazabache from "../../assets/images/alexazabache.jpg";
import lightscape from "../../assets/images/lightscape.jpg";
import logan from "../../assets/images/logan.jpg";


const relojes = [
  { id: 1, image: { alexazabache }, category: 'Relojes', title: "Alex Azabache" },
  { id: 2, image: { lightscape }, category: 'Relojes', title: "Lightscape" },
  { id: 3, image: { logan }, category: 'Relojes', title: " Logan" },
];



//en el itemCount colocamos hasta donde puede ir el contador, con el onAdd mostramos lo que compra el cliente
export const ItemListContainer = ({ texto }) => {
  const [data, setData] = useState([]);//cargar la data en el ItemListContainer con el useState
  const { categoriaId } = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(relojes);
      }, 1000);
    });
    if (categoriaId) {
      getData.then(res => setData(res.filter(reloj => reloj.category === categoriaId)));
    } else {
      getData.then(res => setData(res));
    }


  }, [categoriaId])

  const onAdd = (quantity) => {
    console.log(`compraste ${quantity} unidades`);
  }

  return (
    <>
      <Title greeting={texto} />
      <ItemCount initial={3} stock={5} onAdd={onAdd} />
      <ItemList data={data} />
    </>
    
  );
}
export default ItemListContainer;