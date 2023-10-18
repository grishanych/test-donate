import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/actions/productActions"
import CardList from "./CardList";
import shuffleArray from "../../scripts/shuffleArray"
import PropTypes from "prop-types"

export default function FilteredCardList( {property, value, priceRange} ) {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const priceLow = priceRange ? priceRange[0] : 0;
  const priceHigh = priceRange ? priceRange[1] : Infinity;
  const [prevPriceRange, setPrevPriceRange] = useState(null);
      

  useEffect(() => {
      if (JSON.stringify(prevPriceRange) === JSON.stringify(priceRange)) {
          return;
        }
      fetch('http://localhost:4000/api/products')
        .then(response => response.json())
        .then(data => {
          dispatch(setProducts(data));
          let newData = [];
          data.forEach(item => {
              if (
                (Array.isArray(value) && value.includes(item[property])) || 
                (item[property] === value)
              ) {
                const price = item.price ?? 0;
                if (price >= priceLow && price <= priceHigh) {
                  newData.push(item);
                }
              }
            });
          
          let mixedData = shuffleArray([...newData]);
          setItems(mixedData)
          setPrevPriceRange(priceRange); 
        })
        .catch(error => console.error('There was an error!', error));
  }, [property, value, priceRange, priceLow, priceHigh, prevPriceRange, dispatch]);
    

    return (
        <CardList items={items}/>
    );
}

FilteredCardList.propTypes = {
    property: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.bool
    ]).isRequired
};
