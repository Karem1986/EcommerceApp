import create from 'zustand';

export const useCart = create(set => ({
  cart: {},
  addItem: ({id, name, price, image}) => {
    set(state => {
      const cart = {...state.cart};
      if (!cart[id]) {
        cart[id] = {
          id,
          name,
          price,
          image,
          quantity: 0,
        };
      }

      cart[id].quantity += 1;
      return {cart};
    });
  },
  removeItem: id => {
    set(state => {
      const cart = {...state.cart};

      if (!cart[id]) {
        return {cart};
      }

      const newQuantity = cart[id].quantity - 1;

      if (newQuantity <= 0) {
        delete cart[id];
      } else {
        cart[id].quantity = newQuantity;
      }
      return {cart};
    });
  },
}));
