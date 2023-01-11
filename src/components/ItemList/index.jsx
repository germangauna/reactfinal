import React from "react";
import Item from '../Item';

const ItemList = ({data = []}) => {
  return (
    data.map(reloj => <Item key={reloj.id} info={reloj} />)
  );
}
export default ItemList