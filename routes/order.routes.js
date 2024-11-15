import express from "express";
import * as orderController from "../controllers/order.controller.js";

const router = express.Router();
/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: A list of all orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The order's ID
 *                     example: "60c72f2f6c9b1c001c8e4c5a"
 *                   products:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         product:
 *                           type: string
 *                           description: The product ID
 *                           example: "60c72b2f5f1b2c001c8e4b8a"
 *                         productName:
 *                           type: string
 *                           description: The product's name
 *                           example: "Product 1"
 *                         quantity:
 *                           type: integer
 *                           description: The quantity of the product
 *                           example: 2
 *                   totalPrice:
 *                     type: number
 *                     description: The total price of the order
 *                     example: 150
 *                   customerName:
 *                     type: string
 *                     description: The customer's name
 *                     example: "John Doe"
 *                   customerAddress:
 *                     type: string
 *                     description: The customer's address
 *                     example: "123 Main St, Cityville"
 *                   customerPhone:
 *                     type: string
 *                     description: The customer's phone number
 *                     example: "555-1234"
 *                   status:
 *                     type: string
 *                     description: The status of the order
 *                     example: "pending"
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 *                   example: "Error fetching orders"
 */

/**
 * @swagger
 * /api/orders/create:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               products:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: string
 *                       description: The product's ID
 *                       example: "60c72b2f5f1b2c001c8e4b8a"
 *                     quantity:
 *                       type: integer
 *                       description: The quantity of the product
 *                       example: 2
 *               customerName:
 *                 type: string
 *                 description: The name of the customer
 *                 example: "John Doe"
 *               customerAddress:
 *                 type: string
 *                 description: The address of the customer
 *                 example: "123 Main St, Cityville"
 *               customerPhone:
 *                 type: string
 *                 description: The customer's phone number
 *                 example: "555-1234"
 *     responses:
 *       201:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The order's ID
 *                   example: "60c72f2f6c9b1c001c8e4c5a"
 *                 products:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       product:
 *                         type: string
 *                         description: The product ID
 *                         example: "60c72b2f5f1b2c001c8e4b8a"
 *                       productName:
 *                         type: string
 *                         description: The product's name
 *                         example: "Product 1"
 *                       quantity:
 *                         type: integer
 *                         description: The quantity of the product
 *                         example: 2
 *                 totalPrice:
 *                   type: number
 *                   description: The total price of the order
 *                   example: 150
 *                 customerName:
 *                   type: string
 *                   description: The customer's name
 *                   example: "John Doe"
 *                 customerAddress:
 *                   type: string
 *                   description: The customer's address
 *                   example: "123 Main St, Cityville"
 *                 customerPhone:
 *                   type: string
 *                   description: The customer's phone number
 *                   example: "555-1234"
 *                 status:
 *                   type: string
 *                   description: The status of the order
 *                   example: "pending"
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 *                   example: "Product not found for ID: 60c72b2f5f1b2c001c8e4b8a"
 */
/**
 * @swagger
 * /api/orders/{id}:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               products:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: string
 *                       description: The product's ID
 *                       example: "60c72b2f5f1b2c001c8e4b8a"
 *                     quantity:
 *                       type: integer
 *                       description: The quantity of the product
 *                       example: 2
 *               customerName:
 *                 type: string
 *                 description: The name of the customer
 *                 example: "John Doe"
 *               customerAddress:
 *                 type: string
 *                 description: The address of the customer
 *                 example: "123 Main St, Cityville"
 *               customerPhone:
 *                 type: string
 *                 description: The customer's phone number
 *                 example: "555-1234"
 *     responses:
 *       201:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The order's ID
 *                   example: "60c72f2f6c9b1c001c8e4c5a"
 *                 products:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       product:
 *                         type: string
 *                         description: The product ID
 *                         example: "60c72b2f5f1b2c001c8e4b8a"
 *                       productName:
 *                         type: string
 *                         description: The product's name
 *                         example: "Product 1"
 *                       quantity:
 *                         type: integer
 *                         description: The quantity of the product
 *                         example: 2
 *                 totalPrice:
 *                   type: number
 *                   description: The total price of the order
 *                   example: 150
 *                 customerName:
 *                   type: string
 *                   description: The customer's name
 *                   example: "John Doe"
 *                 customerAddress:
 *                   type: string
 *                   description: The customer's address
 *                   example: "123 Main St, Cityville"
 *                 customerPhone:
 *                   type: string
 *                   description: The customer's phone number
 *                   example: "555-1234"
 *                 status:
 *                   type: string
 *                   description: The status of the order
 *                   example: "pending"
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 *                   example: "Product not found for ID: 60c72b2f5f1b2c001c8e4b8a"
 */
/**
 * @swagger
 * /api/orders/{id}/status:
 *   patch:
 *     summary: Update order status
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The order's ID
 *         schema:
 *           type: string
 *           example: "60c72f2f6c9b1c001c8e4c5a"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 description: The new status of the order
 *                 example: "paid"
 *     responses:
 *       200:
 *         description: Order status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The order's ID
 *                   example: "60c72f2f6c9b1c001c8e4c5a"
 *                 status:
 *                   type: string
 *                   description: The updated status of the order
 *                   example: "paid"
 *       404:
 *         description: Order not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 *                   example: "Order not found"
 *       400:
 *         description: Invalid request body
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 *                   example: "Invalid status value"
 */
/**
 * @swagger
 * /api/orders/{id}:
 *   delete:
 *     summary: Delete an order by ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The order's ID
 *         schema:
 *           type: string
 *           example: "60c72f2f6c9b1c001c8e4c5a"
 *     responses:
 *       200:
 *         description: Order deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message
 *                   example: "Order deleted successfully"
 *       404:
 *         description: Order not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 *                   example: "Order not found"
 */

router.get("/", orderController.getOrders); // Lấy tất cả đơn hàng
router.get("/:id", orderController.getOrderById); // Lấy chi tiết đơn hàng theo ID
router.post("/create", orderController.createOrder); // Tạo đơn hàng mới
router.patch("/:id/status", orderController.updateOrderStatus);
router.delete("/:id", orderController.deleteOrder); // Xóa đơn hàng
router.post("/payment", orderController.initiatePayment);
router.post("/payment/ipn", orderController.handleMomoIPN);
router.post("/payment/vnpay", orderController.initiateVnpayPayment);

export default router;
