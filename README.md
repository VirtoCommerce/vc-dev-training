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

4. **Configure Global Variables**
   
   Set the following variables in your globals:

   | Variable | Description | Example |
   |----------|-------------|---------|
   | `baseUrl` | VirtoCommerce platform URL | `https://vcst-devtraining.govirto.com` |
   | `adminName` | Admin username | `admin` |
   | `adminPassword` | Admin password | `your-password` |

5. **Configure Environment Variables**
   
   Set the following variables in your environment:

   | Variable | Description | Example |
   |----------|-------------|---------|
   | `storeId` | Store identifier | `B2B-store` |
   | `catalogId` | Catalog identifier | `your-catalog-id` |
   | `currencyCode` | Currency code | `USD` |
   | `cultureName` | Locale/culture | `en-US` |

## 📋 Collection Overview

### OrderCreationFlow

This collection covers the complete order creation and approval workflow using VirtoCommerce GraphQL API.

#### 1. Auth
| Request | Description |
|---------|-------------|
| Admin token set | Obtain admin access token via OAuth2 password grant |

#### 2. Remove Data (Cleanup)
| Request | Description |
|---------|-------------|
| deleteUser | Delete test user via GraphQL mutation |
| deleteContact | Delete contact record |
| deleteOrganization | Delete organization via REST API |
| get Contact | Verify contact deletion |
| get user | Verify user deletion |
| get Organization | Verify organization deletion |

#### 3. Create Order
| Request | Description |
|---------|-------------|
| RequestRegistration | Register a new user account |
| Sign-in | Authenticate as the registered user |
| GetUser | Retrieve user details |
| GetMe | Get current user profile |
| GetShortCart | Fetch cart summary |
| Products | Search/browse product catalog |
| UpdateCartQuantity | Add/update items in cart |
| GetFullCart | Retrieve complete cart details |
| AddOrUpdateCartShipment | Set shipping information |
| AddOrUpdateCartPayment | Set payment method |
| CreateOrderFromCart | Convert cart to order |
| GetOrder | Retrieve order details |
| PendingForApprovals | List orders pending approval |
| approveOrder | Approve an order |
| Check status | Verify order approval status |
| rejectOrder | Reject an order |
| Check status | Verify order rejection status |

#### 4. Remove Data (Final Cleanup)
Duplicate cleanup requests to ensure test data is removed after the flow completes.

## 🔧 API Reference

The collection uses VirtoCommerce's GraphQL and REST APIs:

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/connect/token` | POST | OAuth2 token endpoint |
| `/graphql` | POST | GraphQL API endpoint |
| `/api/members` | DELETE | Delete members (REST) |
| `/api/members/{id}` | GET | Get member by ID (REST) |
| `/api/members/search` | POST | Search members (REST) |

### GraphQL Schema

The `schema-new.graphql` file contains the complete GraphQL schema reference for the VirtoCommerce platform, including:

- **Queries** - Fetch products, orders, users, carts, etc.
- **Mutations** - Create orders, manage cart, user registration, order approval
- **Subscriptions** - Real-time updates

## 🧪 Running Tests

1. Select the **vcst-devtraining** environment
2. Ensure global variables are configured (`baseUrl`, `adminName`, `adminPassword`)
3. Run the collection using the **Collection Runner**:
   - Click on the collection → **Run**
   - Select requests to execute
   - Click **Run OrderCreationFlow**

### Test Assertions

Each request includes automated tests that validate:
- ✅ HTTP status codes (200, 204, etc.)
- ✅ Response content type (JSON, GraphQL)
- ✅ GraphQL error handling (no top-level errors)
- ✅ Required field presence and types
- ✅ Business logic validation (succeeded flags, etc.)
- ✅ Response time performance (< 1000ms)

### Auto-saved Variables

The collection automatically saves variables between requests:
- `adminToken` / `adminRefresh_token` - Admin authentication tokens
- `userToken` / `userRefresh_token` - User authentication tokens
- `contactId` - Created contact ID
- `organizationId` - Created organization ID
- `approvedOrderId` - Approved order ID

## 📖 Resources

- [VirtoCommerce Documentation](https://docs.virtocommerce.org/)
- [VirtoCommerce GitHub](https://github.com/VirtoCommerce/vc-dev-training)
- [GraphQL Documentation](https://graphql.org/learn/)
- [Postman Learning Center](https://learning.postman.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is for educational and training purposes.
