import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
    try {
        const order = new Order({ 
            item: req.body.item,
            location: {lat: 12.9716, lng: 77.5946} // Example location, replace with actual data
        });
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};