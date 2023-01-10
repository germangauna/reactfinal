import React,{ useEffect, useState } from 'react';
import './itemCount.css';



// creamos el contador para las card pra agregar al carrito

export const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(parseInt(initial));// creamos el count para el contador, a traves de los props

    const decrease = () => {
        setCount(count - 1);//seteamos para que disminuya y al boton
    }

    const increase = () => {
        setCount(count + 1);//seteamos para que incremente y al boton
    }

    useEffect(() => {
        setCount(parseInt(initial))//usamos el useEffect para setiar el valor initial
    }, [initial])

    return (
        <div className="counter">
            <button className='btn btn-outline' disabled={count <= 1} onClick={decrease}>-</button>
            <span>{count}</span>
            <button className='btn btn-outline' disabled={count >= stock} onClick={increase}>+</button>
            <div>
                <button className='btn btn-outline' disabled={stock <= 0} onClick={() => onAdd(count)}>agregar al carrito</button>
            </div>      
        </div>
    );
}

export default ItemCount