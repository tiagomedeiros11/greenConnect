import React, { useState, useEffect } from 'react';

function ProductList() {
  const [recyclingProducts, setRecyclingProducts] = useState([]);

  useEffect(() => {
    const fetchRecyclingProducts = async () => {
      try {
        const response = await fetch('URL_DA_API_DE_PRODUTOS_PARA_RECICLAGEM');
        if (response.ok) {
          const data = await response.json();
          setRecyclingProducts(data);
        } else {
          throw new Error('Erro ao buscar produtos para reciclagem da API');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecyclingProducts();
  }, []);

  return (
    <section className="products">
      <ul>
        {recyclingProducts.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </section>
  );
}

export default ProductList;