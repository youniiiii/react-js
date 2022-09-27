
import { useContext } from 'react';
import CartContext from './CartContext'
function Cart() {
  const ctx = useContext(CartContext);
  return (
    <> 
    <h1>holasdsssss</h1>

      <button onClick={ctx.clear}>borrar</button>

      {
        ctx.cartList.map(item => <li>${item.nombre}${item.precio}<button onClick={() => ctx.removeItem(item.id)}>BORRAR producto</button></li>)
      }
    </>
  );
}

export default Cart;
