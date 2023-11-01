import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import PropTypes from "prop-types"

export default function FilteredCardList( {property, value, priceRange} ) {
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
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
    }, [property, value, priceRange, priceLow, priceHigh, prevPriceRange]);
    

    return (
      <CardList items={items} data-testid='filteredCardList-test'/>
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
