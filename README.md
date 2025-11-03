# 🛍️ Modern Ecommerce Platform

A modern, full-stack ecommerce platform built with **microservices architecture** using Next.js, TypeScript, and a suite of specialized services. This project demonstrates enterprise-level patterns with clean architecture, real-time communication, and modern UI/UX design.

## 🚀 Technologies Used

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

![Fastify](https://img.shields.io/badge/Fastify-4.0-black?style=for-the-badge&logo=fastify&logoColor=white)
![Hono](https://img.shields.io/badge/Hono-4.0-orange?style=for-the-badge&logo=hono&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-4.18-lightgrey?style=for-the-badge&logo=express&logoColor=black)
![Prisma](https://img.shields.io/badge/Prisma-5.0-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Kafka](https://img.shields.io/badge/Apache_Kafka-2.8-231F20?style=for-the-badge&logo=apache-kafka&logoColor=white)

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-Payment-635BFF?style=for-the-badge&logo=stripe&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-20.10-2496ED?style=for-the-badge&logo=docker&logoColor=white)

![Turborepo](https://img.shields.io/badge/Turborepo-1.10-EF4444?style=for-the-badge&logo=turborepo&logoColor=white)
![PNPM](https://img.shields.io/badge/PNPM-8.0-F69220?style=for-the-badge&logo=pnpm&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-4.4-FF6B6B?style=for-the-badge&logo=zustand&logoColor=white)
![Lottie](https://img.shields.io/badge/Lottie-Animations-00DDB3?style=for-the-badge&logo=lottie&logoColor=white)

</div>

### Core Technologies
- **Frontend**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js, Fastify, Hono.js
- **Databases**: PostgreSQL, MongoDB with Prisma ORM
- **Event Streaming**: Apache Kafka with KRaft mode
- **Authentication**: Clerk with JWT tokens
- **Payments**: Stripe integration
- **State Management**: Zustand for client-side state
- **Monorepo**: Turborepo with PNPM workspace
- **Containerization**: Docker & Docker Compose

## 🏗️ Architecture Overview

This project follows a **microservices architecture** pattern with the following key components:

### Frontend Applications
- **🛒 Client App** (`apps/client`) - Customer-facing ecommerce website (Port: 3000)
- **👨‍💼 Admin Dashboard** (`apps/admin`) - Admin panel for managing products, orders, and users (Port: 3001)

### Backend Microservices
- **🛍️ Product Service** (`apps/product-service`) - Manages products and categories (Port: 8001)
- **📦 Order Service** (`apps/order-service`) - Handles order processing and management (Port: 8002)
- **💳 Payment Service** (`apps/payment-service`) - Processes payments via Stripe (Port: 8003)
- **🔐 Auth Service** (`apps/auth-service`) - User authentication and authorization (Port: 8004)
- **📧 Email Service** (`apps/email-service`) - Sends transactional emails

### Shared Packages
- **📊 Types** (`packages/types`) - Shared TypeScript types across services
- **🗄️ Product DB** (`packages/product-db`) - Database models and utilities for products
- **📋 Order DB** (`packages/order-db`) - Database models and utilities for orders
- **🔄 Kafka** (`packages/kafka`) - Event streaming and messaging utilities
- **⚙️ Config Packages** - ESLint and TypeScript configurations

## 🌟 Key Features

### Customer Features
- **🎨 Modern UI/UX** - Clean, responsive design with Tailwind CSS
- **🔍 Product Search & Filtering** - Advanced search with category filters
- **🛒 Shopping Cart** - Persistent cart with quantity management
- **💳 Secure Checkout** - Multi-step checkout process with Stripe integration
- **📱 Responsive Design** - Mobile-first approach for all devices
- **👤 User Authentication** - Secure login/signup via Clerk
- **📦 Order Tracking** - View order history and status

### Admin Features
- **📊 Analytics Dashboard** - Order trends, sales charts, and metrics
- **📦 Product Management** - CRUD operations for products and categories
- **🛍️ Order Management** - View and manage customer orders
- **👥 User Management** - Admin user controls and permissions
- **📈 Real-time Analytics** - Live data visualization with charts

### Technical Features
- **🔄 Event-Driven Architecture** - Kafka for service communication
- **🔐 JWT Authentication** - Secure token-based auth with Clerk
- **📧 Email Notifications** - Automated transactional emails
- **🏪 Real-time Updates** - Live order and inventory updates
- **🔒 Role-based Access Control** - Admin and customer permissions
- **📱 Progressive Web App** - Modern web app capabilities

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **Lottie React** - Animations and micro-interactions
- **Zustand** - State management
- **React Hook Form** - Form handling with validation

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for REST APIs
- **Fastify** - Fast web framework for Order Service
- **Hono** - Lightweight framework for Payment Service
- **Prisma** - Database ORM and migrations
- **MongoDB/PostgreSQL** - Database solutions
- **Kafka** - Event streaming platform

### Authentication & Payments
- **Clerk** - Authentication and user management
- **Stripe** - Payment processing
- **JWT** - Secure token authentication

### Development Tools
- **Turborepo** - Monorepo build system
- **PNPM** - Fast package manager
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 📸 Application Screenshots

### Customer Application (Client)

#### Homepage
![Homepage](./docs/images/client/homepage.png)
*Modern homepage with hero section, featured products, and category navigation*

#### Product Catalog
![Product Catalog](./docs/images/client/products.png)
*Product listing with advanced filtering and search capabilities*

#### Product Details
![Product Details](./docs/images/client/product-detail.png)
*Detailed product view with image gallery, options, and reviews*

#### Shopping Cart
![Shopping Cart](./docs/images/client/cart.png)
*Multi-step checkout process with cart management*

#### Checkout Process
![Checkout](./docs/images/client/checkout.png)
*Secure payment process with Stripe integration*

#### Order History
![Orders](./docs/images/client/orders.png)
*Customer order history and tracking*

### Admin Dashboard

#### Dashboard Overview
![Admin Dashboard](./docs/images/admin/dashboard.png)
*Analytics dashboard with sales metrics and charts*

#### Product Management
![Product Management](./docs/images/admin/products.png)
*Comprehensive product management interface*

#### Order Management
![Order Management](./docs/images/admin/orders.png)
*Order tracking and management system*

#### Analytics & Reports
![Analytics](./docs/images/admin/analytics.png)
*Detailed analytics and reporting dashboard*

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18 or higher)
- **PNPM** (v10 or higher)
- **PostgreSQL** (for Product Service)
- **MongoDB** (for Order Service)
- **Kafka** (for event streaming)

### Environment Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/reda-trouki/Ecom.git
   cd Ecom
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Variables**
   
   Create `.env` files in each service directory with the required variables:

   **Client App** (`.env.local` in `apps/client/`)
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_PRODUCT_SERVICE_URL=http://localhost:8001
   NEXT_PUBLIC_ORDER_SERVICE_URL=http://localhost:8002
   NEXT_PUBLIC_PAYMENT_SERVICE_URL=http://localhost:8003
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

   **Admin App** (`.env.local` in `apps/admin/`)
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_PRODUCT_SERVICE_URL=http://localhost:8001
   NEXT_PUBLIC_ORDER_SERVICE_URL=http://localhost:8002
   NEXT_PUBLIC_AUTH_SERVICE_URL=http://localhost:8004
   ```

   **Product Service** (`.env` in `apps/product-service/`)
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/products_db
   CLERK_SECRET_KEY=your_clerk_secret_key
   KAFKA_BROKERS=localhost:9094,localhost:9095,localhost:9096
   ```

   **Order Service** (`.env` in `apps/order-service/`)
   ```env
   MONGODB_URI=mongodb://localhost:27017/orders_db
   CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   KAFKA_BROKERS=localhost:9094,localhost:9095,localhost:9096
   ```

   **Payment Service** (`.env` in `apps/payment-service/`)
   ```env
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
   CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   KAFKA_BROKERS=localhost:9094,localhost:9095,localhost:9096
   ```

   **Auth Service** (`.env` in `apps/auth-service/`)
   ```env
   CLERK_SECRET_KEY=your_clerk_secret_key
   KAFKA_BROKERS=localhost:9094,localhost:9095,localhost:9096
   ```

   **Email Service** (`.env` in `apps/email-service/`)
   ```env
   USER_EMAIL=your_gmail@gmail.com
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   GOOGLE_REFRESH_TOKEN=your_google_refresh_token
   KAFKA_BROKERS=localhost:9094,localhost:9095,localhost:9096
   ```

### Database Setup

1. **PostgreSQL Setup** (Product Service)
   ```bash
   # Create database
   createdb products_db
   
   # Run migrations
   cd packages/product-db
   pnpm run db:generate
   pnpm run db:deploy
   ```

2. **MongoDB Setup** (Order Service)
   ```bash
   # MongoDB should be running on localhost:27017
   # Database will be created automatically
   ```

### Kafka Setup

This project uses **Docker Compose** to run Kafka in **KRaft mode** (no Zookeeper required) with a 3-broker cluster setup.

1. **Prerequisites**
   - Docker and Docker Compose installed on your system
   - Ensure ports 9094, 9095, 9096, and 8080 are available

2. **Start Kafka Cluster**
   ```bash
   # Navigate to the Kafka package directory
   cd packages/kafka
   
   # Start the Kafka cluster with 3 brokers + Kafka UI
   docker-compose up -d
   
   # Check if all services are running
   docker-compose ps
   ```

3. **Kafka Cluster Configuration**
   - **Broker 1**: `localhost:9094` (External access)
   - **Broker 2**: `localhost:9095` (External access)
   - **Broker 3**: `localhost:9096` (External access)
   - **Kafka UI**: `http://localhost:8080` (Web interface for managing topics and messages)

4. **Environment Variables for Services**
   ```env
   # Use these broker addresses in your service .env files
   KAFKA_BROKERS=localhost:9094,localhost:9095,localhost:9096
   ```

5. **Topics Auto-Creation**
   The Kafka cluster is configured with auto-topic creation enabled. Topics will be created automatically when first accessed by the services:
   - `product.created` - Product creation events
   - `product.deleted` - Product deletion events
   - `payment.successful` - Successful payment events
   - `order.created` - Order creation events
   - `user.created` - User registration events

6. **Managing Kafka (Optional)**
   ```bash
   # View logs
   docker-compose logs -f kafka-broker-1
   
   # Stop Kafka cluster
   docker-compose down
   
   # Stop and remove volumes (reset data)
   docker-compose down -v
   
   # Access Kafka UI for topic management
   # Open http://localhost:8080 in your browser
   ```

7. **Kafka Utilities Package**
   The project includes a shared Kafka package (`@repo/kafka`) with utilities:
   - **Client**: Creates Kafka client instances for each service
   - **Producer**: Publishes events to topics
   - **Consumer**: Subscribes to topics and handles messages
   
   Example usage in services:
   ```typescript
   import { createKafkaClient, createProducer, createConsumer } from '@repo/kafka';
   
   const kafka = createKafkaClient('product-service');
   const producer = createProducer(kafka);
   const consumer = createConsumer(kafka, 'product-group');
   ```

### External Services Setup

1. **Clerk Authentication**
   - Sign up at [clerk.com](https://clerk.com)
   - Create a new application
   - Get your publishable and secret keys
   - Configure user roles (admin/customer)

2. **Stripe Payment Processing**
   - Sign up at [stripe.com](https://stripe.com)
   - Get your publishable and secret keys
   - Set up webhook endpoints for payment events

3. **Google OAuth (Email Service)**
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create OAuth 2.0 credentials
   - Enable Gmail API
   - Get refresh token for email service

### Running the Application

1. **Start all services in development mode**
   ```bash
   # This will start all apps and services concurrently
   pnpm run dev
   ```

2. **Or start services individually**
   ```bash
   # Frontend applications
   cd apps/client && pnpm run dev     # Port 3000
   cd apps/admin && pnpm run dev      # Port 3001
   
   # Backend services
   cd apps/product-service && pnpm run dev   # Port 8001
   cd apps/order-service && pnpm run dev     # Port 8002
   cd apps/payment-service && pnpm run dev   # Port 8003
   cd apps/auth-service && pnpm run dev      # Port 8004
   cd apps/email-service && pnpm run dev     # Background service
   ```

3. **Access the applications**
   - **Customer App**: http://localhost:3000
   - **Admin Dashboard**: http://localhost:3001

### Production Deployment

1. **Build all applications**
   ```bash
   pnpm run build
   ```

2. **Start production servers**
   ```bash
   pnpm run start
   ```

### Development Commands

```bash
# Install dependencies
pnpm install

# Start development servers
pnpm run dev

# Build all apps
pnpm run build

# Run linting
pnpm run lint

# Format code
pnpm run format

# Type checking
pnpm run check-types

# Generate database schemas
pnpm run db:generate

# Run database migrations
pnpm run db:migrate
```

## 🏗️ Service Architecture

### Data Flow
1. **User Action** → Frontend (Client/Admin)
2. **API Request** → Authentication Middleware (Clerk)
3. **Business Logic** → Microservice (Product/Order/Payment/Auth)
4. **Event Publishing** → Kafka
5. **Event Consumption** → Other Services
6. **Database Update** → PostgreSQL/MongoDB
7. **Notification** → Email Service

### Event-Driven Communication
- **Product Events**: `product.created`, `product.deleted`
- **Payment Events**: `payment.successful`
- **Order Events**: `order.created`
- **User Events**: `user.created`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Turborepo** for monorepo management
- **Clerk** for authentication services
- **Stripe** for payment processing
- **Vercel** for deployment platform
- **Tailwind CSS** for styling framework

---

## 📞 Support

For support, email reda.trouki@example.com or create an issue in this repository.

**Happy Coding! 🚀**
