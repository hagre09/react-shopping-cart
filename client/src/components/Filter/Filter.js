import React, { useState } from 'react'
import '../../css/Filter/Filter.css'
import data from '../../data.json';
function Filter(props) {

  const [products, setProducts] = useState(data)
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  const handelFilterBySize = (e) => {
    setSize(e.target.value);
    if (e.target.value == "ALL") {
      setProducts(data)
      props.productsFilter(data);
    } else {
      let productClone = [...products];
      let newProducts = productClone.filter(prod => prod.sizes.indexOf(e.target.value) != -1);
      setProducts(newProducts);

      props.productsFilter(newProducts);
    }

  }
  const handelFilterByOrder = (e) => {
    let order = e.target.value;
    setSort(order);
    let productClone = [...products];
    let newProducts = productClone.sort(function (a, b) {
      if (order == "lowest") {
        return a.price - b.price
      } else if (order == "highest") {
        return b.price - a.price
      } else {
        return a.id < b.id ? 1 : -1
      }
    });
    setProducts(newProducts);

    props.productsFilter(newProducts);
  }

  return (
    <div className="filter-wrapper">
      <h2 className='filter-title'>Filter</h2>
      <div className='num-of-products'>Number of Products 4</div>
      <div className='filter-by-size'>
        <span>Filter</span>
        <select value={size} className='filter-select' onChange={(e) => { handelFilterBySize(e) }}>
          <option value="ALL">ALL</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
      <div className='filter-by-sort'>
        <span>Order</span>
        <select value={sort} className='filter-select' onChange={(e) => { handelFilterByOrder(e) }}>
          <option value="latest">Latest</option>
          <option value="lowest">lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
    </div>
  )
}


export default Filter;