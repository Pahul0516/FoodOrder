# FoodOrder

A small learning project focused on React, built to practice shared state, data fetching, and form submissions in a food-ordering app.

## About the app

FoodOrder displays a menu of meals with images, descriptions, and prices. You can add meals to a cart, adjust quantities, review the total, and submit an order with your contact and delivery details. The app uses dialogs for the cart, checkout, and order confirmation, and sends orders to a backend API.

## What I learned

The frontend is built with React, JavaScript (JSX), CSS, and Vite. My learning in this project focused on the React part: managing a shared cart, connecting components to an API, and handling checkout forms.

Through this project, I practiced:

- Splitting the interface into reusable components and passing data and event handlers through props.
- Sharing cart data and actions with `createContext` and `useContext` so the header, meal cards, cart, and checkout can use the same state.
- Managing state with `useState` and functional updates, updating meal quantities without mutating existing arrays or objects.
- Deriving cart totals and item counts from the cart instead of storing separate state for each value.
- Extracting request logic into a custom `useHttp` hook that manages response data, loading state, and errors.
- Using `useEffect` to load meals and `useCallback` to stabilize the request function used by the effect.
- Handling checkout with `useActionState`, reading form values with `FormData`, and displaying submission errors.
- Using `useFormStatus` to disable the submit button and show a pending message while an order is being sent.
- Rendering dialogs with `createPortal`, accessing the native dialog with `useRef`, and synchronizing it with React state through an effect.
- Rendering lists with stable keys and conditionally showing checkout actions, error messages, and order confirmation.

## Hosting

Try the app here: [FoodOrder](https://foodorder-56f7a.web.app/).

The frontend is hosted on Firebase Hosting. 