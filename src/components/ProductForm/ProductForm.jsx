import React, { useState } from 'react';

function ProductForm({ addNewProduct }) {
  // You will need to keep this state in this component
  // if you're only using something in one component,
  // you do not need to move it to redux
  let [productToAdd, setProductToAdd] = useState({ name: '', price: 0 });

  const handlePriceChange = (event) => {
    setProductToAdd({
      ...productToAdd,
      price: event.target.value,
    });
  }

  const handleNameChange = (event) => {
    setProductToAdd({
      ...productToAdd,
      name: event.target.value,
    });
  }

  const addProduct = (event) => {
    event.preventDefault();

    // TODO: Dispatch here, instead of using addNewProduct from parent
    addNewProduct(productToAdd);

    // TODO: Clear input fields

  };

  return (
    <form onSubmit={(event) => addProduct(event)}>
      <input
        onChange={handleNameChange}
        type='text'
        placeholder='name'
      />

      <input
        onChange={handlePriceChange}
        type='text'
        placeholder='price'
      />

      <button type='submit'>Submit</button>
    </form>
  );
}

export default ProductForm;
