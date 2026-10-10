# MyStore — React Native E-Commerce App

## Project Description

MyStore is a mobile e-commerce application built using React Native and Expo. This project is the mobile version of my existing e-commerce application.

The purpose of this project is to learn React Native components, Expo, reusable components, Flexbox layouts, and mobile UI development.

## Technologies Used

- React Native
- Expo
- TypeScript
- Expo Router
- React Native StyleSheet
- Expo Go

## Features

- MyStore home screen
- Welcome message and promotional banner
- Four product categories
- Featured products with images, names, and prices
- Reusable ProductCard component
- Reusable CategoryItem component
- Reusable SectionHeader component
- Reusable PrimaryButton component
- Scrollable home screen
- Flexbox-based layouts
- Product details screen
- Add to Cart functionality
- Cart screen with product names, prices, and quantities
- Increase and decrease product quantities
- Automatic cart total calculation

## Project Structure

```text
ecommerce-mobile/
├── src/
│   ├── app/
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   ├── explore.tsx
│   │   ├── product-details.tsx
│   │   └── cart.tsx
│   ├── components/
│   │   ├── ProductCard.tsx
│   │   ├── CategoryItem.tsx
│   │   ├── SectionHeader.tsx
│   │   └── PrimaryButton.tsx
│   └── context/
├── assets/
├── package.json
├── app.json
└── README.md
```

## Requirements

- Node.js LTS
- npm
- VS Code
- Expo Go on an Android phone

## Installation

Clone or download the project, then open the project folder in the terminal.

Install dependencies:

```bash
npm install
```

Start the Expo development server:

```bash
npx expo start
```

Scan the QR code using Expo Go on your Android phone. Make sure your computer and phone can connect to the same network.

## React Native Concepts Learned

- `View` for layouts and containers
- `Text` for displaying text
- `Image` for product images
- `ScrollView` for scrollable content
- `Pressable` and touchable components for interactions
- `StyleSheet` for styling
- Props for passing data to reusable components
- Flexbox for mobile layouts
- Expo for running and testing the mobile app

## Backend

The existing Node.js and Express backend will be reused in later assignments. This assignment focuses on the React Native UI and basic mobile development.

## Testing

The app has been tested on an Android phone using Expo Go.

Verified functionality includes:

- Home screen display
- Category and product display
- Product images
- Product details navigation
- Add to Cart
- View Cart
- Quantity increase and decrease
- Cart total calculation
- Home screen scrolling

## Future Improvements

- Connect product data to the existing backend API
- Implement product listing using FlatList
- Add authentication and user-specific features in later assignments

## Author

React Native Assignment 1 — MyStore Mobile E-Commerce Application
