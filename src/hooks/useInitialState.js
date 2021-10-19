import { useState } from 'react'

const initialState = {
    cart: []
}

const useInitialState = () => {
    const [state, setState] = useState(initialState)
    const addToCart = (payload) => {
        payload.addedToCart = true;
        setState({...state, 
            cart:[...state.cart, payload]
        })
    }

    const removeFromCart = (payload) => {
        payload.addedToCart = false,
        setState({
            ...state, 
            cart: state.cart.filter(items => items.id !== payload.id),
        })
    }

    const changeIconCart = (payload) => {
        const [changeIconCart, setChangeIconCart] = useState(false)
    }

    return {
        state, 
        addToCart,
        removeFromCart,
    }
}

export {useInitialState}
