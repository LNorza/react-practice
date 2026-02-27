import { ItemCounter } from './app/ItemCounter';

interface ItemInCart {
  productName: string;
  quantity: number;
}

const ItemsInCart: ItemInCart[] = [
  { productName: 'Nintendo Switch 2', quantity: 10 },
  { productName: 'Pro Controller', quantity: 2 },
  { productName: 'Super Smash', quantity: 1 },
];

export const App = () => {
  return (
    <>
      <h1>Shopping Cart</h1>
      <p>Your cart is currently empty.</p>

      {ItemsInCart.map((item) => (
        <ItemCounter
          key={item.productName}
          name={item.productName}
          quantity={item.quantity}
        />
      ))}
    </>
  );
};
