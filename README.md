# MyStore — React Native E-Commerce App

## Project Description

MyStore is a mobile e-commerce application built using React Native, Expo, and TypeScript. This assignment focuses on displaying sample products using reusable components and a scrollable product list.

## Technologies Used

- React Native
- Expo
- TypeScript
- Expo Router
- FlatList
- StyleSheet
- Flexbox
- Pressable and Alert
- Expo Go

## Features

- MyStore home screen
- Product listing using FlatList
- At least 8 sample products using local data
- Reusable ProductCard component
- Product images, names, prices, and categories
- Unique and stable product IDs
- Two-column product grid
- View Details button with product information Alert
- Friendly message when no products are available
- Consistent image sizes and mobile-friendly styling
- Flexbox-based layouts

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
│   ├── context/
│   └── data/
│       └── products.ts
├── assets/
├── package.json
├── app.json
└── README.md
```

## Requirements

- Node.js LTS
- npm
- Visual Studio Code
- Expo Go or an Android emulator

## Installation and Running

1. Open the project folder in the terminal.
2. Install dependencies:

   `npm install`

3. Start the Expo development server:

   `npx expo start`

4. Open the app using Expo Go or an emulator.

## React Native Concepts Learned

- View and Text for layouts and text
- Image for displaying product images
- FlatList for efficient list rendering
- keyExtractor for identifying list items
- Props for passing product data to ProductCard
- StyleSheet for styling
- Pressable and Alert for user interaction
- Flexbox for responsive layouts
- Local sample data separated from UI components

## Data

Product information is stored separately in `src/data/products.ts`. Each product has a unique ID, name, price, category, and image URL. The products are displayed through the reusable ProductCard component.

## Testing Checklist

- [ ] App starts using `npx expo start`
- [ ] At least 8 products display
- [ ] Every product displays its image, name, price, and category
- [ ] FlatList uses `keyExtractor`
- [ ] ProductCard is reused for all products
- [ ] Product IDs are unique and stable
- [ ] View Details displays the selected product information
- [ ] Empty data displays a friendly message
- [ ] Images load correctly
- [ ] Layout works on a small phone screen
- [ ] Updated code is pushed to GitHub

## Backend

This assignment uses local sample data and does not require a backend API.

## Future Improvements

- Product details screen navigation
- Integration with the existing backend in a future assignment
- Additional shopping features in later assignments

## Author

React Native Assignment 2 — MyStore Mobile E-Commerce Application