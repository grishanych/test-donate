import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function CardPage() {
    const { itemNo } = useParams();
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      fetch(`http://localhost:4000/api/products/${itemNo}`)
        .then(response => 
            {
                console.log(response);
                return response.json()
            }
            )
        .then(data => setProduct(data));
    }, [itemNo]);
  
    return (
      <div>
        {product ? (
          <div>
            <h1>{product.name}</h1>
          </div>
        ) : (
          'Загрузка...'
        )}
      </div>
    );
  }

  export default CardPage