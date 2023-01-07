import './itemCount.css';

import React from "react";

// creamos el contador para las card pra agregar al carrito

export const ItemCount = () => {
    return (
        <div className="counter">
            <button>-</button>
            <span>2</span>
            <button>+</button>
            <div>
                <button>agregar al carrito</button>
            </div>      
        </div>
    );
}

export default ItemCount