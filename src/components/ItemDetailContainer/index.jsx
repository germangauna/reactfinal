import React, { useEffect, useState } from 'react';

import ItemDetail from '../ItemDetail'
import { useParams } from "react-router-dom";


const relojes = [
  { id: 1, image: "https://images.unsplash.com/photo-1582150264904-e0bea5ef0ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", category: 'RelojHombre', title: "Sapphire" },
  { id: 2, image:"https://images.unsplash.com/photo-1619946928632-abefa12506e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80 ", category: 'RelojHombre', title: "Rolex Daytona" },
  { id: 3, image: "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", category: 'RelojHombre', title: "Rolex" },
  { id: 4, image: "https://images.unsplash.com/photo-1451290337906-ac938fc89bce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1318&q=80", category: 'RelojMujer', title: "Adriatica" },
  { id: 5, image: "https://images.unsplash.com/photo-1592865239912-7153891acf4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80", category: 'RelojMujer', title: " Mamba" },
  { id: 6, image: "https://images.unsplash.com/photo-1552742275-6aee5589cd29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80", category: 'RelojMujer', title: " Beeze" },
];

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { detalleId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(relojes);
            }, 1000);
        });

        getData.then(res => setData(res.find(reloj => reloj.id === parseInt(detalleId))));
    }, [])

    return (
        < ItemDetail data={data} />
    )
}
export default ItemDetailContainer;