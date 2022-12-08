import { useState, useEffect } from "react"
import {getproducts } from "../../asyncMock"

const ItemlistContainer = () => {
    conts [products, setProducts] = useState([])
    useEffect (()=> {
        getproducts()
            .the(response => {
                setproducts(response)
            })
            .catch(error => {
                console.log(error)
            })

    }),[]

    return 
        <div>
            <h1>Listado de productos</h1>
            {
                products.map(product => {
                    return (
                        <div>
                         <img src={products.img} alt={products.name}/>
                         <h3>{products.name}</h3>
                         <p>{products.price}</p>
                        </div>
                    )

                }
                    )
            }
        </div>
}

export default ItemlistContainer