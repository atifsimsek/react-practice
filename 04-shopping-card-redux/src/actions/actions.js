export const addCart = book => {

    return {
        type: "ADD_CART",
        payload: book
    }
}

export const decrase = id => {

    return {
        type: "DECRASE",
        payload: id
    }


}

export const increase = id => {

    return {
        type: "İNCREASE",
        payload: id

    }
}

export const remove = id => {

    return {
        type: "REMOVE",
        payload: id

    }
}