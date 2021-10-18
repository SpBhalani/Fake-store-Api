import React, { useEffect } from 'react'
import './productInfo.css'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { useParams } from 'react-router';
import { removeSelectedData, selectedData } from './redux/action/action';
/**
* @author
* @function ProductInfo
**/

export const ProductInfo = (props) => {

    const productAll = useSelector(state => state);
    const product = productAll.product.payload;
    const dispatch = useDispatch();
    const productId = useParams();
    console.log(product);
    useEffect(() => {
        const fetchProductInfo = async () => {
            const response = await axios
                .get(`https://fakestoreapi.com/products/${productId.productId}`)
                .catch((err) => { console.log("msg", err) });
            dispatch(selectedData(response.data));
        }
        if (productId.productId && productId.productId !== "") fetchProductInfo();
        return () => {
            dispatch(removeSelectedData())
        }
    }, [productId, dispatch])
    return (
        <>
            {!product  ?
                (
                    <div>...Loading</div>
                )
                :
                (

                    <div className="productInfo">

                        <div className="productInfo__left">
                            <img src={product.image} alt={product.title} />
                        </div>
                        <div className="productInfo__right">
                            <h2>{product.title}</h2>
                            <strong>Price</strong>
                            <p>$ {product.price}</p>
                            <strong>Description</strong>
                            <p> {product.description}</p>
                            <strong>Rating</strong>
                            <p>{product.rating.rate} / 5 (Total {product.rating.count} Review)</p>

                        </div>
                    </div>
                )
            }
        </>

    )

}