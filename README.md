# VirtoCommerce Development Training

A collection of Postman resources for testing and learning VirtoCommerce e-commerce platform API workflows.

## 📁 Project Structure

```
vc-dev-training/
└── Postman_collections/
    ├── OrderCreationFlow.postman_collection.json   # Main API test collection
    ├── vcst-devtraining.postman_environment.json   # Environment variables
    ├── workspace.postman_globals.json              # Global variables
    └── schema-new.graphql                          # GraphQL schema reference
```

## 🚀 Getting Started

### Prerequisites

- [Postman](https://www.postman.com/downloads/) installed on your machine
- Access to a VirtoCommerce instance (store URL and credentials)

### Setup Instructions

1. **Import the Collection**
   - Open Postman
   - Click **Import** → Select `Postman_collections/OrderCreationFlow.postman_collection.json`

2. **Import the Environment**
   - Click **Import** → Select `Postman_collections/vcst-devtraining.postman_environment.json`

3. **Import Global Variables**
   - Click **Import** → Select `Postman_collections/workspace.postman_globals.json`

4. **Configure Environment Variables**
   
   Set the following variables in your environment:

   | Variable | Description | Example |
   |----------|-------------|---------|
   | `baseUrl` | VirtoCommerce platform URL | `https://vcst-devtraining.govirto.com` |
   | `storeId` | Store identifier | `B2B-store` |
   | `catalogId` | Catalog identifier | `catalogId` |
   | `currencyCode` | Currency code | `USD` |
   | `cultureName` | Locale/culture | `en-US` |
   | `adminName` | Admin username | `admin` |
   | `adminPassword` | Admin password | `your-password` |

## 📋 Collection Overview

### OrderCreationFlow

This collection covers the complete order creation workflow using VirtoCommerce GraphQL API:

#### Authentication
- **Admin token set** - Obtain admin access token via OAuth2 password grant

#### Create Order Flow
- **RequestRegistration** - Register a new user account
- **User token set** - Authenticate as the registered user
- **Cart operations** - Add items, manage cart
- **Checkout process** - Complete the order creation

## 🔧 API Reference

The collection uses VirtoCommerce's GraphQL API. Key endpoints:

| Endpoint | Purpose |
|----------|---------|
| `/connect/token` | OAuth2 token endpoint |
| `/graphql` | GraphQL API endpoint |

### GraphQL Schema

The `schema-new.graphql` file contains the complete GraphQL schema reference for the VirtoCommerce platform, including:

- **Queries** - Fetch products, orders, users, etc.
- **Mutations** - Create orders, manage cart, user registration
- **Subscriptions** - Real-time updates

## 🧪 Running Tests

1. Select the **vcst-devtraining** environment
2. Run the collection using the **Collection Runner**:
   - Click on the collection → **Run**
   - Select requests to execute
   - Click **Run OrderCreationFlow**

Each request includes automated tests that validate:
- HTTP status codes
- Response structure
- GraphQL error handling
- Required field presence

## 📖 Resources

- [VirtoCommerce Documentation](https://docs.virtocommerce.org/)
- [VirtoCommerce GitHub](https://github.com/VirtoCommerce)
- [GraphQL Documentation](https://graphql.org/learn/)
- [Postman Learning Center](https://learning.postman.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is for educational and training purposes.

