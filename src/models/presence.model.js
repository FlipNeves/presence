import mongoose from 'mongoose';

const presenceSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Name is required'] },
    email: { type: String, required: [false], unique: false },
    date: { type: Date, default: Date.now }
});

const Presence = mongoose.model('Presence', presenceSchema);

export default Presence;
