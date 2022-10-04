import { data } from "../data"

const INITIAL_STATE = {
    bookList: data,
    cart: []
}

export const reducer = (state = INITIAL_STATE, { type, payload }) => {

    switch (type) {
        case "ADD_CART":
            return {
                ...state,
                cart: state.cart.find(cartItem => cartItem.id === payload.id)
                    ? state.cart.map(cartItem => cartItem.id === payload.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem)
                    : [...state.cart, { ...payload, count: 1 }]
            }

        case "DECRASE":
            return {
                ...state,
                cart: state.cart.map(cartItem => cartItem.id === payload ? { ...cartItem, count: cartItem.count + 1 } : cartItem)
            }

        case "İNCREASE":
            return {
                ...state,
                cart: state.cart.map(cartItem => cartItem.id === payload ? cartItem.count > 1 ? { ...cartItem, count: cartItem.count - 1 } : { ...cartItem, count: 1 } : cartItem)
            }

        case "REMOVE":
            return {
                ...state,
                cart: state.cart.filter(cartItem => cartItem.id !== payload)
            }



        default:
            return state;
    }
}