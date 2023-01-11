import React, {useEffect, useState} from "react";
import ItemDetail from '../ItemDetail'
import { useEffect, useState } from 'react';

const reloj = { id: 1, image: { alexazabache }, title: "Alex Azabache" };

const ItemDetailContainer = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(reloj);
            }, 2000);
        });

        getData.them(res => setData(res));
    }, [])

    return (
        < ItemDetail data={data} />
    )
}
export default ItemDetailContainer;