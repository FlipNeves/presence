import Presence from '../models/presence.model.js';

export const registerPresence = async (name, email) => {
    const existingPresence = await Presence.findOne({ email });
    if (existingPresence) throw new Error('Email already registered');

    const presence = new Presence({ name, email });
    await presence.save();

    return presence;
};

export const getAllPresences = async () => {
    return await Presence.find();
};
