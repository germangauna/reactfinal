import { useEffect, useState } from 'react';


import ItemDetail from '../ItemDetail'
import { useParams } from "react-router-dom";
import alexazabache from '../../assets/images/alexazabache.jpg';
import lightscape from '../../assets/images/lightscape.jpg';
import logan from '../../assets/images/logan.jpg';
const relojes = [
  { id: 1, image: { alexazabache }, category: 'Relojes', title: "Alex Azabache" },
  { id: 2, image: { lightscape }, category: 'Relojes', title: "Lightscape" },
  { id: 3, image: { logan }, category: 'Relojes', title: " Logan" },
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

        getData.them(res => setData(res.find(reloj => reloj.id === parseInt(detalleId))));
    }, [])

    return (
        < ItemDetail data={data} />
    )
}
export default ItemDetailContainer;