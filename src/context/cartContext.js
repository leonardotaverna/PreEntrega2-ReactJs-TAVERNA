import { createContext, useState } from "react";

export const CartContext = createContext ({cart: []});

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([]) 

    const addItem = (item, quantity) => {
        if (! isInCart (item.id)){
            setCart (prev => [...prev, {...item, quantity}])
        }
        else{
            console.error ('El producto ya se encuentra en el carrito')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart (cartUpdated)
    }
    
    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some (prod => prod.id === itemId)
    }

    const totalQuantity = () =>  {
        let total = 0;
        cart.forEach((item) => {
          total += item.quantity;
        });
        return total;
    }

    const totalPrice = () => {
        let total = 0;
        cart.forEach((item) => {
          total += item.price * item.quantity;
        });
        return total;
    };

    return (
        <CartContext.Provider value = {{cart, addItem, removeItem, clearCart, totalQuantity, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}


