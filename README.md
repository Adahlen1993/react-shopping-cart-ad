# Redux Shopping Cart

## Setup

- Fork
- Clone
- `npm install`
- `npm start`

## Tasks

Good news! A lot is already working here! After running `npm start`, you should be able to add a new product to the list. Our project has now grown so large that we would like to start using redux.

Redux has been added to this project, but the project isn't really using redux. Follow these steps to integrate redux into the project.

- [ ] Update the **ProductList** component to render `products` from the redux store.
- [ ] Update the **ProductForm** to add the new product to the redux store's `products`.
- [ ] When **Add to Cart** is clicked on, add the product to the redux store's `cart`.
- [ ] Display products in the cart on the **Checkout** page
- [ ] When the **Checkout** button is clicked on the **Checkout** page, clear the cart

## Stretch

- When the **Checkout** button is clicked on the **Checkout** page, in addition to clearing the cart, navigate the user back to the **Product** page
- [ ] Show the total cost on the Checkout page
- [ ] Ability to remove from cart
- [ ] Ability to remove a product
