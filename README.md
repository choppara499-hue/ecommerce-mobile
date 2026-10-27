# MyStore – React Native E-Commerce App

## Project Description
MyStore is a React Native e-commerce mobile application built using Expo and TypeScript. It fetches product data from a backend API.

## Technologies Used
- React Native
- Expo
- TypeScript
- React Navigation
- FlatList
- REST API

## Features
- Display products from live backend API
- Two-column product grid
- Product details screen
- Loading state
- Error state with Retry
- Empty products state
- Pull-to-refresh
- Login and Register UI

## Project Setup
1. Clone the repository.
2. Install dependencies:

   npm install

3. Configure the API base URL in:
   `src/services/api.ts`

4. Start Expo:

   npx expo start --clear

## Backend Configuration
Start the backend from the backend project directory:

   npm install
   npm start

The backend should be available on port 5000.

For local device testing, configure the API URL using your computer's reachable LAN IP address.

Example:
`http://YOUR_COMPUTER_IP:5000`

Do not commit secrets, passwords, database credentials, or private tokens.

## API Endpoint
GET `/product/list`

Purpose: Fetch the products list.

## Sample Response Shape
{
  "success": true,
  "count": 1,
  "data": [
    {
      "_id": "sample_product_id",
      "name": "Laptop",
      "price": 55000,
      "description": "Sample laptop",
      "image": "https://example.com/product-image.jpg",
      "stock": 10,
      "status": "active",
      "category": "Electronics"
    }
  ]
}

This is an illustrative response shape. Actual products and IDs may differ.

## Error Handling
- Displays a loading indicator while fetching.
- Displays an error message and Retry option when fetching fails.
- Displays an empty state if no products are available.

## Screenshots
Add success and error state screenshots in the project documentation or submission folder.