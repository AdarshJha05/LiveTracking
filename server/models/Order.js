import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    item: { type: String, required: true },
    status: { type: String, default: 'processing' },
    location: {
        lat: { type: Number, default: 0 },
        lng: { type: Number, default: 0 }
    }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
export default Order;