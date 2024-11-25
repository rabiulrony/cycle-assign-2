Project Name: Bicycle Store Management API

Description:
This project is a RESTful API designed for bicycle store management. It allows you to perform operations such as adding, reading, updating, and deleting (CRUD) bicycle information. It also includes features such as order management and revenue calculation.

Project Features:
Bicycle Management (Products Management):

1.Adding new bicycles.

2.Viewing a list of all bicycles.

3.Viewing information about a specific bicycle.

4.Updating bicycle information.

5.Deleting bicycles.

6.Order Management:

7.Creating new orders.

8.Inventory Management (depleting stock).

9.Displaying appropriate error messages if there is not enough stock in the inventory.


Revenue Calculation:

Calculating total revenue based on all orders.
Secure and Validated Data:

Validating data using Mongoose schema.
Filtering unwanted data based on schema before saving to the database.
User Friendly Error Messages:

Detailed and clear messages in case of errors.

Special Features
Timezone Support:
Show created and updated time (createdAt, updatedAt) data.

Search Feature:
Option to find bicycles by name, brand or type.

Real-time Database Integration:
Use MongoDB and Mongoose to store and update data in real-time.

API Endpoints
1. Bicycles (Products) Endpoint:
POST /api/products: Add a new bicycle.

GET /api/products: View a list of all bicycles (with search options).

GET /api/products/:productId: View information about a specific bicycle.
PUT /api/products/:productId: Update bicycle information.
DELETE /api/products/:productId: Delete a bicycle.
2. Orders (Orders) Endpoint:
POST /api/orders: Create a new order.
GET /api/orders/revenue: Calculate revenue.