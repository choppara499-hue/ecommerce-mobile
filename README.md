# MyStore — React Native E-Commerce App

## Project Description

MyStore is a mobile e-commerce application built using React Native, Expo, and TypeScript.

This project displays sample products using reusable components and allows users to navigate from the Products screen to the Product Details screen using React Navigation and route parameters.

## Technologies Used

- React Native
- Expo
- TypeScript
- React Navigation
- React Navigation Native Stack
- FlatList
- StyleSheet
- Flexbox
- Pressable
- Expo Go

## Features

- MyStore Products screen
- Product listing using FlatList
- At least 8 sample products using local data
- Reusable ProductCard component
- Product images, names, prices, and categories
- Unique product IDs
- Two-column product grid
- View Details functionality
- Navigation to Product Details screen
- ID-based route parameters
- Displays the selected product's details
- Product image, ID, name, price, category, and description
- Back navigation to the Products screen
- Product Not Found message for invalid product IDs
- Friendly message when no products are available
- Mobile-friendly styling
- Flexbox-based layouts

## Project Structure

```text
ecommerce-mobile/
├── App.tsx
├── index.js
├── app.json
├── package.json
├── package-lock.json
├── README.md
├── assets/
└── src/
    ├── components/
    │   └── ProductCard.tsx
    ├── data/
    │   └── products.ts
    └── screens/
        ├── HomeScreen.tsx
        ├── ProductsScreen.tsx
        └── ProductDetailsScreen.tsx
```

Note: The structure above shows the main files. Keep the file names consistent with the actual project.

## Requirements

- Node.js LTS
- npm
- Visual Studio Code
- Expo Go or an Android emulator

## Installation and Running

1. Clone or download the repository.
2. Open the project folder in Visual Studio Code.
3. Install dependencies:

```bash
npm install
```

4. Start the Expo development server:

```bash
npx expo start --clear
```

5. Open the application using Expo Go or an Android emulator.

## React Native Concepts Learned

- View and Text for layouts and text
- Image for displaying product images
- FlatList for rendering product lists
- keyExtractor for identifying list items
- Props for passing product data to ProductCard
- StyleSheet for styling
- Pressable for user interaction
- Flexbox for layouts
- React Navigation Native Stack
- Navigation between screens
- Route parameters for passing product IDs
- Finding selected products using their IDs
- Handling missing product data
- Separating local data from UI components

## Navigation and Route Parameters

The application uses React Navigation Native Stack.

- Products screen displays the product list.
- When a user selects a product, its ID is passed to the Product Details screen.
- The Product Details screen reads the ID from route parameters.
- The selected product is found using the local product data.
- Back navigation returns to the Products screen.
- If the product is not found, a Product Not Found message is displayed.

## Data

Product information is stored in:

`src/data/products.ts`

Each product contains:

- id
- name
- price
- category
- image

Product information is displayed using the reusable ProductCard component.

## Testing Checklist

- [ ] App starts without errors
- [ ] Products screen displays the sample list
- [ ] At least 8 products are displayed
- [ ] Every product displays its image, name, price, and category
- [ ] FlatList uses keyExtractor
- [ ] ProductCard is reused for products
- [ ] Product IDs are unique and stable
- [ ] Tapping each product opens the correct details
- [ ] Different products show their own details
- [ ] Product image displays with appropriate sizing
- [ ] Back navigation returns to the Products screen
- [ ] Missing product data does not crash the app
- [ ] Empty data displays a friendly message
- [ ] Layout works on a phone or emulator
- [ ] Updated code is pushed to GitHub

## Backend

This assignment uses local sample data and does not require a backend API.

No authentication, cart, checkout, or payment integration is included in Assignment 3.

## Future Improvements

- Backend API integration
- Additional shopping features in future assignments

## Author

React Native Assignment 3 — MyStore Mobile E-Commerce Application

GitHub Repository: https://github.com/choppara499-hue/ecommerce-mobile
