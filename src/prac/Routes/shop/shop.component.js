import { useEffect, useState, useContext } from "react"
import Category from "../../Components/Categories/Categories.component"
import {ProductContext} from '../../Context/products.context'
import {getShopItems} from '../../utils/shop.utils'
import {Route,Routes} from 'react-router-dom'

const Shop = () => {
    // const {products,setProducts} = useContext(ProductContext)
    // useEffect(async()=>{  
    //     setProducts(await getShopItems())
    //     console.log(products)
    // },[])

    return (
        // <>
        // {
        //     products.map((item)=>{
        //        return <Category item={item}/>
        //     })
        // }
        // </>
        <div>shop</div>
        
    )
}

export default Shop