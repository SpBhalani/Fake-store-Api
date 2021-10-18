import React from 'react'
import { useSelector } from 'react-redux'
import './body.css';
import { Link } from 'react-router-dom';

/**
* @author
* @function Body
**/

export const Body = (props) => {

    let products = useSelector(state => state);
    products = products.products.product

    // console.log("From Body" ,products.products.product);
    return (
        <div className="body">
            {
                products.map((product) => {
                    return (
                        <>
                            <div className="product" key={product.id}>
                                <h4>{product.title}</h4>
                                <Link to={`/product/${product.id}`} >
                                    <img src={product.image} alt={product.title} />
                                </Link>
                                <p>$ {product.price}</p>
                                {/* <p>{product.description}</p> */}
                            </div>
                        </>
                    )

                })
            }
        </div >
    )

}