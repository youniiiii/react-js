
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import { useEffect, useState } from 'react';

const contador = ({ initial, stock }) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [contador, setContador] = useState(initial);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [agregadoAlCarrito, setAgregoAlCarrito] = useState(true);
  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1)
    }
  }
  const restar = () => {
    if (contador > initial) {
      setContador(contador - 1)
    }
  }
  const agregoAlCarrito = () => {
    setAgregoAlCarrito(!agregadoAlCarrito)
    setContador(contador);
    console.log(`se agregro`);
    alert(`se agregro al carrito: ${contador}`)
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log('se agregro params setContador');

  }, [agregadoAlCarrito])


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div>
        <IconButton color="secondary" onClick={() => restar()} aria-label="delete">
          <RemoveShoppingCartIcon />-
        </IconButton>
        <IconButton color="primary" onClick={() => sumar()} aria-label="add to shopping cart">
          <AddShoppingCartIcon />+
        </IconButton>
      </div>
      <strong spacing={10}>{contador}</strong>
      <br />
      <button onClick={() => agregoAlCarrito()} style={{ color: "wheat", backgroundColor: "black", border: "none", borderRadius: 25 }}>
        <ShoppingCartCheckoutIcon />agregar al carrito
      </button>

    </div>
  );
}

export default contador;
