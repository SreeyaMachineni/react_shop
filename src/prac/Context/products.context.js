import { createContext, useState } from "react";

export const ProductContext = createContext({
    products:[],
    setProducts:()=>null
})

export const ProductContextProvider = ({children})=>{
    const [products,setProducts]=useState([])
    const value = {products,setProducts}
    return (
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}