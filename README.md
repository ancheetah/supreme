## On Deck Streetwear
On Deck is mock e-commerce re-sale store that carries hot streetwear brands. This app was built with React.js. Customers can sort products in the store and add them to their shopping cart.

Project Demo: https://ancheetah.github.io/supreme

[Video Demo](https://drive.google.com/file/d/1a_x5pxMSFdINecucEFAyIWcn6tks3sGJ/view?usp=sharing)

### Features
- Sort products in the store by price or rating
- Reusable components seen in several places on website (header, add/remove item button group)
- Add/Remove item to/from cart. Total number of items in cart is updated in real time on product page.
- Shopping cart displays items added, quantities added, subtotals, and grand total. Can update item quantity from cart or remove item all together.
- Checkout button opens a modal payment form (uncontrolled react form) to collect credit card information

### Tech
- **Google fonts** with [fontsource](https://github.com/fontsource/fontsource)
- **Bootstrap/[reactstrap](https://reactstrap.github.io/)** for styling cards, media objects, forms, navbar, etc.
- **Redux** handles cart actions globally so that quantities are updated and displayed in real time and do not reset when leaving the page. 
- **React Hooks** were used when state only needed to be updated locally in a component instead of globally in the Redux store. (e.g. payment form, re-rendering store after sort)

### Challenges

#### Redux and passing props
Before implementing Redux, my state variables were declared in the Main component. The products prop was passed several times down the component hierarchy. It was hard to keep track of why the child component was not re-rendering after sorting the items. Upon backtracking I learned I had to update the state in Main with the sorted products by passing a `setState()` function from Main where the state lived then all the way down to the child component. Later storing the product state in the Redux store helped alleviate this problem and make my code easier to follow.

#### React Hooks
I learned about the convenience of using React hooks to handle state inside a component as an alternative to class components. The redux store was set up to handle the cart's state and store product data. It was not necessary to update the store every time a user selected an option from the sort menu. Instead, I used react hooks to copy the part of the store I needed and update it after the products were sorted.

### To Do
- Add products to database for more brands and allow filtering by brand in the store
- Clean up/restructure product database
- Disbale payment modal when cart is empty
- Add animations
- Allow user to enter custom quantity to add to cart instead of incrementing/decrementing by 1
- Change payment form date to collect month and year only as well as validate inputs
- Create footer with newsletter signup

### Resources
- Database: https://www.streetwearofficial.com/collections/supreme
- [Shopping cart tutorial from Medium](https://medium.com/@ayabellazreg/make-a-simple-shopping-cart-app-using-react-redux-1-3-fefde93e80c7)
- React Hooks: https://dommagnifi.co/2020-12-03-toggle-state-with-react-hooks/
- Design inspiration: [Project Blitz](https://www.projectblitz.com/)
- Logo creator: [Canva](https://www.canva.com/)
- Color Palette: [coolors](https://coolors.co/ffee32-ffd100-202020-292929)
