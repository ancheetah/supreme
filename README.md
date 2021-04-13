## On Deck Streetwear
On Deck is mock e-commerce re-sale store that carries hot streetwear brands. This app was built with React.js. Customers can sort products in the store and add them to their shopping cart.

https://ancheetah.github.io/supreme (final version not yet deployed)

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

#### Passing props
Before implementing Redux my state variables were declared in the Main component. The products prop at one time was passed from component to component to component. It was hard to keep track of why the inner most child component was not re-rendering after sorting the items. Upon backtracking out of several component levels into main I learned I had to update the state in Main with the sorted products by passing a `setState()` function from Main where the state was all the way down to the child component. Later storing the products in the Redux store and using React Hooks proved to be a more robust solution to many problems.

#### React Hooks
With the help of my instructor (thanks Matt!) I learned about the value/convenience of using React hooks to create state variables and update the state inside a component. This was useful when re-rendering the store items after sorting them. If the sorting had been handled by redux then the order of the items in the store would be re-arranged after every click from the sort menu which may be undesirable and unnecessary. Instead sorting is better handled by creating a copy of the store locally in the Store component.

#### Redux
It was a challenge deciding when it was appropriate to use Redux. I initially had set up sorting actions to be handled by redux and then later moved the sort functions inside the Sort component for the reasons mentioned above. With a good tutorial for reference I was able to set up the shopping cart state in Redux and really understand its power.

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