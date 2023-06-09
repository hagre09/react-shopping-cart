import React, { useState } from 'react';
import data from '../../data.json'
import '../../css/Products/Products.css'

function Products() {

    const [products, setProducts] = useState(data);

    return <>
        <div className="products-wrapper"> {products.map(product => (
            <div className='product-item' key={product.id}>
                <img src={product.imageUrl} alt={product.title} />
                <div className='product-desc'>
                    <p>{product.title}</p>
                    <span>{product.price}</span>
                </div>
                <button>Add To Cart</button>
            </div>
        ))}
        </div>

    </>
}


export default Products;