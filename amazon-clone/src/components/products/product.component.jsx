import React from 'react';
import './product.styles.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../../storeprovider';

function Product({id, title, image, price, rating}) {
    
    const [{basket}, dispatch] = useStateValue();

    const addTobasket = () => {
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            },
        });
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>Rs</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((row) =>
                            <p><StarIcon className="rating"/></p>
                        )
                    }
                </div>
            </div>
            <img
                src={image}
                alt=""
            />
            <button onClick={addTobasket} >Add to Cart</button>
        </div>
    )
}
export default Product;
