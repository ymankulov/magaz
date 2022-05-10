import {GET_PRODUCTS} from "./types"

export const getProducts = (data) => {
    return{type: GET_PRODUCTS, payload: data}
}