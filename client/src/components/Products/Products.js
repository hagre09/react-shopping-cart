import React, { useState } from 'react';
import data from '../../data.json';
import '../../css/Products/Products.css';
import ProductModel from './ProductModal/ProductModal';

function Products() {
    const [products, setProducts] = useState(data);
    const [product, setProduct] = useState("");

    const openModel = (product) => {
        setProduct(product)
    }

    const closeModal = () => {
        setProduct(false)
    }

    return <>
        <div className="products-wrapper"> {products.map(product => (
            <div className='product-item' key={product.id}>
                <a href='#' onClick={() => { openModel(product) }}>
                    <img src={product.imageUrl} alt={product.title} />
                </a>
                <div className='product-desc'>
                    <p>{product.title}</p>
                    <span>${product.price}</span>
                </div>
                <button>Add To Cart</button>
            </div>
        ))}

            <ProductModel product={product} closeModal={closeModal}/>
        </div>

    </>
}


export default Products;