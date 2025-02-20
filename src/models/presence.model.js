import mongoose from 'mongoose';

const presenceSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Name is required'] },
    email: { type: String, required: [true, 'Email is required'], unique: true },
    date: { type: Date, default: Date.now }
});

const Presence = mongoose.model('Presence', presenceSchema);

export default Presence;
